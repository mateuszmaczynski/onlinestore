import {createContext, ReactNode, useContext, useEffect, useState} from "react";

interface CartItem {
    readonly id: number;
    readonly price: number;
    readonly title: string;
    readonly count: number;
}

interface CartState {
    readonly items: readonly CartItem[];
    readonly addItemToCart: (item: CartItem) => void;
    readonly removeItemFromCart: (id: CartItem['id']) => void;
}

export const CartStateContext = createContext<CartState | null>(null);

const getCartItemsFromStorage = () => {
    const itemFromLocalStorage = localStorage.getItem("SHOPPING_CART");
    if(!itemFromLocalStorage){
        return [];
    }
    try{
        const items = JSON.parse(itemFromLocalStorage);
        return items;
    }catch(err){
        console.log(err);
        return [];
    }
}

const setCartItemsInStorage = (cartItems: CartItem[]) => {
    localStorage.setItem("SHOPPING_CART", JSON.stringify(cartItems));
}

export const CartStateContextProvider = ({children}: {children: ReactNode}) => {
    const [cartItems, setCartItems] = useState<CartItem[]>([]);

    useEffect(() => {
        setCartItems(getCartItemsFromStorage());
    }, []);

    useEffect(() => {
        setCartItemsInStorage(cartItems);
    }, [cartItems]);

    return (
        <CartStateContext.Provider
            value={{
                items: cartItems,
                addItemToCart: (item) => {
                    setCartItems((prevState) => {
                        const existingItem = prevState.find(
                            (existingItem) => existingItem.id === item.id
                        );
                        if(!existingItem){
                            return [...prevState, item];
                        }

                        return prevState.map((existingItem) => {
                            if(existingItem.id === item.id){
                                return {
                                    ...existingItem,
                                    count: existingItem.count +1,
                                }
                            }
                            return existingItem;
                        })
                    })
                },
                removeItemFromCart: id => {
                    setCartItems((prevState) => {
                        const existingItem = prevState.find(el => el.id === id)
                        if(existingItem && existingItem.count <= 1){
                            return prevState.filter((el) => el.id !== id);
                        }
                        return prevState.map((el) => {
                            if(el.id === id){
                                return {
                                    ...el,
                                    count: el.count - 1,
                                }
                            }
                            return el;
                        })
                    })
                }
            }}
        >
            {children}
        </CartStateContext.Provider>
    )
};

export const useCartState = () => {
    const cartState = useContext(CartStateContext);
    if(!cartState){
        throw new Error('You forgot CartStateContextProvider')
    }
    return cartState;
}

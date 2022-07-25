import {useCartState} from "../components/Cart/CartContext";

const CartPage = () => {
    const cartItems = useCartState();

    return (
        <div>
            <ul>
                {cartItems.items.map((item, index) => (
                    <li key={`${item.title}_${index}`}>{item.title} - {item.price}</li>
                ))}
            </ul>
        </div>
    )
}

export default CartPage;
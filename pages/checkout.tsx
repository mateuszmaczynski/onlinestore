import { Main } from "../components/Main";
import CheckoutForm from "../components/CheckoutForm";

const CheckoutPage = () => {
  return (
    <div className=" flex flex-col min-h-screen">
      <Main>
        <CheckoutForm />
      </Main>
    </div>
  );
};

export default CheckoutPage;

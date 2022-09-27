import { Main } from "../../components/Main";
import { useRouter } from "next/router";

const CheckoutSuccessPage = () => {
  const router = useRouter();

  // thanks to this, we can ask the strip about the status and items from the order
  console.log(router.query.session_id);

  return (
    <div className=" flex flex-col min-h-screen">
      <Main>
        <div className="text-2xl font-bold text-green-600">Success :)</div>
      </Main>
    </div>
  )
}

export default CheckoutSuccessPage;
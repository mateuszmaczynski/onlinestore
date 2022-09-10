import { Main } from "../components/Main";
import {NewsletterForm} from "../components/NewsletterForm";

const HomePage = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Main>
        <div className="p-16">
          <NewsletterForm />
        </div>
      </Main>
    </div>
  );
};

export default HomePage;

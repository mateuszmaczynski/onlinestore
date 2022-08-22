import { Main } from "../components/Main";

const HomePage = () => {
  return (
    <div className=" flex flex-col min-h-screen ">
      <Main>
        <div className="p-16">
          <h2 className="text-2xl font-bold tracking-tight text-gray-600 pb-5">
            O firmie
          </h2>
          <article>
            {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
                        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
                        of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was
                        popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                        and more recently with desktop publishing software like Aldus PageMaker including versions of
                        Lorem Ipsum.`}
          </article>
        </div>
      </Main>
    </div>
  );
};

export default HomePage;

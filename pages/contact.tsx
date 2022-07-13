import { Main } from "../components/Main";

const ContactPage = () => {
    return (
        <div className=" flex flex-col min-h-screen">
            <Main>
                <div className="p-16">
                    <h2 className="text-2xl font-bold tracking-tight text-gray-600 pb-5">Dane adresowe</h2>
                    <div>sklep@twojadomena.pl</div>
                </div>
            </Main>
        </div>
    );
};

export default ContactPage;
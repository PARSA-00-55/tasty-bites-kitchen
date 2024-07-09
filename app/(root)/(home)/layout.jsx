import Header from "@/components/Sheared/Header/Header";

const HomeLayout = async ({ children }) => {


    return (
        <div>
            <Header />
            <div className="container mx-auto"> {children}</div>
        </div>
    );
};

export default HomeLayout;

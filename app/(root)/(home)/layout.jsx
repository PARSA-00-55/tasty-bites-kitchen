import HomeHeader from "@/components/Headers/HomeHeader";


const HomeLayout = async ({ children }) => {


    return (
        <div>
            <HomeHeader />
            <div className="container mx-auto"> {children}</div>
        </div>
    );
};

export default HomeLayout;

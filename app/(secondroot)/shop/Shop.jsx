
import Content from "./Content";
import Sidebar from "./Sidebar";



const Shop = () => {


    return (
        <div className="container mx-auto pt-10 pb-4 lg:pt-23 lg:pb-20 md:pt-16 md:pb-4">
            <div className="flex gap-10">

                <Sidebar />

                <Content />

            </div>
        </div>

    );
};

export default Shop;

import ShopHeader from "@/components/Headers/ShopHeader";


const ShopLayout = async ({ children }) => {

    return (
        <section >
            <ShopHeader />
            {children}

        </section>
    );
};

export default ShopLayout;

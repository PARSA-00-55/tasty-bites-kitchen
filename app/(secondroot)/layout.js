import GlobalFooter from "@/components/Footers/GlobalFooter";
import ShopHeader from "@/components/Headers/ShopHeader";
import Subscribe from "@/components/Subscribe/Subscribe";

const Layout = async ({ children }) => {
  return (
    <section>
      <ShopHeader />
      {children}
      <Subscribe />
      <GlobalFooter />
    </section>
  );
};

export default Layout;

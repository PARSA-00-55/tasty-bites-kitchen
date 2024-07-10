import ShopHeader from "@/components/Headers/ShopHeader";

const Layout = async ({ children }) => {
  return (
    <section>
      <ShopHeader />
      {children}
    </section>
  );
};

export default Layout;

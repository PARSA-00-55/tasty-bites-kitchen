import Footer from "@/components/Sheared/Footer/Footer";
import Header from "@/components/Sheared/Header/Header";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container mx-auto"> {children}</div>
      <Footer />
    </div>
  );
};

export default layout;

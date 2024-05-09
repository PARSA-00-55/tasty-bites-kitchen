import Footer from "@/components/Sheared/Footer/Footer";
import Header from "@/components/Sheared/Header/Header";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default layout;

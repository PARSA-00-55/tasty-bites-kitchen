import Header from "@/components/Sheared/Header";

const layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}footer
    </div>
  );
};

export default layout;

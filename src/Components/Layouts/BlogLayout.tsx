import Footer from "../Footer";
import { Toaster } from "react-hot-toast";
import BlogHeader from "../BlogHeader";

type PageProps = {
  children: JSX.Element;
};

const AppLayout = ({ children }: PageProps) => {
  return (
    <>  
    <Toaster/>
      <BlogHeader />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
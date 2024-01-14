import Footer from "../Footer";
import { Toaster } from "react-hot-toast";
import Header from "../Header";

type PageProps = {
  children: JSX.Element;
};

const AppLayout = ({ children }: PageProps) => {
  return (
    <>  
    <Toaster/>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;
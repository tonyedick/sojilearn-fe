import Header from "../Header";
import Footer from "../Footer";
import { Toaster } from "react-hot-toast";

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
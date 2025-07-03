import Footer from "../Footer";
import { Toaster } from "react-hot-toast";
import ConstructionHeader from "../ConstructionHeader";

type PageProps = {
  children: JSX.Element;
};

const ConstructionLayout = ({ children }: PageProps) => {
  return (
    <>  
    <Toaster/>
      <ConstructionHeader />
      {children}
      <Footer />
    </>
  );
};

export default ConstructionLayout;

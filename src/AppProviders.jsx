import { CategoryProvider } from "./context/CategoryContext";
import { MobileNavProvider } from "./context/MobileNavContext";

const AppProviders = ({ children }) => {
  return (
    <MobileNavProvider>
      <CategoryProvider>{children}</CategoryProvider>
    </MobileNavProvider>
  );
};

export default AppProviders;

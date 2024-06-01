import { BrandProvider } from "./context/BrandContext";
import { CategoryProvider } from "./context/CategoryContext";
import { MobileNavProvider } from "./context/MobileNavContext";

const AppProviders = ({ children }) => {
  return (
    <MobileNavProvider>
      <CategoryProvider>
        <BrandProvider>{children}</BrandProvider>
      </CategoryProvider>
    </MobileNavProvider>
  );
};

export default AppProviders;

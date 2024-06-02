import { BrandProvider } from "./context/BrandContext";
import { CarProvider } from "./context/CarContext";
import { CategoryProvider } from "./context/CategoryContext";
import { MobileNavProvider } from "./context/MobileNavContext";

const AppProviders = ({ children }) => {
  return (
    <MobileNavProvider>
      <CategoryProvider>
        <BrandProvider>
          <CarProvider>{children}</CarProvider>
        </BrandProvider>
      </CategoryProvider>
    </MobileNavProvider>
  );
};

export default AppProviders;

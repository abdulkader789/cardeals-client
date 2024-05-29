import { MobileNavProvider } from "./context/MobileNavContext";

const AppProviders = ({ children }) => {
  return <MobileNavProvider>{children}</MobileNavProvider>;
};

export default AppProviders;

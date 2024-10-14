"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();

export const SiteProvider = ({ children }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const [modalFrame, setModalFrame] = useState(false);
  const [backDrop, setBackDrop] = useState(false);

  return (
    <SiteContext.Provider
      value={{
        isMobileMenu,
        setIsMobileMenu,
        modalFrame,
        setModalFrame,
        backDrop,
        setBackDrop,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};

// ussage:

// "use client";
// import { useContext } from "react";
// import { SiteContext } from "@/context/SiteContext";

// const Header = () => {
// const { isMobileMenu, setIsMobileMenu } = useContext(SiteContext);
// ...

// return (
//     <header>
//       Header
//       {isMobile && (
//         <button
//           onClick={() => {
//             setIsMobileMenu(!isMobileMenu);
//           }}
//         >
//           menu
//         </button>
//       )}
//     </header>
//   );
// }

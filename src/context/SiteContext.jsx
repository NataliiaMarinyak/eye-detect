"use client";
import { useState, createContext } from "react";

export const SiteContext = createContext();


export const SiteProvider = ({ children }) => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);

  const [modalFrame, setModalFrame] = useState(false);
  const [backDrop, setBackDrop] = useState(false);
  // Назва послуги, з якої відкрили форму: показуємо в заголовку і надсилаємо в заявці.
  const [modalService, setModalService] = useState("");
  // Варіант вікна заявки: "" — консультація, "freeTest" — безкоштовний тест (свій заголовок і текст).
  const [modalVariant, setModalVariant] = useState("");

  return (
    <SiteContext.Provider
      value={{
        isMobileMenu,
        setIsMobileMenu,
        modalFrame,
        setModalFrame,
        backDrop,
        setBackDrop,
        modalService,
        setModalService,
        modalVariant,
        setModalVariant,
      }}
    >
      {children}
    </SiteContext.Provider>
  );
};
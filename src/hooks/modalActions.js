"use client";

const { SiteContext } = require("@/context/SiteContext");
const { useContext } = require("react");

export const useModalActions = () => {
  const { setModalFrame } = useContext(SiteContext);
  const { setBackDrop } = useContext(SiteContext);

  const openModal = () => {
    setModalFrame(true);

    setTimeout(() => {
      setBackDrop(true);
    }, 100);
    console.log("openModalHook");
  };

  const closeModal = () => {
    setBackDrop(false);
    setTimeout(() => {
      setModalFrame(false);
    }, 1000);
    console.log("closeModalHook");
  };

  return { openModal, closeModal };
};

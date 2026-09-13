"use client";
import { useContext } from "react";
import { SiteContext } from "@/context/SiteContext";

export const useModalActions = () => {
  const { setModalFrame, setBackDrop, setModalService } = useContext(SiteContext);

  // service — назва послуги, з якої відкрили форму (необов'язково).
  const openModal = (service = "") => {
    setModalService(typeof service === "string" ? service : "");
    setModalFrame(true);
    setTimeout(() => {
      setBackDrop(true);
    }, 100);
  };

  const closeModal = () => {
    setBackDrop(false);
    setTimeout(() => {
      setModalFrame(false);
      setModalService("");
    }, 400);
  };

  return { openModal, closeModal };
};

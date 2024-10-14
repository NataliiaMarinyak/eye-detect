export const openModal = (setModalFrame, setBackDrop) => {
  setModalFrame(true);

  setTimeout(() => {
    setBackDrop(true);
  }, 100);
  console.log("openModal");
};

export const closeModal = (setBackDrop, setModalFrame) => {
  setBackDrop(false);
  setTimeout(() => {
    setModalFrame(false);
  }, 1000);
  console.log("closeModal");
};

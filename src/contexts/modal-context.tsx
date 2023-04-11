import CreateCollection from "@/components/modal/CreateCollection";
import { MODAL_NAME } from "@/utils/constants";
import { sleep } from "@/utils/helper";
import React, {
  createContext,
  useContext,
  useMemo,
  useState,
  useCallback,
  useEffect,
} from "react";

interface modalProvider {
  modal: MODAL_NAME;
  openModal: (modalName: MODAL_NAME) => void;
  closeModal: () => void;
}
const ModalContext: any = createContext(null);

const Modal: any = {
  CREATE_COLLECTION: <CreateCollection />,
  NONE: null,
};

export const useModalContext = () => {
  const modalContext: any = useContext(ModalContext);
  if (!modalContext) {
    throw new Error(
      "useWeb3Context() can only be used inside of <Web3ContextProvider />, " +
        "please declare it at a higher level."
    );
  }
  const { modalProvider } = modalContext;
  return useMemo(() => ({ ...modalProvider }), [modalContext]);
};

export const ModalContextProvider = ({ children }: any) => {
  const [modal, setModal] = useState<MODAL_NAME>(MODAL_NAME.NONE);

  const closeModal = useCallback(() => {
    setModal(MODAL_NAME.NONE);
  }, []);

  const openModal = useCallback((modalName: MODAL_NAME) => {
    setModal(modalName);
  }, []);

  const modalProvider: modalProvider = useMemo(
    () => ({
      modal,
      openModal,
      closeModal,
    }),
    [modal, openModal, closeModal]
  );

  return (
    <ModalContext.Provider value={{ modalProvider }}>
      {Modal[modal]}
      {children}
    </ModalContext.Provider>
  );
};

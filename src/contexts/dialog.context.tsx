import { createContext } from "react";

type DialogContext = {
    showModal: () => void;
    hideModal: () => void;
    show: boolean;
};

export const DialogContext = createContext({} as DialogContext);

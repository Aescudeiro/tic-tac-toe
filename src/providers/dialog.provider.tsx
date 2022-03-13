import { FC, useState } from "react";
import { DialogContext } from "@contexts/dialog.context";

export const DialogProvider: FC = ({ children }) => {
    const [show, setShow] = useState(false);

    const showModal = () => {
        setShow(true);
    };

    const hideModal = () => {
        setShow(false);
    };

    return (
        <DialogContext.Provider value={{ showModal, hideModal, show }}>
            {children}
        </DialogContext.Provider>
    );
};

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TicTacToeProvider } from "@providers/game.provider";
import { DialogProvider } from "@providers/dialog.provider";

ReactDOM.render(
    <React.StrictMode>
        <TicTacToeProvider>
            <DialogProvider>
                <App />
            </DialogProvider>
        </TicTacToeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

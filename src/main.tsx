import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { TicTacToeProvider } from "@providers/game.provider";

ReactDOM.render(
    <React.StrictMode>
        <TicTacToeProvider>
            <App />
        </TicTacToeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

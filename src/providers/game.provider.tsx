import { TicTacToeContext } from "@contexts/game.context";
import { FC, useState } from "react";

export const TicTacToeProvider: FC = ({ children }) => {
    const [grid, setGrid] = useState(Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("X");

    return (
        <TicTacToeContext.Provider value={{ grid, currentPlayer }}>
            {children}
        </TicTacToeContext.Provider>
    );
};

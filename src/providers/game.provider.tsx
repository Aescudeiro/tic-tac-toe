import { TicTacToeContext } from "@contexts/game.context";
import { FC, useState } from "react";
import { calculateWinner } from "utils/calculateWinner";

export const TicTacToeProvider: FC = ({ children }) => {
    const [grid, setGrid] = useState(Array(9).fill(""));
    const [currentPlayer, setCurrentPlayer] = useState("X");
    const winner = calculateWinner(grid);

    const handleClick = (index: number) => {
        const gridCopy = [...grid];

        if (winner || gridCopy[index]) {
            return;
        }

        gridCopy[index] = currentPlayer;
        setGrid(gridCopy);

        const nextPlayer = currentPlayer === "X" ? "O" : "X";
        setCurrentPlayer(nextPlayer);
    };

    const resetGrid = () => {
        const gridCopy = [...grid];

        for (let i = 0; i < gridCopy.length; i++) {
            gridCopy[i] = "";
        }

        setGrid(gridCopy);
        setCurrentPlayer("X");
    };

    return (
        <TicTacToeContext.Provider
            value={{ grid, handleClick, winner, currentPlayer, resetGrid }}
        >
            {children}
        </TicTacToeContext.Provider>
    );
};

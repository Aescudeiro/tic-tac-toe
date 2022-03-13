import { createContext } from "react";

type GameContext = {
    grid: string[];
    handleClick: (index: number) => void;
    winner: string | null;
    currentPlayer: string;
};

export const TicTacToeContext = createContext({} as GameContext);

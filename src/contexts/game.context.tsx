import { Score, Player } from "@typescript/types";
import { createContext } from "react";

type GameContext = {
    grid: Player[];
    winner: string | null;
    currentPlayer: string;
    score: Score;
    updateBoard: (index: number) => void;
    clearBoard: () => void;
    resetScore: () => void;
};

export const TicTacToeContext = createContext({} as GameContext);

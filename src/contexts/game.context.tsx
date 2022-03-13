import { Player } from "@typescript/types";
import { createContext } from "react";

type GameContext = {
    grid: Player[];
    onClick: (index: number) => void;
    winner: string | null;
    currentPlayer: string;
    restartGame: () => void;
    scores: {
        x: number;
        d: number;
        o: number;
    };
    newRound: () => void;
};

export const TicTacToeContext = createContext({} as GameContext);

import { createContext } from "react";

const grid = ["", "", "", "", "", "", "", "", ""];

const currentPlayer = "X";

export const TicTacToeContext = createContext({ grid, currentPlayer });

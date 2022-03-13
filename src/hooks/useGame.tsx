import { useContext } from "react";
import { TicTacToeContext } from "@contexts/game.context";

export const useGame = () => useContext(TicTacToeContext);

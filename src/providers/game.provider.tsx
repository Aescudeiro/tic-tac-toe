import { TicTacToeContext } from "@contexts/game.context";
import { Player } from "@typescript/types";
import { FC, useEffect, useState } from "react";
import { calculateWinner } from "utils/calculateWinner";

export const TicTacToeProvider: FC = ({ children }) => {
    const [grid, setGrid] = useState<Player[]>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<Player>("x");
    const winner = calculateWinner(grid);
    const [scores, setScores] = useState({
        x: 0,
        d: 0,
        o: 0,
    });

    useEffect(() => {
        if (winner) {
            setScores((prevState) => ({
                ...prevState,
                [winner]: scores[winner]++,
            }));
        }
    }, [winner]);

    const onClick = (index: number) => {
        const gridCopy = [...grid];

        if (winner || gridCopy[index]) {
            return;
        }

        gridCopy[index] = currentPlayer;
        setGrid(gridCopy);

        const nextPlayer = currentPlayer === "x" ? "o" : "x";
        setCurrentPlayer(nextPlayer);
    };

    const resetGrid = () => {
        setGrid(Array(9).fill(null));
        setCurrentPlayer("x");
    };

    const restartGame = () => {
        resetGrid();
        setScores({
            x: 0,
            d: 0,
            o: 0,
        });
    };

    const newRound = () => {
        resetGrid();
    };

    return (
        <TicTacToeContext.Provider
            value={{
                grid,
                onClick,
                winner,
                currentPlayer,
                restartGame,
                scores,
                newRound,
            }}
        >
            {children}
        </TicTacToeContext.Provider>
    );
};

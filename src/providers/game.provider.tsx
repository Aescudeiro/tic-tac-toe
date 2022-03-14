import { TicTacToeContext } from "@contexts/game.context";
import { Player, Score } from "@typescript/types";
import { FC, useEffect, useState } from "react";
import { calculateWinner } from "utils/calculateWinner";

export const TicTacToeProvider: FC = ({ children }) => {
    const [grid, setGrid] = useState<Player[]>(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState(Player.X);
    const winner = calculateWinner(grid);
    const [score, setScore] = useState<Score>({
        [Player.X]: 0,
        [Player.O]: 0,
    });

    useEffect(() => {
        if (winner) {
            setScore((prevState) => ({
                ...prevState,
                [winner]: score[winner]++,
            }));
        }
    }, [winner]);

    const getNextPlayer = (currentPlayer: Player) =>
        currentPlayer === Player.X ? Player.O : Player.X;

    const clearBoard = () => {
        setGrid(Array(9).fill(null));
    };

    const updateBoard = (index: number) => {
        const gridCopy = [...grid];

        if (winner || gridCopy[index]) {
            return;
        }

        gridCopy[index] = currentPlayer;

        setGrid(gridCopy);
        setCurrentPlayer(getNextPlayer);
    };

    const resetScore = () => {
        setScore({
            [Player.X]: 0,
            [Player.O]: 0,
        });
        clearBoard();
    };
    return (
        <TicTacToeContext.Provider
            value={{
                grid,
                winner,
                currentPlayer,
                score,
                updateBoard,
                clearBoard,
                resetScore,
            }}
        >
            {children}
        </TicTacToeContext.Provider>
    );
};

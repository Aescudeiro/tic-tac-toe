import { Square } from "@components/Square";
import { useGame } from "@hooks/useGame";

export const Board = () => {
    const { grid, currentPlayer, winner, resetGrid } = useGame();

    return (
        <div className="text-white">
            <p>
                {winner
                    ? "Winner: " + winner
                    : "Current Player: " + currentPlayer}
            </p>
            <div className="grid grid-cols-3 gap-1">
                {grid.map((_square, index) => (
                    <Square key={index} index={index} />
                ))}
            </div>
            <button onClick={resetGrid}>Reset</button>
        </div>
    );
};

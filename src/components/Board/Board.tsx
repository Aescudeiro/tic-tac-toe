import { useGame } from "@hooks/useGame";

export const Board = () => {
    const { grid, currentPlayer } = useGame();

    return (
        <div className="text-white">
            Board
            <p>current Player: {currentPlayer}</p>
            {grid.map((square) => {
                if (square === "") {
                    return "Empty";
                }

                return square;
            })}
        </div>
    );
};

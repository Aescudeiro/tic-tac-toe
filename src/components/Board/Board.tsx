import { Square } from "@components/Square";
import { useGame } from "@hooks/useGame";

export const Board = () => {
    const { grid, onClick } = useGame();

    return (
        <div className="text-black">
            <div className="grid grid-cols-3 gap-2">
                {grid.map((_square, index) => (
                    <Square
                        key={index}
                        player={grid[index]}
                        onClick={() => onClick(index)}
                    />
                ))}
            </div>
        </div>
    );
};

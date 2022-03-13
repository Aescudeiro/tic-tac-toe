import { useGame } from "@hooks/useGame";
import { FC } from "react";

type Props = {
    index: number;
};

export const Square: FC<Props> = (props) => {
    const { index } = props;
    const { grid, handleClick } = useGame();

    return (
        <button
            className="w-9 h-9 border-2 rounded border-white border-solid"
            onClick={() => handleClick(index)}
        >
            {grid[index]}
        </button>
    );
};

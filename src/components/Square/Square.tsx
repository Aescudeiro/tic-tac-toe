import { Player } from "@typescript/types";
import { FC } from "react";

type Props = {
    player: Player | null;
    onClick: () => void;
};

export const Square: FC<Props> = (props) => {
    const { player, onClick } = props;

    return (
        <button
            className="w-24 h-24 border-2 rounded border-black border-solid"
            onClick={onClick}
        >
            {player}
        </button>
    );
};

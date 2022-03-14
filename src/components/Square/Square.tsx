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
            className="w-24 h-24 border-2 text-3xl rounded border-black border-solid hover:bg-slate-400"
            onClick={onClick}
        >
            {player}
        </button>
    );
};

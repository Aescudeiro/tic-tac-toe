import { useGame } from "@hooks/useGame";
import { Player } from "@typescript/types";

export const Scores = () => {
    const { score } = useGame();

    return (
        <div className="flex justify-between w-full mt-2">
            <div className="border-b-2 overflow-hidden rounded flex text-white">
                <div className="bg-sky-600 hover:bg-blue-dark p-2">
                    {Player.X}
                </div>
                <div className="p-2 bg-sky-300">{score[Player.X]}</div>
            </div>
            <div className="border-b-2 overflow-hidden rounded flex text-white">
                <div className="bg-sky-600 hover:bg-blue-dark p-2">
                    {Player.O}
                </div>
                <div className="p-2 bg-sky-300">{score[Player.O]}</div>
            </div>
        </div>
    );
};

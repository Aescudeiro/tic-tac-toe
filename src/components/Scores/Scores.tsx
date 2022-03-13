import { useGame } from "@hooks/useGame";

export const Scores = () => {
    const { scores } = useGame();

    return (
        <div className="flex justify-between w-full mt-2">
            <div className="border-b-2 overflow-hidden rounded flex text-white">
                <div className="bg-sky-600 hover:bg-blue-dark p-2">O</div>
                <div className="p-2 bg-sky-300">{scores.o}</div>
            </div>
            <div className="border-b-2 overflow-hidden rounded flex text-white">
                <div className="bg-sky-600 hover:bg-blue-dark p-2">D</div>
                <div className="p-2 bg-sky-300">{scores.d}</div>
            </div>
            <div className="border-b-2 overflow-hidden rounded flex text-white">
                <div className="bg-sky-600 hover:bg-blue-dark p-2">X</div>
                <div className="p-2 bg-sky-300">{scores.x}</div>
            </div>
        </div>
    );
};

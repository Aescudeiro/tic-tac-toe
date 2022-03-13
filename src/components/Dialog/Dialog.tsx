import { useDialog } from "@hooks/useDialog";
import { useGame } from "@hooks/useGame";
import { Fragment } from "react";

export const Dialog = () => {
    const { restartGame, winner, newRound } = useGame();
    const { hideModal } = useDialog();

    const handleRestartGameClick = () => {
        restartGame();
        hideModal();
    };

    const handleNewRoundClick = () => {
        newRound();
        hideModal();
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-80">
            <div className="flex justify-center items-center h-screen w-screen">
                <div className="max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 w-80">
                    <div className="flex items-center flex-col">
                        {winner === "D" ? (
                            <h1 className="text-3xl	mt-3">It's a draw</h1>
                        ) : (
                            <Fragment>
                                <p>Congrats! YOU WON!</p>
                                <h1 className="text-3xl	mt-3">{`${winner} won the game`}</h1>
                            </Fragment>
                        )}
                    </div>
                    <div className="flex justify-between mt-4">
                        <button
                            className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 focus:ring-yellow-300"
                            onClick={handleRestartGameClick}
                        >
                            Restart
                        </button>
                        <button
                            className="px-4 py-2 rounded-md text-sm font-medium border-0 focus:outline-none focus:ring transition text-white bg-blue-500 hover:bg-blue-600 active:bg-blue-700 focus:ring-blue-300"
                            onClick={handleNewRoundClick}
                        >
                            Next Round
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

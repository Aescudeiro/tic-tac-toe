import "./App.css";
import { Board } from "@components/Board";
import { useGame } from "@hooks/useGame";
import { Dialog } from "@components/Dialog";
import { Scores } from "@components/Scores";

function App() {
    const { currentPlayer, winner, restartGame } = useGame();

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-neutral-300">
            {winner && <Dialog />}
            <h1 className="text-black">Tic-Tac-Toe</h1>
            <div>
                <div className="flex justify-between">
                    <h1>{`${currentPlayer} turn`}</h1>
                    <button
                        className="border-2 rounded px-2 mb-1 border-black border-solid hover:bg-gray-400"
                        onClick={restartGame}
                    >
                        Restart
                    </button>
                </div>
                <Board />
                <Scores />
            </div>
        </div>
    );
}

export default App;

import "./App.css";
import { Board } from "@components/Board";
import { useGame } from "@hooks/useGame";
import { useDialog } from "@hooks/useDialog";
import { Dialog } from "@components/Dialog";
import { useEffect } from "react";
import { Scores } from "@components/Scores";

function App() {
    const { currentPlayer, winner } = useGame();
    const { show, showModal } = useDialog();

    useEffect(() => {
        winner && showModal();
    }, [winner]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-neutral-300">
            <h1 className="text-black">Tic-Tac-Toe</h1>
            {show && <Dialog />}
            <div>
                <p>{`${currentPlayer} turn`}</p>
                <Board />
                <Scores />
            </div>
        </div>
    );
}

export default App;

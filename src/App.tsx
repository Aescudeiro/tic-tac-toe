import "./App.css";
import { Board } from "@components/Board";
import { useGame } from "@hooks/useGame";
import { useDialog } from "@hooks/useDialog";
import { Dialog } from "@components/Dialog/Dialog";
import { useEffect } from "react";

function App() {
    const { currentPlayer, winner, scores } = useGame();
    const { show, showModal } = useDialog();

    useEffect(() => {
        winner && showModal();
    }, [winner]);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-white">
            {show && <Dialog />}
            <h1 className="text-black">Tic-Tac-Toe</h1>
            <p>{`${currentPlayer} turn`}</p>
            <Board />
            <div>O: {scores.o}</div>
            <div>D: {scores.d}</div>
            <div>X: {scores.x}</div>
        </div>
    );
}

export default App;

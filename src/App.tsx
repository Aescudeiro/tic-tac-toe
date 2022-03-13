import "./App.css";
import { Board } from "@components/Board";

function App() {
    return (
        <div className="flex flex-col justify-center items-center h-screen bg-black">
            <h1 className="text-white">Hello Tic-Tac-Toe</h1>
            <Board />
        </div>
    );
}

export default App;

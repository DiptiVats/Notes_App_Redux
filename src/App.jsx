import { useSelector } from "react-redux";
import "./App.css";
import Board from "./component/BoardComp/Board";
import Dashboard from "./component/DashboardComp/Dashboard";

function App() {
  const isAddNewNote = useSelector((state) => state.newNote.newNoteState);

  return (
    <div>
      <div className="side-by-side">
        <Dashboard />
        {isAddNewNote && <Board />}
      </div>
    </div>
  );
}
export default App;

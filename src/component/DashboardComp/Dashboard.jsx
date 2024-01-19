import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import "./Dashboard.css";
import { newNoteActions } from "../../store";

function Dashboard() {
  const dispatch = useDispatch();
  const newNotes = useSelector((state) => state.saveNote.notes);
  function addNewNoteHandler() {
    dispatch(newNoteActions.onAddNewNote());
  }

  return (
    <div className="dashboard">
      <button className="dashboard-button__first" onClick={addNewNoteHandler}>
        <big>+</big> Add New Note
      </button>
      {newNotes.map((note) => (
        <Button
          colorOfText={note.colour}
          noteDescription={note.description}
          key={note.id}
        >
          {note.name}
        </Button>
      ))}
    </div>
  );
}
export default Dashboard;

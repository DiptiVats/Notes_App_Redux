import { useState } from "react";
import "./Board.css";
import { useDispatch, useSelector } from "react-redux";
import { saveNoteAction } from "../../store";

export default function Board() {
  const dispatch = useDispatch();
  const [initialColor, setInititalColor] = useState("#ffffff");
  const [initialName, setInitialName] = useState("");
  const [initialDescription, setINititalDiscription] = useState("");
  const newNotes = useSelector((state) => state.saveNote.notes);

  function colorChangeHandle(event) {
    setInititalColor(event.target.value);
  }

  function nameChangeHandle(event) {
    setInitialName(event.target.value);
  }

  function descriptionChangeHandle(event) {
    setINititalDiscription(event.target.value);
  }

  function inputClearHandler() {
    setInitialName("");
  }

  function SaveHandler() {
    if (initialName.length <= 4 || initialName.length >= 15) {
      return;
    }
    dispatch(
      saveNoteAction.onSaveNote({
        initialColor,
        initialDescription,
        initialName,
      })
    );
    console.log(newNotes);
    setInitialName("");
    setINititalDiscription("");
    setInititalColor("#ffffff");
  }
  return (
    <div className="board">
      <form className="board__nav">
        <div className="board__title">
          <input
            type="text"
            className="board__title-input"
            placeholder="Untitled"
            value={initialName}
            onChange={nameChangeHandle}
          />
          <button
            className="board__title-close"
            type="button"
            onClick={inputClearHandler}
          >
            X
          </button>
        </div>
        <div>
          <button
            type="button"
            className="board__save-button"
            onClick={SaveHandler}
          >
            Save
          </button>
        </div>
        <div>
          <input
            type="color"
            className="board__text-color"
            value={initialColor}
            onChange={colorChangeHandle}
          />
        </div>
      </form>
      <textarea
        className="writing-board"
        style={{ color: initialColor }}
        value={initialDescription}
        onChange={descriptionChangeHandle}
      ></textarea>
    </div>
  );
}

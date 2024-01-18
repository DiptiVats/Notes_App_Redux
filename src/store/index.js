import { configureStore, createSlice } from "@reduxjs/toolkit";

// ---------- new note adding slice ---------------
const addNewNoteSlice = createSlice({
  name: "addNewNote",
  initialState: { newNoteState: false },
  reducers: {
    onAddNewNote(state) {
      state.newNoteState = true;
    },
  },
});

// -------------saving the file slice -------------
const saveNoteSlicce = createSlice({
  name: "saveNote",
  initialState: {
    notes: [],
  },
  reducers: {
    onSaveNote(state, action) {
      const newNote = action.payload;
      state.notes.push({
        name: newNote.initialName,
        colour: newNote.initialColor,
        description: newNote.initialDescription,
        id: Math.random().toLocaleString(),
      });
    },
  },
});

const store = configureStore({
  reducer: {
    newNote: addNewNoteSlice.reducer,
    saveNote: saveNoteSlicce.reducer,
  },
});

export const saveNoteAction = saveNoteSlicce.actions;
export const newNoteActions = addNewNoteSlice.actions;
export default store;

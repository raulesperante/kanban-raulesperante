import { createSlice } from "@reduxjs/toolkit";
import { DataCardOrigin, GlobalSlice } from "../../interfaces";

const datos: DataCardOrigin[] = [
  {
    name: "Sin realizar",
    classes: "col",
    data: [
      { id: "1", content: "Estudiar Typescript" },
      { id: "2", content: "Estudiar AWS" },
      { id: "3", content: "Estudiar Inglés" },
      { id: "4", content: "Preparar Examen" },
    ],
  },
  {
    name: "En proceso",
    classes: "col",
    data: [],
  },
  {
    name: "Realizado",
    classes: "col",
    data: [],
  },
];

const initialState: GlobalSlice = {
  dataCards: datos,
};

export const slice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setDataCards: (state, action) => {
      state.dataCards = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setDataCards } = slice.actions;

export default slice.reducer;

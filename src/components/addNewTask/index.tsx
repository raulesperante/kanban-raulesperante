import { Paper, Typography } from "@mui/material";
import { PropsAddNewTask } from "../../config/interfaces";
import React from "react";
import { Button, Box } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../config/redux/store";
import { DataCardOrigin } from "../../config/interfaces";
import { v4 as uuid } from "uuid";
import { setDataCards } from "../../config/redux/features/globalSlice";

export default function AddNewTask({ name }: PropsAddNewTask) {
  const dispatch = useDispatch();
  const dataCards = useSelector((state: RootState) => state.global.dataCards);
  const [showText, setShowText] = React.useState(true);
  const [showControl, setShowControl] = React.useState(false);
  const [textTask, setTextTask] = React.useState<string | null>("");

  const addTask = React.useCallback(() => {
    if (!textTask) return;
    const data = JSON.parse(JSON.stringify(dataCards));
    const sourceIndex = data.findIndex(
      (item: DataCardOrigin) => item.name === name
    );
    // Agrega el valor al array
    data[sourceIndex].data.unshift({ id: uuid(), content: textTask });
    dispatch(setDataCards(data));
    handleClose();
  }, [dataCards, textTask]);

  const handleClose = React.useCallback(() => {
    setTextTask("");
    setShowText(true);
    setShowControl(false);
  }, []);

  const handleCreate = React.useCallback(() => {
    setShowText(false);
    setShowControl(true);
  }, []);

  const handleTextTask = (e: React.FormEvent<HTMLDivElement>) => {
    const text: string | null = e.currentTarget.textContent;
    setTextTask(text);
  };

  return (
    <>
      {showText && (
        <Typography
          sx={{ mb: 3 }}
          onClick={handleCreate}
          className="textAddTask"
        >
          + Agrega una nueva tarea
        </Typography>
      )}
      {showControl && (
        <>
          <Paper
            sx={{ mt: 3 }}
            onClick={handleCreate}
            suppressContentEditableWarning
            contentEditable
            onInput={handleTextTask}
            className="cardItem"
            elevation={3}
          >
            <Typography className="newCard"></Typography>
          </Paper>
          <Box className="btnAddTask">
            <Button onClick={addTask} variant="contained">
              Agregar
            </Button>
            <Button onClick={handleClose} variant="outlined">
              Cancelar
            </Button>
          </Box>
        </>
      )}
    </>
  );
}

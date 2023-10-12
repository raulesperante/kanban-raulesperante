import { Paper, Typography } from "@mui/material";
import AddNewTask from "../addNewTask";
import { PropsColumn } from "../../config/interfaces";

export default function Column({
  handleDragOver,
  handleDrop,
  handleDragStart,
  name,
  classes,
  data,
}: PropsColumn): JSX.Element {
  return (
    <div
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, name)}
      className={classes}
    >
      <Typography className="titleColumn" variant="h4">
        {name}
      </Typography>
      <AddNewTask name={name} />
      {data.map((item: any) => {
        return (
          <Paper
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item, name)}
            className="cardItem"
            elevation={3}
          >
            <Typography>{item.content}</Typography>
          </Paper>
        );
      })}
    </div>
  );
}

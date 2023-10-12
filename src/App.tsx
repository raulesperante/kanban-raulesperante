import React from "react";
import { Grid, Box } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import FolderSpecialIcon from "@mui/icons-material/FolderSpecial";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Column from "./components/column";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./config/redux/store";
import { setDataCards } from "./config/redux/features/globalSlice";
import { updateData } from "./helpers";
import Title from "./components/titleColumn";
import "./App.css";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state: RootState) => state.global.dataCards);

  const handleDragStart = React.useCallback(
    (e: React.DragEvent, item: any, name: string) => {
      const payload = JSON.stringify({ item, source: name });
      e.dataTransfer.setData("text", payload);
    },
    []
  );

  const handleDragOver = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();
    },
    []
  );

  const handleDrop = React.useCallback(
    (e: React.DragEvent, name: string) => {
      e.preventDefault();
      const payload = JSON.parse(e.dataTransfer.getData("text"));
      const newData = updateData(data, payload.item, payload.source, name);
      dispatch(setDataCards(newData));
    },
    [data]
  );

  return (
    <Grid container className="main">
      <Grid className="sidebar" item xs={1}>
        <Box id="first-icon" className="container-icon">
          <DashboardIcon className="color-accent-icon" fontSize="large" />
        </Box>
        <Box className="container-icon">
          <AssessmentIcon className="color-accent-icon" fontSize="large" />
        </Box>
        <Box className="container-icon">
          <FolderSpecialIcon fontSize="large" />
        </Box>
        <Box className="container-icon">
          <AccountBoxIcon fontSize="large" />
        </Box>
        <Box className="container-icon">
          <NotificationsIcon fontSize="large" />
        </Box>
      </Grid>
      <Grid className="content" item xs={11}>
        <Grid className="content-area" container>
          <Title />
          <Grid item xs={12}>
            <div className="container">
              {data.map((item) => {
                return (
                  <Column
                    key={item.name}
                    name={item.name}
                    classes={item.classes}
                    data={item.data}
                    handleDragOver={handleDragOver}
                    handleDrop={handleDrop}
                    handleDragStart={handleDragStart}
                  />
                );
              })}
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;

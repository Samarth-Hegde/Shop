import logo from "./logo.svg";
import "./App.css";
import { Button } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DataCollection from "./Pages/dataCollection/dataCollection";
import Display from "./Pages/display/display";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#c203fc",
      },
      secondary: {
        main: "#eb4034",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Display />}></Route>
          <Route path="/add-product" element={<DataCollection />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

import { Box, Stack, ThemeProvider, createTheme, textFieldClasses } from "@mui/material";
import { Feed } from "./Components/Feed";
import { RightBar } from "./Components/RightBar";
import { SideBar } from "./Components/SideBar";
import { Navbar } from "./Components/Navbar";
import Add from './Components/Add'
import { light } from "@mui/material/styles/createPalette";
import { useState } from "react";
import Form from "./Test/Form";
import Account from "./Test/Account";


function App() {

  return (
    <>
    <Form />
    <Account />
    </>
  )
  
}

export default App;

// const [mode, setMode] = useState("light");

//   const darkTheme = createTheme({
//     palette: {
//       mode: mode
//     }
//   })
//   return (
//     <ThemeProvider theme={darkTheme}>
//       <Box bgcolor={"background.default"} color={"text.primary"}>
//         <Navbar />
//         <Stack direction='row' spacing={2} justifyContent={"space-between"}>
//           <SideBar setMode={setMode} mode={mode} />
//           <Feed />
//           <RightBar />
//         </Stack>
//         <Add />
//       </Box>
//     </ThemeProvider>
//   );

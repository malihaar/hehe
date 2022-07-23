import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Items from "./components/Items";
import { Container, Grid } from "@mui/material";

import { ThemeProvider, createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    fontFamily: [
      "Gilroy-Regular",
      "Gilroy-Bold",
      "Gilroy-Medium",
      "Gilroy-Light",
      "Gilroy-Heavy",
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: [
            "Gilroy-Regular",
            "Gilroy-Bold",
            "Gilroy-Medium",
            "Gilroy-Light",
            "Gilroy-Heavy",
          ].join(","),
          src: `http://fonts.cdnfonts.com/css/gilroy-bold`
        },
        body: {
          fontSize: "3rem",
          // color: "purple"
        }
      }
    }
  }
});

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Sushi",
      location: "Umaku",
      date: "Lusa",
      type: "culinary",
      important: true,
    },
    {
      id: 2,
      name: "Pottery",
      location: "Potput",
      date: "Kapan kapan",
      type: "date",
      important: false,
    },
    {
      id: 3,
      name: "Mie Ayam",
      location: "Mie Ayam Maman",
      date: "Besok",
      type: "culinary",
      important: false,
    },
  ]);

  const deleteDate = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleImportant = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, important: !item.important } : item
      )
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Header title="Date Items" />
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          {items.length > 0 ? (
            <Items  theme={theme}
              items={items}
              onToggle={toggleImportant}
              onDelete={deleteDate}
            />
          ) : (
            "Add More Date Items! <3"
          )}
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default App;

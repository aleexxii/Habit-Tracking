import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import { Container, Typography } from "@mui/material";
import AddHabitForm from "./components/add-habit-form";
function App() {
  return (
    <Provider store={store}>
      <div>
        <Container maxWidth='md'>
          <Typography align="center" component="h1" variant="h2">
            Habit Tracker
          </Typography>
          <AddHabitForm />
        </Container>
      </div>
    </Provider>
  );
}

export default App;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Habit {
  id: string;
  name: string;
  frequency: "Daily" | "Weekly";
  completedDates: string[];
  createdAt: string;
}

interface Habit_state {
  habits: Habit[];
}

const initialState: Habit_state = {
  habits: [],
};

const habit_slice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    add_habit: (
      state,
      action: PayloadAction<{ name: string; frequency: "Daily" | "Weekly" }>
    ) => {
      const newHabit: Habit = {
        id: Date.now().toString(),
        name: action.payload.name,
        frequency: action.payload.frequency,
        completedDates: [],
        createdAt: new Date().toISOString(),
      };
      state.habits.push(newHabit);
    },
  },
});

export const { add_habit } = habit_slice.actions;
export default habit_slice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export interface Habit {
    id : string;
    name : string;
    freequency : 'Daily' | 'Weekly';
    completedDates : string[];
    createdAt : string;
}

interface Habit_state {
    habits : Habit[]
}

const initialState:Habit_state = {
    habits : []
}

const habit_slice = createSlice({
    name : 'habits',
    initialState,
    reducers : {
        add_habit : () => {}
    }
})

export const {add_habit} = habit_slice.actions;
export default habit_slice.reducer
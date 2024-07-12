// src/features/counter/counterSlice.js
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type session = {
    id: string,
    title: string,
    summary: string,
    date: string,
}
export type sessionStore = {
    sessions: session[]
}
const initialState: session[]  = []
export const sessionSlice = createSlice({
  name: 'sessions',
  initialState,
  reducers: {
    addSessions: (state, action: PayloadAction<session>) => {
        const index = state.findIndex((s) => s.id === action.payload.id);
        if(index === -1){

            state.push(action.payload)
        }
    },
    removeSession: (state, action: PayloadAction<string>) => {
        const index = state.findIndex((s) => s.id === action.payload);
        if (index !== -1) {
          state.splice(index, 1);
        }
      },
  },
});

export const { addSessions, removeSession } = sessionSlice.actions;

export default sessionSlice.reducer;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import questionReducer from "../features/questionSlice.js";

export const store = configureStore({
	reducer: {
		user: userReducer,
		question: questionReducer,
	},
});

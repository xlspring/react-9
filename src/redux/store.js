import {configureStore} from "@reduxjs/toolkit";
import logoSlice from "./slices/logoSlice";
import menuSlice from "./slices/menuSlice";
import datetimeSlice from "./slices/datetimeSlice";

export const store = configureStore({
	reducer: {
		logo: logoSlice,
		menu: menuSlice,
		datetime: datetimeSlice
	}
})
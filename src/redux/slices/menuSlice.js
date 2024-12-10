import {createSlice} from "@reduxjs/toolkit";

const menuSlice = createSlice({
	name: "menu",
	initialState: [
		{ text: "Google", url: "http://google.com" },
		{ text: "Facebook", url: "http://facebook.com" },
		{ text: "Netflix", url: "http://netflix.com" },
		{ text: "Apple", url: "http://apple.com" },
		{ text: "lcoalhost", url: "http://localhost:3000/" },
		{ text: "Microsoft" },
	]
})

export default menuSlice.reducer;
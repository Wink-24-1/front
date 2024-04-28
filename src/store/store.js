import { configureStore, createSlice } from "@reduxjs/toolkit";

let menuState = createSlice({
  name: "menuState",
  initialState: { menu: "home" },
  reducers: {
    changeMenuToList: (state) => {
      state.menu = "list";
    },
    changeMenuToHome: (state) => {
        state.menu = "home";
      },
  },
});

export let { changeMenuToList, changeMenuToHome } = menuState.actions;

export default configureStore({
  reducer: {
    menuState: menuState.reducer,
  },
});

import {configureStore, createSlice} from '@reduxjs/toolkit';

let menuState = createSlice({
    menu: "menu",
    initialState: {menu: "home"},
    reducers:{
        changeMenu: (state, action) => {
            state.menu = "list";
        }
    }
    });

    export let {changeMenu} = menuState.actions;
    export const store = configureStore({
        reducer: {
            menuState: menuState.reducer
        }
    });
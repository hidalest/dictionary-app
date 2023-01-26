import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";

interface initialStateStore {
  theme: string;
  font: string;
}

type FontType = "mono" | "serif" | "sans";

const initialState: initialStateStore = {
  theme: "light",
  font: "sans-serif",
};

const appSlice = createSlice({
  name: "appState",
  initialState,
  reducers: {
    changeTheme(state) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },

    changeFont(state, action: PayloadAction<FontType>) {
      state.font = action.payload;
    },
  },
});

const store = configureStore({
  reducer: {
    theme: appSlice.reducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;

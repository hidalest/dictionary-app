import data from '../data.json';
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialStateStore {
  theme: string;
  font: string;
  searchedWord: JSONObject;
}

type JSONValue = string | number | boolean | JSONObject | null;

interface JSONObject {
  // use this for the JSON data
  [x: string]: JSONValue;
}

type FontType = 'mono' | 'serif' | 'sans';
type ThemeType = 'light' | 'dark';

const initialState: initialStateStore = {
  theme: data.theme || 'dark',
  font: data.font || 'mono',
  searchedWord: {},
};

const appSlice = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    changeTheme(state, action: PayloadAction<ThemeType>) {
      state.theme = action.payload;
    },

    changeFont(state, action: PayloadAction<FontType>) {
      state.font = action.payload;
    },

    changeSearchedWord(state, action: PayloadAction<JSONObject>) {
      state.searchedWord = action.payload;
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

export const appActions = appSlice.actions;

export default store;

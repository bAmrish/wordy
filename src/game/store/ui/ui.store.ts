import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import MessageModel from '../../models/message.model';

export type ThemeOption = 'light' | 'dark';

export interface UIState {
  notification: MessageModel | null;
  theme: ThemeOption;
}

const initialState: UIState = {
  notification: null,
  theme: 'light',
};

const uiStore = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    notify: (state: UIState, action: PayloadAction<string>) => {
      state.notification = new MessageModel(action.payload, 'info');
    },

    warn: (state: UIState, action: PayloadAction<string>) => {
      state.notification = new MessageModel(action.payload, 'warn');
    },

    error: (state: UIState, action: PayloadAction<string>) => {
      state.notification = new MessageModel(action.payload, 'error');
    },

    success: (state: UIState, action: PayloadAction<string>) => {
      state.notification = new MessageModel(action.payload, 'success');
    },

    clearNotification: (state: UIState) => {
      state.notification = null;
    },

    setTheme: (state: UIState, action: PayloadAction<ThemeOption>) => {
      state.theme = action.payload;
    },
  },
});

export const uiActions = uiStore.actions;
export default uiStore;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DropDownState {
  dropDownValue: string | null;
}

const initialState: DropDownState = {
  dropDownValue: null,
};

export const dropDownSlice = createSlice({
  name: "dropDown", // Change the name to "dropDown" to match your slice
  initialState,
  reducers: {
    setDropDown: (state, action: PayloadAction<string | null>) => {
      state.dropDownValue = action.payload;
    },
  },
});

export const { setDropDown } = dropDownSlice.actions;

export default dropDownSlice.reducer;

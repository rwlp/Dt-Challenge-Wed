import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface StateReduxFormSearchSlicer {
  year: string;
  makerId: string;
}

export const initialState: StateReduxFormSearchSlicer = {
  year: '',
  makerId: '',
}

const searchSlicer = createSlice({
  name: 'searchSlicer',
  initialState,
  reducers: {
    setYear: (state: StateReduxFormSearchSlicer, action: PayloadAction<string>) => {
      state.year = action.payload;
    }, 
    setMakerId: (state: StateReduxFormSearchSlicer, action: PayloadAction<string>) => {
      state.makerId = action.payload;
    },
    resetSearchParams: () => {
      return initialState;
    }
  },
});

export const {setYear, setMakerId, resetSearchParams } = searchSlicer.actions;
export default searchSlicer.reducer;
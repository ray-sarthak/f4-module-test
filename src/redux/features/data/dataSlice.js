
import { createSlice } from "@reduxjs/toolkit";


export const dataSlice = createSlice({
    name: 'data',
    initialState: {
      // Initial state here
      // For example:
      pincodeData: null,
      loading: false,
      error: null,
    },
    reducers: {
      setData: (state, action) => {
        state.pincodeData = action.payload;
      },
      setLoading: (state, action) => {
        state.loading = action.payload;
      },
      setError: (state, action) => {
        state.error = action.payload;
      },
    },
  });
  
  export const { setData, setLoading, setError } = dataSlice.actions;
  
  export const selectPincodeData = (state) => state.data.pincodeData;
  export const selectLoading = (state) => state.data.loading;
  export const selectError = (state) => state.data.error;
  
  export default dataSlice.reducer;
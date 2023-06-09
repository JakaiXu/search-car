import { createAsyncThunk, createSlice, nanoid } from "@reduxjs/toolkit";
import axios from "axios";
interface CarState {
  searchTerm: "";
  cars: { name: string; cost: number; id: string }[];
}
const initialState: CarState = {
  searchTerm: "",
  cars: [],
};
// export const fetchCars = createAsyncThunk('cars/fetchCars',async () => {
//   const response = await axios.get('http://localhost3003/cars')
//   console.log(response);
//   return response.data
  
  
// })

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    searchCar(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      state.cars = state.cars.filter((car) => car.id !== action.payload);
    },
  },
});

export const { searchCar, addCar, removeCar } = carsSlice.actions;
export const carSearchReducer = carsSlice.reducer;

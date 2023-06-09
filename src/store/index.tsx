import { configureStore } from "@reduxjs/toolkit";
import { formReducer, changeName, changeCost } from "./slices/formSlice";
import {
  carSearchReducer,
  searchCar,
  addCar,
  removeCar,
} from "./slices/carsSlice";

const store = configureStore({
  reducer: {
    form: formReducer,
    cars: carSearchReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export { store, changeName, changeCost, searchCar, addCar, removeCar };

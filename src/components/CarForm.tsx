import React, { ChangeEvent, FormEvent } from "react";
import { RootState, addCar } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { changeCost, changeName } from "../store";

const CarForm = () => {
  const dispatch = useDispatch();
  const { car, cost } = useSelector((state: RootState) => {
    return { car: state.form.carName, cost: state.form.cost };
  });

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(changeName(e.target.value));
  };
  const handleCostChange = (e: ChangeEvent<HTMLInputElement>) => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addCar({ name: car, cost: cost }));
    dispatch(changeCost(0));
    dispatch(changeName(''))
  };
  return (
    <div className="shadow-lg m-6">
      {" "}
      <label className="m-8 text-3xl ">Add Car</label>
      <form
        onSubmit={handleSubmit}
        className="flex justify-between m-6 border-b pb-6"
      >
        <div>
          <label className="px-3">Car Name</label>
          <input
            value={car}
            onChange={handleNameChange}
            placeholder="Car"
            className="border pl-2 py-2"
          />
        </div>
        <div>
          <label className="px-3">Car Value</label>
          <input
            value={cost || ""}
            type="number"
            onChange={handleCostChange}
            placeholder="Cost"
            className="border pl-2 py-2"
          />
        </div>
        <div className="pl-3">
          <button type="submit" className="border px-6 py-2 rounded bg-blue-800 text-white">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CarForm;

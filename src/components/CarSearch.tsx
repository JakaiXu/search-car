import React, { ChangeEvent } from "react";
import { searchCar } from "../store";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store";
const CarSearch = () => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state:RootState)=>state.cars.searchTerm)
  const handleSearchTermChange =(e:ChangeEvent<HTMLInputElement>) => {
    dispatch(searchCar(e.target.value))
  }
  return (
    <div className="flex justify-between m-6 border-b pb-6 shadow-lg my-8">
      <h1 className="text-3xl pl-4">My Cars</h1>
      <div>
        <label className="pr-2">Search</label>
        <input value={searchTerm} onChange={handleSearchTermChange} placeholder="Search a car" className="border pl-2 py-2" />
      </div>
    </div>
  );
};

export default CarSearch;

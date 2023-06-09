import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, removeCar } from "../store";
const CarList = () => {
  const dispatch = useDispatch();
  const { cars, name } = useSelector(
    ({ cars: { cars, searchTerm }, form: { carName } }: RootState) => {
      const filteredCars = cars.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { cars: filteredCars, name: carName };
    }
  );
  const handleRemove = (car: any) => {
    dispatch(removeCar(car.id));
  };
  console.log(cars);
  
  const renderedCars = cars.map((car) => {
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase());
    return (
      <ul
        key={car.id}
        className={` my-4 mx-2 font-${bold && "bold"}`}
      >
        <li className="p-3 flex justify-between bg-gray-200 items-center">
          {car.name}----${car.cost}
          <button
            type="button"
            className="px-6 py-2 rounded bg-red-600 text-white"
            onClick={() => {
              handleRemove(car);
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  });
  console.log(cars);

  return <div className="shadow-lg m-6  py-4">{renderedCars}</div>;
};

export default CarList;

import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
const CarValue = () => {
  const sumAmount = useSelector(({ cars: { cars, searchTerm } }: RootState) =>
    cars
      .filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
      })
      .reduce((acc, cur) => acc + cur.cost, 0)
  );

  const showSumAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(sumAmount);
  return (
    <div className="text-center font-bold text-2xl shadow-lg pb-5">
      <> Total Value: {showSumAmount}</>
    </div>
  );
};

export default CarValue;

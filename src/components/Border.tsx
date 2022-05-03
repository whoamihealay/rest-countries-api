import React from "react";
import { Link } from "react-router-dom";
import {
  Country,
  selectCountryByAlphaCode,
} from "../features/countries/countriesSlice";
import { useAppSelector } from "../hooks/redux";

interface IProps {
  border: string;
}

const Border = ({ border }: IProps) => {
  const { name } = useAppSelector((state) =>
    selectCountryByAlphaCode(state, border)
  ) as Country;

  return (
    <Link className="border-btn" to={`/country/${border}`}>
      {name.common}
    </Link>
  );
};

export default Border;

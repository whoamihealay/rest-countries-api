import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Border = ({ border, handleNav }) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const getName = async () => {
      const res = await axios.get(
        `https://restcountries.com/v2/alpha/${border}?fields=name`
      );
      setName(res.data.name);
    };
    getName();
  }, [border, name]);

  return (
    <Link
      className="border-btn"
      to={`/country/${border}`}
      onClick={() => handleNav(border)}
    >
      {name}
    </Link>
  );
};

export default Border;

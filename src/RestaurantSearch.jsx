import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchByName, clearSearch } from "./Redux/restaurantsSlice";

const RestaurantSearch = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (text.trim() === "") {
      dispatch(clearSearch());
    } else {
      dispatch(searchByName(text));
    }
  }, [text, dispatch]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search by location"
      />
    </div>
  );
};

export default RestaurantSearch;

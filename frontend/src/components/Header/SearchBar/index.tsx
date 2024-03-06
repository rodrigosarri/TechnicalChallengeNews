import React, { useState, FC } from "react";

import {
  SearchBarButton,
  SearchBarContainer,
  SearchBarInput
} from "./styled";

export const SearchBar: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [icon, setIcon] = useState("fa-search");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIcon(e.target.value ? "fa-times" : "fa-search");
  };

  const clearInput = () => {
    setInputValue("");
    setIcon("fa-search");
  };

  return (
    <SearchBarContainer>
      <SearchBarInput
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Buscar..."
        style={{ width: "100%", height: "49px" }}
      />
      <SearchBarButton onClick={inputValue ? clearInput : undefined}>
        <i className={`fa ${icon}`}></i>
      </SearchBarButton>
    </SearchBarContainer>
  );
};

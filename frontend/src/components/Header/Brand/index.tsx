import React, { FC } from "react";
import { Link } from "react-router-dom";

import { BrandContainer } from "./styled";
import estadaoBrand from "src/assets/images/estadao-brand.png";

export const Brand: FC = () => {
  return (
    <BrandContainer>
      <Link to="/">
        <img src={estadaoBrand} alt="Desafio Técnico" title="Desafio Técnico" aria-label="brand" />
      </Link>
    </BrandContainer>
  );
};

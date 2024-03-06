import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { Brand } from ".";

describe("Brand Component", () => {
  test("Renderiza o componente com a imagem e link para página inicial", () => {
    render(
      <BrowserRouter>
        <Brand />
      </BrowserRouter>
    );

    const brandImage = screen.getByRole("img");
    expect(brandImage).toBeInTheDocument();
    expect(brandImage).toHaveAttribute("src", expect.stringContaining("estadao-brand.png"));

    const link = brandImage.closest("a");
    expect(link).toHaveAttribute("href", "/");
  });
});

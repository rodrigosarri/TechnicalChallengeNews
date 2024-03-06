import React from "react";
import { render, screen } from "@testing-library/react";
import { Column } from ".";

describe("Column Component", () => {
  test("Renderiza o componente com um conteúdo filho", () => {
    const childText = "Conteúdo filho";
    render(<Column>{childText}</Column>);

    expect(screen.getByText(childText)).toBeInTheDocument();
  });
});

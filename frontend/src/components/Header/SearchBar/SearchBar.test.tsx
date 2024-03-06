import { render, screen, fireEvent } from "@testing-library/react";
import { SearchBar } from ".";

describe("SearchBar component", () => {
  it("Renderizar o campo de busca", () => {
    render(<SearchBar />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("Atualizar o valor do campo de busca", () => {
    render(<SearchBar />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "teste" } });

    expect(input).toHaveValue("teste");
  });

  it("Alterar o ícone quando algum conteúdo", () => {
    render(<SearchBar />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    expect(button.querySelector("i")).toHaveClass("fa fa-search");

    fireEvent.change(input, { target: { value: "teste" } });

    expect(button.querySelector("i")).toHaveClass("fa fa-times");
  });

  it("Limpar o campo e alterar o ícone", () => {
    render(<SearchBar />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, { target: { value: "teste" } });

    fireEvent.click(button);

    expect(input).toHaveValue("");
    expect(button.querySelector("i")).toHaveClass("fa fa-search");
  });
});

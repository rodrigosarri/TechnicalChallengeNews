import { BrowserRouter } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { PostTitle } from ".";

describe("PostTitle component", () => {
  it("Renderizar o título", () => {
    render(
    <BrowserRouter>
      <PostTitle label="Título teste unitário" highlight={false} />
    </BrowserRouter>
    );

    const titleLink = screen.getByRole("link");
    expect(titleLink).toHaveTextContent("Título teste unitário");
  });

  it("Aplicar o estilo diferente quando highlight = true", () => {
    render(
      <BrowserRouter>
        <PostTitle label="Título teste unitário" highlight />
      </BrowserRouter>
    );

    const titleContainer = screen.getByTestId("post-title-container");
    expect(titleContainer).toHaveStyle({
      backgroundColor: expect.stringContaining("#"),
    });
  });

  it("Chamar o onClick quando o título é clicado", () => {
    const mockOnClick = jest.fn();
    render(
      <BrowserRouter>
        <PostTitle label="Título teste unitário" highlight onClick={mockOnClick} />
      </BrowserRouter>
    );

    const titleLink = screen.getByRole("link");
    fireEvent.click(titleLink);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("Não chamar o onClick se não for enviado", () => {
    render(
      <BrowserRouter>
        <PostTitle label="Título teste unitário" highlight />
      </BrowserRouter>
    );

    const titleLink = screen.getByRole("link");
    fireEvent.click(titleLink);

    expect(jest.fn()).not.toHaveBeenCalled();
  });
});

import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { PostMeta } from ".";

describe("PostMeta component", () => {
  it("Renderizar o link do autor e a data", () => {
    const mockAuthor = {
      name: "Autor Teste Unitário",
      url: "autor-teste-unitario",
    };

    render(
      <BrowserRouter>
        <PostMeta
          author={mockAuthor}
          date="2024-03-05"
          highlight={false}
          views={0}
          shares={0}
        />
      </BrowserRouter>
    );

    const authorLink = screen.getByRole("link");
    expect(authorLink).toHaveTextContent("Autor Teste Unitário");
    expect(authorLink).toHaveAttribute("href", "/autor/autor-teste-unitario");

    expect(screen.getByText("2024-03-05")).toBeInTheDocument();
  });

  it("Renderizar condicionalmente views e shares com highlight = true", () => {
    const mockAuthor = {
      name: "Autor Teste Unitário",
      url: "autor-teste-unitario",
    };

    render(
      <BrowserRouter>
        <PostMeta
          author={mockAuthor}
          date="2024-03-05"
          highlight={true}
          views={100}
          shares={20}
        />
      </BrowserRouter>
    );

    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("20")).toBeInTheDocument();

    const viewIcon = screen.getByTestId("views");
    expect(viewIcon).toBeInTheDocument();

    const shareIcon = screen.getByTestId("shares");
    expect(shareIcon).toBeInTheDocument();
  });

  it("Não renderizar condicionalmente views e shares com highlight = false", () => {
    const mockAuthor = {
      name: "Autor Teste Unitário",
      url: "autor-teste-unitario",
    };
    render(
      <BrowserRouter>
        <PostMeta
          author={mockAuthor}
          date="2023-11-19"
          highlight={false}
          views={100}
          shares={20}
        />
      </BrowserRouter>
    );

    expect(screen.queryByText("100")).not.toBeInTheDocument();
    expect(screen.queryByText("20")).not.toBeInTheDocument();

    expect(
      screen.queryByRole("i", { name: /chart line/i })
    ).not.toBeInTheDocument();
    expect(screen.queryByRole("i", { name: /share/i })).not.toBeInTheDocument();
  });
});

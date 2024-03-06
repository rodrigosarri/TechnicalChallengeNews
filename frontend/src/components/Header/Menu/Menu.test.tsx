import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Menu } from ".";

describe("Menu component", () => {
  it("Renderizar a logo e a barra de busca mesmo sem itens do menu", () => {
    render(
      <BrowserRouter>
        <Menu menu={[]} />
      </BrowserRouter>
    );

    const brand = screen.getByRole("img", { name: /brand/i });
    expect(brand).toBeInTheDocument();

    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
  });

  it("Renderizar itens de menu como links na lista de navegação", () => {
    const mockMenu = [
      { label: "Inicial", url: "/" },
      { label: "Notícias", url: "/noticias" },
    ];

    render(
      <BrowserRouter>
        <Menu menu={mockMenu} />
      </BrowserRouter>
    );

    const navigation = screen.getByRole("list");
    expect(navigation).toBeInTheDocument();

    const linkItems = navigation.querySelectorAll("a");
    expect(linkItems.length).toBe(mockMenu.length);

    linkItems.forEach((item, index) => {
      expect(item).toHaveTextContent(mockMenu[index].label);
      expect(item).toHaveAttribute("href", mockMenu[index].url);
    });
  });

  it("Não renderizar a lista de navegação se o menu prop estiver vazio", () => {
    render(
      <BrowserRouter>
        <Menu menu={[]} />
      </BrowserRouter>
    );

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });
});

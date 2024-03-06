import { render, screen } from "@testing-library/react";
import {PostCategory} from ".";

describe("PostCategory component", () => {
  it("Renderizar com o título e o link da categoria", () => {
    render(<PostCategory label="Tecnologia" url="tecnologia" backgroundColor="#ff4f00" />);

    const categoryLink = screen.getByRole("link");
    expect(categoryLink).toHaveTextContent("Tecnologia");
    expect(categoryLink).toHaveAttribute("href", "/categoria/tecnologia");
  });

  it("Aplicar o estilo 'highlight' quando highlight = true", () => {
    render(<PostCategory label="Tecnologia" url="tecnologia" highlight backgroundColor="#007aff" />);

    const categoryContainer = screen.getByTestId("post-category-container");
    expect(categoryContainer).toHaveStyle({
      backgroundColor: expect.stringContaining("#"),
    });
  });

  it("Aplicar a cor de fundo enviada", () => {
    const customColor = "lightblue";
    render(<PostCategory label="Tecnologia" url="tecnologia" backgroundColor={customColor} />);

    const categoryLink = screen.getByRole("link");
    expect(categoryLink).toHaveStyle({ backgroundColor: customColor });
  });
});

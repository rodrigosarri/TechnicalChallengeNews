import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SocialMedia } from ".";

describe("SocialMedia component", () => {
  it("Não renderizar nenhum link quando a propriedade medias estiver vazia", () => {
    render(
      <BrowserRouter>
        <SocialMedia medias={[]} />
      </BrowserRouter>
    );

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("Renderizar links de mídia social com ícones baseados na chave icon", () => {
    const mediaLinks = [
      { url: "https://www.facebook.com/", icon: "fa-facebook-f" },
      { url: "https://www.instagram.com/", icon: "fa-instagram" },
    ];

    render(
      <BrowserRouter>
        <SocialMedia medias={mediaLinks} />
      </BrowserRouter>
    );

    const linkItems = screen.getAllByRole("link");
    expect(linkItems.length).toBe(mediaLinks.length);

    linkItems.forEach((item, index) => {
      expect(item).toHaveAttribute("href", mediaLinks[index].url);
      expect(item).toHaveAttribute("target", "_blank");

      const icon = item.querySelector("i");
      expect(icon).toHaveClass(`fab ${mediaLinks[index].icon}`);
    });
  });
});

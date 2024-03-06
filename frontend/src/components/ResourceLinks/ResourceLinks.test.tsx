import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import {ResourceLinks} from ".";

describe("ResourceLinks component", () => {
  it("Não renderizar nenhum link se links for vazio", () => {
    render(
      <BrowserRouter>
        <ResourceLinks links={[]} />
      </BrowserRouter>
    );

    expect(screen.queryByRole("list")).not.toBeInTheDocument();
  });

  it("Renderizar links com titulo e URL", () => {
    const links = [
      { label: "Link 1", url: "https://teste-unitario.com/1" },
      { label: "Link 2", url: "https://teste-unitario.com/2" },
    ];
    render(
      <BrowserRouter>
        <ResourceLinks links={links} />
        </BrowserRouter>
      );

    const linkItems = screen.getAllByRole("link");
    expect(linkItems.length).toBe(links.length);

    linkItems.forEach((item, index) => {
      expect(item).toHaveTextContent(links[index].label);
      expect(item).toHaveAttribute("href", links[index].url);
      expect(item).toHaveAttribute("target", "_blank");
      expect(item).toHaveAttribute("rel", "noreferrer");
    });
  });
});

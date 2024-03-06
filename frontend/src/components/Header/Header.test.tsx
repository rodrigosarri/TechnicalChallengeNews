import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, waitFor } from "@testing-library/react";
import { Header } from ".";
import * as service from "src/services";

jest.mock("src/services", () => ({
  getMenu: jest.fn(),
  getSocialMedia: jest.fn(),
  getResourceLink: jest.fn(),
}));

describe("Header Component", () => {
  const menuItems = [{ label: "Home", url: "/" }];
  const socialMediaItems = [{ icon: "fa-facebook", url: "http://facebook.com" }];
  const resourceLinkItems = [{ label: "About", url: "/about" }];

  beforeEach(() => {
    jest.clearAllMocks();
    const getMenuMock = service.getMenu as jest.MockedFunction<typeof service.getMenu>;
    const getSocialMediaMock = service.getSocialMedia as jest.MockedFunction<typeof service.getSocialMedia>;
    const getResourceLinkMock = service.getResourceLink as jest.MockedFunction<typeof service.getResourceLink>;

    getMenuMock.mockResolvedValue(menuItems);
    getSocialMediaMock.mockResolvedValue(socialMediaItems);
    getResourceLinkMock.mockResolvedValue(resourceLinkItems);
  });


  it("Renderiza corretamente e exibe a data atual", async () => {
    const { getByText } = render(<BrowserRouter><Header /></BrowserRouter>);

    const formatter = new Intl.DateTimeFormat("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    expect(getByText(formatter.format(new Date))).toBeInTheDocument();

    await waitFor(() => {
      expect(getByText(menuItems[0].label)).toBeInTheDocument();
      expect(getByText(resourceLinkItems[0].label)).toBeInTheDocument();
      expect(document.querySelector(`.fab.${socialMediaItems[0].icon}`)).toBeInTheDocument();
    });
  });
});

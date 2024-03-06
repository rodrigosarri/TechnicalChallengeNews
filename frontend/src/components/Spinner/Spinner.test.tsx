import { render, screen } from "@testing-library/react";
import { Spinner } from ".";

describe("Spinner component", () => {
  it("Renderizar o spinner com tamanho e cor padrão", () => {
    render(<Spinner />);

    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("Renderizar o spinner com tamanho personalizado baseado em prop", () => {
    const customSize = 50;
    render(<Spinner size={customSize} />);

    const spinner = screen.getByTestId("spinner");
    expect(spinner).toHaveStyle({ width: `${customSize}px`, height: `${customSize}px` });
  });

  it("Renderizar o spinner com cor personalizada baseada em prop", () => {
    const customColor = "red";
    render(<Spinner color={customColor} />);

    const spinner = screen.getByTestId("spinner");
    expect(spinner).toHaveStyle({ borderLeftColor: customColor });
  });
});

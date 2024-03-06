import { render, screen } from "@testing-library/react";
import { Wrapper } from ".";

describe("Wrapper component", () => {
  it("Renderizar o componente com conteúdo como 'filho'", () => {
    const testContent = "<p>This is content inside the wrapper.</p>";
    render(<Wrapper>{testContent}</Wrapper>);

    const container = screen.getByTestId("wrapper-container");
    expect(container).toBeInTheDocument();
    expect(container).toHaveTextContent(testContent);
  });
});

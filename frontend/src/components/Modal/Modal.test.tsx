import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from ".";

describe("Modal component", () => {
  it("Não renderizar o modal fechado", () => {
    const mockOnClose = jest.fn();
    render(<Modal isOpen={false} title="Teste Modal" onClose={mockOnClose}>Conteúdo do modal</Modal>);

    expect(screen.queryByText("Teste Modal")).not.toBeInTheDocument();
  });

  it("Renderizar o modal quando aberto", () => {
    const mockOnClose = jest.fn();
    render(<Modal isOpen={true} title="Teste Modal" onClose={mockOnClose} children={<p>Conteúdo do Modal</p>} />);

    expect(screen.getByText("Teste Modal")).toBeInTheDocument();
    expect(screen.getByText("Conteúdo do Modal")).toBeInTheDocument();
  });

  it("Chamar o onClose ao clicar no fechar ou fora do conteúdo", () => {
    const mockOnClose = jest.fn();
    render(
      <Modal isOpen={true} title="Teste Modal" onClose={mockOnClose} children={<p>Conteúdo do Modal</p>} />
    );

    const overlay = screen.getByRole("presentation");
    const closeButton = screen.getByRole("button");

    fireEvent.click(overlay);
    expect(mockOnClose).toHaveBeenCalledTimes(1);

    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(2);
  });

  it("Renderizar conteúdo do rodapé", () => {
    const mockOnClose = jest.fn();
    const footerContent = <p>Conteúdo do rodapé</p>;
    render(<Modal isOpen={true} title="Teste Modal" footerContent={footerContent} onClose={mockOnClose}>Conteúdo do Modal</Modal>);

    expect(screen.getByText("Conteúdo do rodapé")).toBeInTheDocument();
  });
});

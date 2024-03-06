import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { Post } from ".";
import * as service from "src/services";

jest.mock("src/services", () => ({
  incrementMetadataView: jest.fn(),
}));

const mockPost = {
  "uuid": "fde0cc5f-94f5-4ca1-aa30-74a135f191c6",
  "title": "Voluptatum fugit neque aspernatur officiis labore ad autem praesentium nulla nam tenetur.",
  "description": "Sint voluptatum praesentium hic sit laudantium voluptates. Soluta harum officia dolor ipsa ducimus praesentium molestiae omnis. Delectus consectetur dignissimos.\nNemo expedita ipsa iure sapiente totam soluta consequuntur similique. Aperiam debitis repellendus quisquam nobis minus nemo mollitia. Consequuntur corrupti ullam voluptates quae.\nCorporis ex earum error expedita vel distinctio. Error sit nostrum error natus aliquam. Cupiditate veritatis praesentium numquam labore tempora.",
  "image": "https://picsum.photos/seed/nMAPlT/1200/1200",
  "newsCategoryUuid": "6aee4305-edd7-4b34-9f68-d93b7a725fad",
  "newsAuthorUuid": "bbbaa4d2-d32f-4a97-951e-f79daada3492",
  "highlight": true,
  "slug": "voluptatum-fugit-neque-aspernatur-officiis-labore-ad-autem-praesentium-nulla-nam-tenetur",
  "createdAt": new Date("2025-03-04T02:56:20.000Z"),
  "updatedAt": null,
  "deletedAt": null,
  "newsCategory": {
      "uuid": "6aee4305-edd7-4b34-9f68-d93b7a725fad",
      "label": "Alimentação",
      "url": "outras",
      "color": "#ff4f00",
      "createdAt": new Date("2024-05-01T01:32:38.000Z"),
      "updatedAt": null,
      "deletedAt": null
  },
  "newsAuthor": {
      "uuid": "bbbaa4d2-d32f-4a97-951e-f79daada3492",
      "name": "Marco Pollo",
      "url": "marco-pollo",
      "createdAt": new Date("2023-09-16T08:40:08.000Z"),
      "updatedAt": null,
      "deletedAt": null
  },
  "newsMetadata": {
      "uuid": "abb9e815-9d40-47a6-9918-838032afb724",
      "newsUuid": "fde0cc5f-94f5-4ca1-aa30-74a135f191c6",
      "views": 7,
      "shares": 0,
      "createdAt": new Date("2024-03-05T22:16:03.000Z"),
      "updatedAt": new Date("2024-03-05T22:59:32.000Z"),
      "deletedAt": null
  }
};

describe("Post Component", () => {
  it("renderiza corretamente e abre modal ao clicar", async () => {
    const { getByAltText, getByText } = render(
      <BrowserRouter>
      <Post post={mockPost} highlight={true} />
      </BrowserRouter>
    );

    expect(getByText("Voluptatum fugit neque aspernatur officiis labore ad autem praesentium nulla nam tenetur.")).toBeInTheDocument();
    expect(getByText("Alimentação")).toBeInTheDocument();
    expect(getByAltText("Voluptatum fugit neque aspernatur officiis labore ad autem praesentium nulla nam tenetur.")).toHaveAttribute("src", "https://picsum.photos/seed/nMAPlT/1200/1200");

    fireEvent.click(getByAltText("Voluptatum fugit neque aspernatur officiis labore ad autem praesentium nulla nam tenetur."));

    await waitFor(() => {
      expect(getByText("Ver notícia completa")).toBeInTheDocument();
    });

    expect(service.incrementMetadataView).toHaveBeenCalledWith({ newsUuid: "fde0cc5f-94f5-4ca1-aa30-74a135f191c6" });
  });
});

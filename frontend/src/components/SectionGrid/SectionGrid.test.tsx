import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { SectionGrid } from ".";


const mockPosts = [
  {
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
        "views": 6,
        "shares": 0,
        "createdAt": new Date("2024-03-05T22:16:03.000Z"),
        "updatedAt": new Date("2024-03-05T22:33:06.000Z"),
        "deletedAt": null
      }
  },
  {
      "uuid": "768607d5-71aa-4299-a130-5a0870c3adf1",
      "title": "Aliquam repudiandae voluptatibus esse provident perferendis in eveniet.",
      "description": "Totam labore unde. Porro voluptatem delectus. Eveniet accusantium dicta voluptatum officiis aut totam nulla tenetur voluptate.\nPlaceat reiciendis nulla nesciunt. Omnis expedita quaerat. Laboriosam aliquid porro ullam dolorem quam numquam tempora.\nQuasi odit soluta odio porro nisi fuga nesciunt ad architecto. Soluta omnis necessitatibus. Aspernatur incidunt nemo explicabo excepturi.",
      "image": "https://picsum.photos/seed/mX7F35KsjM/1200/1200",
      "newsCategoryUuid": "6aee4305-edd7-4b34-9f68-d93b7a725fad",
      "newsAuthorUuid": "ec121760-5cfc-4697-8c84-3fefc69376bf",
      "highlight": true,
      "slug": "aliquam-repudiandae-voluptatibus-esse-provident-perferendis-in-eveniet",
      "createdAt": new Date("2025-01-25T09:12:47.000Z"),
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
          "uuid": "ec121760-5cfc-4697-8c84-3fefc69376bf",
          "name": "Julio César",
          "url": "julio-cesar",
          "createdAt": new Date("2024-04-08T04:51:08.000Z"),
          "updatedAt": null,
          "deletedAt": null
      },
      "newsMetadata": {
        "uuid": "abb9e815-9d40-47a6-9918-838032afb724",
        "newsUuid": "fde0cc5f-94f5-4ca1-aa30-74a135f191c6",
        "views": 6,
        "shares": 0,
        "createdAt": new Date("2024-03-05T22:16:03.000Z"),
        "updatedAt": new Date("2024-03-05T22:33:06.000Z"),
        "deletedAt": null
      }
  },
  {
      "uuid": "82f92c85-d9a2-4cd1-bfe3-6a666a9d4cc1",
      "title": "Voluptatem porro libero quaerat ut quae minima aliquam cum.",
      "description": "Voluptas repudiandae autem nam quam. Iusto quam veritatis soluta provident amet facere nesciunt delectus cumque. Odio tenetur ducimus amet.\nTempore cumque quis tempore natus maiores quibusdam. Officia quia sit est dolorum ullam asperiores quos architecto. Dignissimos sunt rem id cupiditate assumenda quod.\nIste ut neque dicta blanditiis esse nam. Illo cupiditate distinctio laboriosam. Aliquid odit ab hic dolorem dicta perspiciatis vel.",
      "image": "https://picsum.photos/seed/T2K1NGMTx/1200/1200",
      "newsCategoryUuid": "239ded9f-dcba-4e89-b6bb-5fb2b0c3c9e1",
      "newsAuthorUuid": "bbbaa4d2-d32f-4a97-951e-f79daada3492",
      "highlight": true,
      "slug": "voluptatem-porro-libero-quaerat-ut-quae-minima-aliquam-cum",
      "createdAt": new Date("2025-01-11T21:32:46.000Z"),
      "updatedAt": null,
      "deletedAt": null,
      "newsCategory": {
          "uuid": "239ded9f-dcba-4e89-b6bb-5fb2b0c3c9e1",
          "label": "Tecnologia",
          "url": "tecnologia",
          "color": "#007aff",
          "createdAt": new Date("2023-08-26T07:32:02.000Z"),
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
        "views": 6,
        "shares": 0,
        "createdAt": new Date("2024-03-05T22:16:03.000Z"),
        "updatedAt": new Date("2024-03-05T22:33:06.000Z"),
        "deletedAt": null
      }
  }
];

describe("SectionGrid component", () => {
  it("Renderizar uma postagem com highlight = true", () => {
    render(
      <BrowserRouter>
        <SectionGrid type="highlight" posts={mockPosts} />
      </BrowserRouter>
    );

    const highlightedPost = screen.getByTestId("views");
    expect(highlightedPost).toBeInTheDocument();
  });

  it("Renderizar todas as postagens em colunas separadas", () => {
    render(
      <BrowserRouter>
        <SectionGrid type="list" posts={mockPosts} />
      </BrowserRouter>
    );

    const allPosts = screen.getAllByRole("heading", { name: /postTitle/i });
    expect(allPosts.length).toBe(mockPosts.length);
  });

  it("Não deve renderizar postagens quando o post prop estiver vazio", () => {
    render(
      <BrowserRouter>
        <SectionGrid type="highlight" posts={[]} />
      </BrowserRouter>
    );

    expect(screen.queryByRole("heading")).not.toBeInTheDocument();
  });
});

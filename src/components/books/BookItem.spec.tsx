import React from "react";
import { render, screen } from "@testing-library/react";
import BookItem from "./BookItem";
import { BookStoreThemeProvidor } from "../../context/themeContext";

const dummyBook={
  id: 1,
  title: "dummyTitle",
  img: 5,
  categoryId: 2,
  form: "종이책",
  isbn: 0,
  summary: "dummySummary",
  detail: "dummyDetaio",
  author: "dummyAuthor",
  pages: 10,
  contents: "dummyContents",
  price: 10000,
  likes: 1,
  pubDate: "2019-01-01"
}

describe("BookItem", () => {
  it("렌더 여부", () => {
    render(
      <BookStoreThemeProvidor>
        <BookItem book={dummyBook} />
      </BookStoreThemeProvidor>
    );

    expect(screen.getByText(dummyBook.title)).toBeInTheDocument();

    expect(screen.getByText(dummyBook.summary)).toBeInTheDocument();

    expect(screen.getByText(dummyBook.author)).toBeInTheDocument();

    expect(screen.getByText("10,000원")).toBeInTheDocument();

    expect(screen.getByAltText(dummyBook.title)).toHaveAttribute(
      "src",
      `https://picsum.photos/id/${dummyBook.img}/600/600`
    );
  });
});

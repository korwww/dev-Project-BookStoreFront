import { render, screen } from "@testing-library/react";
import InputText from "./InputText";
import { BookStoreThemeProvidor } from "../../context/themeContext";
import React from "react";

describe("InputText 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    // 1 렌더
    render(
      <BookStoreThemeProvidor>
        <InputText placeholder="여기에 입력" inputType="text"/>
      </BookStoreThemeProvidor>
    );

    // 2 확인
    expect(screen.getByPlaceholderText("여기에 입력")).toBeInTheDocument();
  });

  it("forwardRef 테스트", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookStoreThemeProvidor>
        <InputText placeholder="여기에 입력" ref = {ref} inputType="text"/>
      </BookStoreThemeProvidor>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});

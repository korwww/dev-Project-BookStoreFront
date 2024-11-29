import { render, screen } from "@testing-library/react";
import Button from "./Button";
import { BookStoreThemeProvidor } from "../../context/themeContext";

describe("Button 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    // 1 렌더
    render(
      <BookStoreThemeProvidor>
        <Button size="large" scheme="primary">
          제목
        </Button>
      </BookStoreThemeProvidor>
    );

    // 2 확인
    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvidor>
        <Button size="large" scheme="primary">
          제목
        </Button>
      </BookStoreThemeProvidor>
    );

    expect(screen.getByRole("button")).toHaveStyle({ fontSize: "2rem" });
  });
});

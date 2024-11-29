import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookStoreThemeProvidor } from "../../context/themeContext";

describe("Title 컴포넌트 테스트", () => {
  it("렌더를 확인", () => {
    // 1 렌더
    render(
      <BookStoreThemeProvidor>
        <Title size="large">제목</Title>
      </BookStoreThemeProvidor>
    );

    // 2 확인
    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvidor>
        <Title size="large">제목</Title>
      </BookStoreThemeProvidor>
    );

    // eslint-disable-next-line testing-library/no-node-access
    expect(container?.firstChild).toHaveStyle({ fontSize: "2rem" });
  });

  it("color props 적용", () => {
    const { container } = render(
      <BookStoreThemeProvidor>
        <Title size="large" color="primary">
          제목
        </Title>
      </BookStoreThemeProvidor>
    );

    // eslint-disable-next-line testing-library/no-node-access
    expect(container?.firstChild).toHaveStyle({ color: "brown" });
  });
});

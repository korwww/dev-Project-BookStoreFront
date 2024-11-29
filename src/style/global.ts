import { createGlobalStyle } from "styled-components";
import "sanitize.css";
import { ThemeName } from "./theme";

interface Props {
  themeName: ThemeName;
}

export const GlobalStyle = createGlobalStyle<Props>`
    body{
        padding: 0;
        margin: 0;
        background-color: ${(props) => props.themeName === "light" ? "white" : "#282828"};
        transition: all 0.2s;
    }

    h1{
        margin: 0;
    }

    button{
        background-color: ${(props) => props.themeName === "light" ? "white" : "gray"};
    }

    *{
        color: ${(props) => props.themeName === "light" ? "black" : "white"};
    }
`;

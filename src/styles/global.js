import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
import colors from "./colors";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        font-size: 1em;
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        height: 100%;
        background-color: ${colors.darker};
    }
    button {
        cursor: pointer;
    }
`;

export const Row = styled.div`
  display: flex;
  align-items: ${props => props.alignItems || ""};
  justify-content: ${props => props.justifyContent || ""};
  flex-wrap: wrap;
  margin: ${props => props.margin || "10px 0 0 0"};
  background-color: ${props => props.backgroundColor || "transparent"};
  flex: ${props => props.flex || 1};
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.justifyContent || ""};
  align-items: ${props => props.alignItems || ""};
  margin: ${props => props.margin || "0 0 0 0"};
  background-color: ${props => props.backgroundColor || "transparent"};
  flex: ${props => props.flex || 1};
`;

import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 20px;
  flex: 1;
`;

export const Logo = styled.img.attrs({
  src: "/imgs/logo.png"
})`
  width: 350px;
  height: auto;
`;

export const Section = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0 40px;
`;

export const Title = styled.h6`
  color: ${colors.light};
  font-weight: bold;
  font-size: 1.3rem;
  text-transform: uppercase;
  margin: 0 5px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  margin: 0 50px;
  height: 30px;
`;

export const Button = styled.button.attrs({
  type: "button"
})`
  background-color: ${colors.orange};
  color: ${colors.light};
  text-transform: uppercase;
  font-weight: bold;
  border: none;
  width: 100px;
  margin: 0 10px;
  height: 30px;
  &:hover {
    background-color: rgba(250, 101, 54, 0.8);
  }
`;

export const InputDateTitle = styled.h6`
  color: ${colors.light};
  font-size: 1rem;
  font-weight: bold;
  margin: 0 15px;
`;

export const InputDate = styled.input`
  border: 2px solid transparent;
  width: 175px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 2px solid ${colors.orange};
  }
`;

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
  margin-left: 5px;
`;

export const DateContainer = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-around;
  margin: 0 50px;
  max-height: 30px;
`;

export const InputDate = styled.input`
  border: 2px solid transparent;
  min-width: 150px;
  &:hover {
    cursor: pointer;
  }
  &:focus {
    border: 2px solid ${colors.orange};
  }
`;

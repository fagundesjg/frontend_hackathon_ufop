import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  min-width: 216px;
  max-width: 432px;
  min-height: 123px;
  max-height: 246px;
  display: flex;
  background-color: ${colors.black};
  padding: 20px;
  margin: 5px 5px;
  border-radius: 10px;
  border: 2px solid transparent;

  &:hover {
    cursor: pointer;
    background-color: rgba(31, 33, 43, 0.5);
    border: 2px solid ${colors.orange};
  }
`;

export const Label = styled.p`
  color: ${colors.light};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${props => props.fontSize || "0.9em"};
  margin-top: 10px;
`;

export const Difference = styled.h6`
  color: ${colors.light};
  font-weight: bold;
  text-transform: uppercase;
  font-size: ${props => props.fontSize || "0.8em"};
  margin: 0 0 0 5px;
`;

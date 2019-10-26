import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

import colors from "../../styles/colors";
import { Row, Column } from "../../styles/global";
import { Container, Label, Difference } from "./styles";
import FuelIndicator from "../FuelIndicator";

const IndicatorBox = ({ label, health, previusHealth, radius }) => {
  const difference = (health - previusHealth) * 100;

  return (
    <Container>
      <Column alignItems="center">
        <FuelIndicator health={health} radius={radius} />
        <Label>{label}</Label>
      </Column>
      <Column alignItems="flex-end">
        <Row alignItems="flex-end" margin="0">
          <FontAwesomeIcon
            icon={difference > 0 ? faArrowUp : faArrowDown}
            color={colors.orange}
          />
          <Difference>
            {Math.abs(Math.round(difference)).toFixed(2) + " %"}
          </Difference>
        </Row>
        <Label>{(previusHealth * 100).toFixed(2) + "%"}</Label>
      </Column>
    </Container>
  );
};

export default IndicatorBox;

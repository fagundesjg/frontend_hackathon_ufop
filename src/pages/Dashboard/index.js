import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import colors from "../../styles/colors";
// import api from "../../services/api";
import {
  Container,
  Logo,
  Title,
  Section,
  InputDate,
  DateContainer,
  Button,
  InputDateTitle
} from "./styles";
import { Row, Column } from "../../styles/global";
import IndicatorBox from "../../components/IndicatorBox";

function Dashboard() {
  const today = moment().format("YYYY-MM-DD");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(() => {
    async function loadApiData() {
      // const { data } = await api.get("/backendHackathon");
    }

    loadApiData();
  }, []);

  const healthData = {
    label: "saúde",
    health: 0.86,
    previusHealth: 0.84
  };

  const data = [
    { label: "Resgate", health: 0.4, previusHealth: 0.84 },
    { label: "Adesão", health: 0.3, previusHealth: 0.84 },
    { label: "Evasão", health: 0.12, previusHealth: 0.84 },
    { label: "Ticket", health: 0.74, previusHealth: 0.84 },
    { label: "Fidelizados", health: 0.86, previusHealth: 0.84 }
  ];

  const chartData = {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July"
    ],
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "rgba(250,101,54,0.6)",
        borderColor: colors.light,
        borderWidth: "0.3px",
        hoverBackgroundColor: colors.orange,
        hoverBorderColor: colors.black,
        data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56, 55, 40],
        responsive: true
      }
    ]
  };

  return (
    <Container>
      <Row margin="0 0 0 0" alignItems="center" justifyContent="space-between">
        <Logo />
        <DateContainer>
          <InputDateTitle>Início Período</InputDateTitle>
          <InputDate
            type="date"
            value={startDate}
            onChange={d => setStartDate(d.target.value)}
            max={today}
          />
          <InputDateTitle>Fim Período</InputDateTitle>
          <InputDate
            type="date"
            value={endDate}
            onChange={d => setEndDate(d.target.value)}
            max={today}
          />
          <Button onClick={() => alert("Você clicou no botão!")}>Buscar</Button>
        </DateContainer>
      </Row>
      <Section>
        <Row alignItems="flex-start">
          <Column flex={4}>
            <Row alignItems="center">
              <FontAwesomeIcon icon={faCircle} color={colors.orange} />
              <Title>Evolução temporal</Title>
              <Row justifyContent="center">
                <Bar
                  data={chartData}
                  width={100}
                  height={50}
                  options={{ maintainAspectRatio: true }}
                />
              </Row>
            </Row>
          </Column>
          <Column flex={2} margin="0 0 0 30px">
            <Row alignItems="center">
              <FontAwesomeIcon icon={faCircle} color={colors.orange} />
              <Title>Saúde da empresa</Title>
              <Row justifyContent="flex-start">
                <IndicatorBox
                  radius={85}
                  label={healthData.label}
                  health={healthData.health}
                  previusHealth={healthData.previusHealth}
                />
              </Row>
            </Row>
          </Column>
        </Row>
        <Row alignItems="center" margin="20px 0 0 0">
          <FontAwesomeIcon icon={faCircle} color={colors.orange} />
          <Title>Avaliação de desempenho dos indicadores de saúde</Title>
        </Row>
        <Row justifyContent="center">
          {data.map(d => (
            <IndicatorBox
              key={Math.random()}
              radius={35}
              label={d.label}
              health={d.health}
              previusHealth={d.previusHealth}
            />
          ))}
        </Row>
      </Section>
    </Container>
  );
}

export default Dashboard;

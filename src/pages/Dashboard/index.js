import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";

import colors from "../../styles/colors";
import api from "../../services/api";
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
  const [health, setHealth] = useState(0);
  const [taxaDeAdesao, setTaxaDeAdesao] = useState({});
  const [chartDate, setChartDate] = useState({});
  const [taxaDeEvasao, setTaxaDeEvasao] = useState({});
  const [taxaDeResgate, setTaxaDeResgate] = useState({});
  const [ticketMedio, setTicketMedio] = useState({});
  const [receitaTotal, setReceitaTotal] = useState({});
  const [volumeDeVendaFidelizadas, setVolumeDeVendaFidelizadas] = useState({});
  const [chartSelected, setChartSelected] = useState(0);

  useEffect(() => {
    async function loadApiData() {
      const { data } = await api.get("/backendHackathon");
      const {
        saude,
        taxaDeAdesao,
        chartDate,
        taxaDeEvasao,
        taxaDeResgate,
        ticketMedio,
        receitaTotal,
        volumeDeVendaFidelizadas
      } = data;

      setHealth(saude);
      setTaxaDeAdesao(taxaDeAdesao);
      setChartDate(chartDate);
      setTaxaDeEvasao(taxaDeEvasao);
      setTaxaDeResgate(taxaDeResgate);
      setTicketMedio(ticketMedio);
      setReceitaTotal(receitaTotal);
      setVolumeDeVendaFidelizadas(volumeDeVendaFidelizadas);
    }

    loadApiData();
  }, []);

  const healthData = {
    label: "saúde",
    health: health,
    previusHealth: 0.84
  };

  const data = [
    {
      label: "Receita",
      health: receitaTotal.valor || 0,
      previusHealth: receitaTotal.variacaoReferencia || 0
    },
    {
      label: "Adesão",
      health: taxaDeAdesao.valor || 0,
      previusHealth: taxaDeAdesao.variacaoReferencia || 0
    },
    {
      label: "Evasão",
      health: taxaDeEvasao.valor || 0,
      previusHealth: taxaDeEvasao.variacaoReferencia || 0
    },
    {
      label: "Ticket",
      health: ticketMedio.valor || 0,
      previusHealth: ticketMedio.variacaoReferencia || 0
    },
    {
      label: "Fidelizados",
      health: volumeDeVendaFidelizadas.valor || 0,
      previusHealth: volumeDeVendaFidelizadas.variacaoReferencia || 0
    }
  ];

  const getChartValues = () => {
    switch (chartSelected) {
      case 0:
        return chartDate.values;
      case 1:
        return volumeDeVendaFidelizadas.chartDate.values;
      case 2:
        return chartDate.values;
      case 3:
        return taxaDeEvasao.chartDate.values;
      case 4:
        return ticketMedio.chartDate.values;
      case 5:
        return volumeDeVendaFidelizadas.chartDate.values;
      default:
        return chartDate.values;
    }
  };

  const chartData = {
    labels: chartDate.labels,
    datasets: [
      {
        label: "Evolução x Período",
        backgroundColor: "rgba(250,101,54,0.6)",
        borderColor: colors.light,
        borderWidth: "0.3px",
        hoverBackgroundColor: colors.orange,
        hoverBorderColor: colors.black,
        data: getChartValues(),
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
          {data.map((d, i) => (
            <button
              key={Math.random()}
              type="button"
              onClick={() => {
                console.log("CLiquei");
                setChartSelected(i);
              }}
            >
              <IndicatorBox
                radius={35}
                label={d.label}
                health={d.health}
                previusHealth={d.previusHealth}
              />
            </button>
          ))}
        </Row>
      </Section>
    </Container>
  );
}

export default Dashboard;

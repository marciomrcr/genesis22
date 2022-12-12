import { faker } from "@faker-js/faker";
import {
  CategoryScale,
  Chart as ChartJS,
  Filler,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const labels = ["Setembro", "Outubro", "Novembro"];

export const options = {
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "",
      data: labels.map(() => faker.datatype.number({ min: 50, max: 500 })),
      borderColor: "rgb(1, 152, 117,0.5)",
      backgroundColor: "rgba(104, 195, 163,0.05)",
    },
  ],
};

function Chart() {
  return (
    <Line
      data={data}
      options={options}
      height="50px"
      width="200px"
      style={{ marginTop: "50px", marginBottom: "20px" }}
    />
  );
}

export default Chart;

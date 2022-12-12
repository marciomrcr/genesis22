import {
  GiftIcon,
  HomeIcon,
  PencilIcon,
  TicketIcon,
} from "@heroicons/react/outline";

export const InvestDB = [
  {
    id: 0,
    title: "Compra de Sapatos",
    desc: " Adidas ",
    price: " 200,22 ",
    upOrDown: "up",
    percent: "1.04%",
    icon: <TicketIcon className="invest-icon" />,
  },
  {
    id: 1,
    title: "Compra de Notebook",
    desc: "Dell Inc.",
    price: "890.00",
    upOrDown: "down",
    percent: "5.04%",
    icon: <HomeIcon className="invest-icon" />,
  },
  {
    id: 2,
    title: "Educação",
    desc: "Interaction design",
    price: " 58.99 ",
    upOrDown: "up",
    percent: "10.2%",
    icon: <PencilIcon className="invest-icon" />,
  },
  {
    id: 3,
    title: "Alimentação",
    desc: "Interaction design",
    price: "13.25",
    upOrDown: "down",
    percent: "0.25%",
    icon: <GiftIcon className="invest-icon" />,
  },
];

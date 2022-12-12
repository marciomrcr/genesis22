import { CashIcon, CreditCardIcon } from "@heroicons/react/outline";
import { InvestDB } from "./../leftPart/utils/InvestmentsDB";
import Chart from "./chart/Chart";
import PortfolioItem from "./PortfolioItem";

function RightPart() {
  return (
    <div className="col-span-3 items-start justify-start flex flex-col w-full pt-12 pb-6">
      {/* top section */}
      <div className="md:flex items-center justify-center w-full lg:space-y-0 space-y-4  lg:space-x-4  px-12">
        <div className="space-y-6 w-full items-center justify-center flex flex-col ">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CashIcon className="w-8 h-8 stroke-1 " />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2> Hoje </h2>
            <h2 className="font-bold text-sm">R$ 1.220,55 </h2>
          </span>
        </div>
        {/* duplicate above ☝ */}
        <div className="space-y-6 w-full items-center justify-center flex flex-col ">
          <span className="py-4 px-4 rounded-full shadow-lg shadow-gray-300 items-center justify-center flex">
            <CreditCardIcon className="w-8 h-8 stroke-1" />
          </span>
          <span className="items-center justify-center flex flex-col">
            <h2> Despesas </h2>
            <h2 className="font-bold text-sm">R$ 200,13 </h2>
          </span>
        </div>
        <div className="bg-[#BFFA00] pt-2 items-center justify-between flex flex-col w-full rounded-t-md ">
          <span className="items-center justify-center flex flex-col w-full py-4">
            <h3> Total Venda do mês </h3>
            <h1 className="text-black font-bold text-xl 2xl:text-3xl">
              R$ 211.478.33
            </h1>
          </span>
          <div className="bg-black items-center rounded-b-md justify-center flex text-white w-full py-3 ">
            <h1>Meta superada 28% </h1>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 w-full my-4" />
      {/* chart */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-2 ">
        <h1 className="text-xl font-bold xl:text-3xl"> Potencial </h1>
        <Chart />
      </div>
      {/* bottom part */}
      <div className="w-full items-start justify-start flex flex-col px-12 py-6">
        <h1 className="text-xl font-bold xl:text-3xl py-4 ">
          {" "}
          Movimentações Recentes{" "}
        </h1>
        <div className="flex items-center justify-center space-x-6 overflow-x-auto w-full py-4 ">
          {InvestDB.map((item) => (
            <PortfolioItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default RightPart;

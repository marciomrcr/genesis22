import InvestItem from "./InvestItem";
import { InvestDB } from "./utils/InvestmentsDB";

function LeftPart() {
  return (
    <div className=" col-span-2 min-h-[90vh] border-r border-gray-200 items-start justify-start flex flex-col w-full ">
      {/* top section*/}
      <div className="w-full items-start justify-start flex flex-col px-12 pt-2 pb-2">
        <h1 className="font-bold text-xl xl:text-2xl pb-0 "> Meu Cartão</h1>

        <div className="items-start justify-start rounded-t-md flex flex-col px-6 pt-2 pb-1 bg-[#89F8B7] mt-4 w-full ">
          <h1> Banco Inter </h1>
          <h1 className=" text-xl xl:text-2xl font-bold py-4 ">R$ 20.434.00</h1>
        </div>
        <div className="bg-black rounded-b-md py-2 px-8 w-full items-start justify-between flex shadow-2xl shadow-emerald-200 ">
          <span className="flex flex-col items-start justify-start text-white">
            <h1> Número do Cartão </h1>
            <h3> **** **** **** 3711 </h3>
          </span>
          <span className="flex flex-col items-start justify-start text-white">
            <h1> CVC </h1>
            <h3>786 </h3>
          </span>
        </div>
      </div>
      {/* bottom section*/}
      <div className="w-full items-start justify-start flex flex-col px-12 py-6">
        <h1 className="font-bold text-xl xl:text-2xl pb-2 ">
          Investimentos Recentes
        </h1>
        <div className="w-full space-y-5 overflow-y-auto max-h-[350px] py-6 scrollbar-hide">
          {InvestDB.map((item) => (
            <InvestItem item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftPart;

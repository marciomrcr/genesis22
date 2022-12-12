import { FormEvent, useState } from "react";
import { prisma } from "../../../lib/prisma";

interface FormData {
  name: string;
  description: string;
  id: string;
}

export default function cadastro() {
  const { form, setForm } = useState<FormData>({
    name: "",
    description: "",
    id: "",
  });

  // const handleChange = ({
  //   target: { name, value },
  // }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  //   setMarca({ ...marca, [name]: value });

  const criarMarca = async (marca: FormData) => {
    await fetch("api/marcas", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(marca),
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      criarMarca(form);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-1/2">
      <h1 className=" text-center font-bold text-2xl mt-4">
        Cadastro de Marcas
      </h1>
      <div className="flex justify-center">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="w-auto min-w-[100%] max-w-min mx-auto space-y-6 flex flex-col items-stretch"
        >
          <input
            type="text"
            placeholder="Nome da Marca"
            name="name"
            // value={}
            onChange={handleChange}
            className=" border-2 rounded border-gray-600 "
          />
          <textarea
            placeholder="Descrição"
            name="description"
            onChange={handleChange}
            // value={}
            className=" border-2 rounded border-gray-600 "
          />
          <div className=" flex justify-center item-center  mt-0">
            <button
              type="submit"
              className="bg-blue-500 m-2 text-white rounded w-40 "
            >
              Salvar
            </button>
            <button
              type="submit"
              className="bg-red-500 m-2 right-1 text-white rounded w-40 "
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export const getServerSideProps = async () => {
  const marca = await prisma.brand.findMany({
    select: {
      name: true,
      description: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  return {
    props: {
      marca: JSON.parse(JSON.stringify(marca)),
    },
  };
};

import { useState } from "react";
import useSWR, { mutate } from "swr";
import axios from "../../services/httpService";

function NovaCategoria() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const { data } = useSWR("/api/categorias");

  const handleClick = async () => {
    try {
      mutate(
        "/api/categorias",
        [...data, { name: name, description: description }],
        false
      );
      await axios.post("/api/categorias", { name, description });

      setName(name);
      setDescription(description);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="bg-gray-50 p-8 rounded-lg">
          <h1 className="text-center mb-4">Insira os dados da Categoria</h1>
          <div className="flex space-x-2 p-2 bg-white rounded-md">
            <input
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              type="text"
              placeholder="Nome da Categoria..."
              className="w-full outline-none"
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
              type="text"
              placeholder="Descrição..."
              className="w-full outline-none"
            />
            <button
              className="bg-green-500 px-2 py-1 rounded-md text-white font-semibold"
              onClick={() => handleClick()}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NovaCategoria;
function setDescription(fetcher: { name: string; description: string }) {
  throw new Error("Function not implemented.");
}

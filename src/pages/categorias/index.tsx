import { prisma } from '../../lib/prisma';

type Categorias = {
  id: string;
  name: string;
  description: string;
};

type Props = {
  categorias: Categorias[];
};

export default function Categorias(props: Props) {
  if (!props.categorias) {
    return <h1>Carregando</h1>;
  }
  return (
    <div>
      <ul>
        {props.categorias.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

export const getServerSideProps = async () => {
  const categorias = await prisma.category.findMany({
    select: {
      id: true,
      name: true,
      description: true,
    },
    orderBy: {
      name: 'asc',
    },
  });
  console.log(categorias);

  return {
    props: { categorias },
  };
};

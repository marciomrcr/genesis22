import { prisma } from '../../lib/prisma';

export default function Marca({ marcas }) {
  return (
    <div>
      <ul>
        {marcas.map((item: any) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}

async function getServerSideProps() {
  const res = await prisma.brand.findMany({
    select: {
      name: true,
      description: true,
    },
    orderBy: {
      name: 'asc',
    },
  });
  return {
    props: {
      marcas: JSON.stringify(res),
    },
  };
}

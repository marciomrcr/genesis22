// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { createCategoria } from '../../lib/db';
import { prisma } from '../../lib/prisma';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { name, description } = req.body;
    await createCategoria(name, description);
    return res.status(200).json({ message: 'Cadastrado com sucesso' });
  } else if (req.method === 'GET') {
    const marcas = await prisma.category.findMany({
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
        marcas: JSON.stringify(marcas),
      },
    };
  }
}

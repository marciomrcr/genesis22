import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      const marcas = await prisma.category.findMany({
        select: {
          name: true,
          description: true,
          id: true,
        },
        orderBy: {
          name: 'asc',
        },
      });
      return res.status(201).json(marcas);

    case 'POST':
      const { name, description } = body;
      await prisma.category.create({
        data: {
          name,
          description,
        },
      });
      res.status(201).json({ Mensagem: 'Marca cadastrada com sucesso' });
  }
};

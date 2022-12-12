import type { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from '../../../lib/prisma';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      try {
        const id = req.query.id;

        const categoria = await prisma.category.findUnique({
          where: {
            id,
          },
        });
        if (categoria.id) return res.status(201).json(categoria);
      } catch (error: any) {
        return res.status(404).json({ message: 'categoria não encontrada' });
      }

    case 'PUT':
      const { name, description } = req.body;
      const categoriaId = req.query.id;
      const dados = { name, description };
      console.log(categoriaId);

      try {
        const categoria = await prisma.category.update({
          where: {
            id: categoriaId,
          },
          data: req.body,
        });
        return res.status(201).json(categoria);
      } catch (error: any) {
        return res
          .status(404)
          .json({ message: 'categoria não encontrada!!!!!' });
      }

    case 'DELETE':
      try {
        const id = req.query.id;
        const categoria = await prisma.category.delete({
          where: {
            id,
          },
        });
        if (categoria.id)
          return res.json(`categoria: ${categoria.name} foi apagada`);
      } catch (error: any) {
        return res.status(404).json({ message: 'categoria não encontrada' });
      }
  }
};

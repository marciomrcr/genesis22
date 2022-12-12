import { prisma } from "./prisma";

export interface Categoria {
  id?: string;
  name: string;
  description: string;
}
export interface Marca {
  id?: string;
  name: string;
  description: string;
}
export interface Receita {
  id?: string;
  name: string;
  description: string;
}
export interface Despesa {
  id?: string;
  name: string;
  description: string;
}

export async function getAllCategoria() {
  const data = await prisma.category.findMany({
    select: {
      name: true,
      description: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  return data;
}

export async function createCategoria(description: string, name: string) {
  await prisma.brand.create({
    data: {
      name,
      description,
    },
  });
}

export async function getAllMarca() {
  const data = await prisma.brand.findMany({
    select: {
      name: true,
      description: true,
    },
    orderBy: {
      name: "asc",
    },
  });
  return data;
}
export async function createMarca(description: string, name: string) {
  await prisma.brand.create({
    data: {
      name,
      description,
    },
  });
}

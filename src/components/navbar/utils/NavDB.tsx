import {
  ArchiveIcon,
  LoginIcon,
  LogoutIcon,
  ShoppingCartIcon,
  TemplateIcon,
  UserIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

export const navLinks = [
  {
    id: 0,
    title: "Dashboard",
    icon: <TemplateIcon className="nav-icon" />,
  },
  {
    id: 1,
    title: "Vendas",
    icon: <ShoppingCartIcon className="nav-icon" />,
  },
  {
    id: 2,
    title: "Clientes",
    icon: <UserIcon className="nav-icon" />,
  },
  {
    id: 3,
    title: "Produtos",
    icon: <ArchiveIcon className="nav-icon" />,
  },
  {
    id: 4,
    title: "Categorias",
    icon: (
      <Link href={"/categorias"}>
        <ArchiveIcon className="nav-icon" />
      </Link>
    ),
  },
  {
    id: 5,
    title: "Marcas",
    icon: <ArchiveIcon className="nav-icon" />,
  },
  {
    id: 6,
    title: "Estoque",
    icon: <ArchiveIcon className="nav-icon" />,
  },

  {
    id: 7,
    title: "Receitas",
    icon: <LogoutIcon className="nav-icon" />,
  },
  {
    id: 8,
    title: "Despesas",
    icon: <LoginIcon className="nav-icon" />,
  },
  {
    id: 9,
    title: "LogOut",
    icon: <LogoutIcon className="nav-icon" />,
  },
];

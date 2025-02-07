import {
  ChartNoAxesCombinedIcon,
  CircleDollarSignIcon,
  ListIcon,
  SettingsIcon,
  ShoppingCartIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="px-2 py-1 bg-gray-800">
      <nav>
        <ul className="flex text-xs justify-between">
          <li>
            <Link
              href="/"
              className="flex flex-col justify-center items-center"
            >
              <ListIcon />
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="text-gray-600">
            <Link
              href="/"
              className="flex flex-col justify-center items-center"
            >
              <ChartNoAxesCombinedIcon />
              <span>Megabot</span>
            </Link>
          </li>
          <li className="text-gray-600">
            <Link
              href="/"
              className="flex flex-col justify-center items-center"
            >
              <ShoppingCartIcon />
              <span>Bot market</span>
            </Link>
          </li>
          <li className="text-gray-600">
            <Link
              href="/"
              className="flex flex-col justify-center items-center"
            >
              <CircleDollarSignIcon />
              <span>Coin prices</span>
            </Link>
          </li>
          <li className="text-gray-600">
            <Link
              href="/"
              className="flex flex-col justify-center items-center"
            >
              <SettingsIcon />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

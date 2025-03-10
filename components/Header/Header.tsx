import { HamburgerMenuIcon, UpdateIcon } from "@radix-ui/react-icons";

export default function Header() {
  return (
    <header className="flex justify-between align-center p-2 text-gray-500">
      <button>
        <HamburgerMenuIcon width={24} height={24} />
      </button>
      <p className="font-bold text-lg">Dashboard</p>
      <button>
        <UpdateIcon width={24} height={24} />
      </button>
    </header>
  );
}

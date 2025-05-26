import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">Troop 711</h1>
        <nav className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/eagles-nest">Eagles Nest</Link>
        </nav>
      </div>
    </header>
  );
}
export default function Footer() {
  return (
    <footer className="bg-[#0a1d0a] text-green-100 text-center text-sm py-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Troop 711, Albion RI. All rights reserved.</p>
      </div>
    </footer>
  );
}
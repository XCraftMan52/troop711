export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-8">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} Troop 711, Albion RI. All rights reserved.</p>
      </div>
    </footer>
  );
}
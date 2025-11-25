export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-gray-600 mb-4">&copy; {new Date().getFullYear()} Arvin Tumangan. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="https://github.com/GrahamBallz" className="text-gray-700 hover:text-blue-600">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

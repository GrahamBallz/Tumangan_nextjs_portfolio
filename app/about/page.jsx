import Header from ".././components/Header";
import Footer from ".././components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
        <p className="text-gray-600 mb-4">
          I am a full‑stack developer with a passion for building clean, performant, and scalable web applications.
        </p>
        <p className="text-gray-600 mb-4">
          My journey began with learning HTML, CSS, and JavaScript — and I’ve expanded into React, Next.js, and Node.js. I’m deeply committed to writing maintainable code and creating intuitive UX.
        </p>
        <p className="text-gray-600">
          Outside of coding, I love contributing to open-source, designing simple UI concepts, and exploring new tech trends.
        </p>
      </section>
      <Footer />
    </main>
  );
}

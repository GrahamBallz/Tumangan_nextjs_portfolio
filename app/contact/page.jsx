"use client"; // <- MUST be the first line

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <Header />
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Get In Touch</h1>

        {submitted ? (
          <p className="text-center text-green-600">Thanks! I will get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full border p-3 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full border p-3 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              required
              className="w-full border p-3 rounded-lg h-32"
            ></textarea>

            {/* CENTERED BUTTON */}
            <button
              type="submit"
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-blue-700 transition block mx-auto"
            >
              Send Message
            </button>
          </form>
        )}

        <div className="mt-8 text-center text-gray-600">
          <p>Email: arvintumangan@gmail.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/GrahamBallz"
              className="hover:text-blue-700"
            >
              github.com/GrahamBallz
            </a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}

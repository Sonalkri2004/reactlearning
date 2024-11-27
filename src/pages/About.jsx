import React from "react";

const About = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <header className="bg-green-950 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">About ReactApp</h1>
        <p className="mt-4 text-lg">Learn more about our mission and what we stand for.</p>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-4 text-center">Our Mission</h2>
          <p className="text-gray-600 text-center">
            At ReactApp, our goal is to empower developers with the best tools and resources
            to build scalable, high-performance web applications.
          </p>
        </section>

        <section className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="text-gray-600">
              We are a passionate team of developers and designers dedicated to creating
              innovative solutions for the modern web.
            </p>
          </div>
          <div className="flex-1 bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600">
              To be the leading platform for developers to learn, create, and collaborate on
              cutting-edge web technologies.
            </p>
          </div>
        </section>

        <section className="mt-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Us</h2>
          <p className="text-gray-600 mb-6">
            Become a part of our growing community and start building your next big project
            with ReactApp.
          </p>
          <a
            href="/contact"
            className="bg-emerald-500 text-white py-2 px-6 rounded-lg hover:bg-emerald-600"
          >
            Contact Us
          </a>
        </section>
      </main>
    </div>
  );
};

export default About;

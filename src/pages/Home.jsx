import React from "react";

const Home = () => {
  return (
    <div className="bg-gray-100 text-gray-800">
      <header className="bg-green-950 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Welcome to ReactApp</h1>
        <p className="mt-4 text-lg">Building awesome projects with React and Tailwind CSS</p>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Features</h2>
          <p className="text-gray-600">
            ReactApp is the perfect place to learn and build modern web applications.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Easy to Use</h3>
            <p className="text-gray-600">
              Our platform provides intuitive tools to kickstart your development process.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Customizable</h3>
            <p className="text-gray-600">
              Tailor your experience with custom features and styling options.
            </p>
          </div>
          <div className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4">Open Source</h3>
            <p className="text-gray-600">
              Built with the open-source community in mind for flexibility and growth.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;

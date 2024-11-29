import React from "react";

const Home: React.FC = () => {
  return (
    <section className="text-center">
      <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
      <p className="text-gray-700">
        Soy amante de la cultura en todos los sentidos: literatura, idiomas, historia, arte, música...
      </p>
      <p className="mt-4">
        Tengo dos años de experiencia como profesora particular y recientemente he trabajado en una academia privada.
      </p>
      {/* Carrusel de opiniones (placeholder) */}
      <div className="mt-8 bg-gray-100 p-4 rounded">
        <h3 className="font-semibold">Opiniones de estudiantes</h3>
        <p className="italic text-gray-600">"Excelente profesora, muy paciente y dedicada."</p>
      </div>
    </section>
  );
};

export default Home;

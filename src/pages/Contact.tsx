import React from "react";

const Contact: React.FC = () => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Contacto</h2>
      <form className="max-w-md mx-auto">
        <label className="block mb-2">
          Nombre:
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Tu nombre"
          />
        </label>
        <label className="block mb-2">
          Email:
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Tu email"
          />
        </label>
        <label className="block mb-2">
          Mensaje:
          <textarea
            className="w-full border border-gray-300 p-2 rounded"
            placeholder="Tu mensaje"
          ></textarea>
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded mt-4"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contact;

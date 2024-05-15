import React from 'react';

export const LoginPetfinder = () => {
  return (
    <div className="flex items-end justify-center bg-gray-100 pt-2">
      <div className="flex items-center justify-center">
        <img src="/bg-login.svg" alt="login" />
      </div>

      <div className="absolute p-8 bg-white bg-opacity-5">
        <form className="flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Correo Electrónico"
            className="w-96 p-3 bg-white bg-opacity-40 placeholder-slate-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="passwrrd"
            placeholder="Contraseña"
            className="w-96 p-3 bg-white bg-opacity-40 placeholder-slate-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-96 px-4 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Ingresar
          </button>
        </form>
      </div>
    </div>
  );
};

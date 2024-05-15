import React from 'react'
import { PlantillaMascota } from '../components/PlantillaMascota'
import { useNavigate } from 'react-router-dom'

export const LoginPage = () => {

    const navigate = useNavigate()

    const handleSubmit = async () => {

        navigate("/dashboard")
    }

  return (
    <>
    <PlantillaMascota imagen='bg-login.svg'>

    <div className="w-96 bottom-20 absolute left-2 px-1">
        <form className="w-full flex flex-col items-center justify-center space-y-5">
          <input
            type="text"
            placeholder="Correo Electrónico"
            className="w-full p-3 bg-white bg-opacity-40 placeholder-slate-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="w-full p-3 bg-white bg-opacity-40 placeholder-slate-500 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <button
            type="submit"
            className="w-full px-4 py-3 bg-blue-900 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            onClick={handleSubmit}
          >
        
            Ingresar
          </button>
        </form>
      </div>

    </PlantillaMascota>
    </>
  )
}

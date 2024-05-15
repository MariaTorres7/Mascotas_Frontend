import React from 'react'
import { PlantillaMascota } from '../components/PlantillaMascota'

export const Dashboard = () => {
  return (
    <PlantillaMascota imagen="bg.svg">
      <div className='p-5 flex flex-col items-center justify-start'>
        <h2  className='text-white text-lg'>Administrar Mascotas</h2>
        <div className='my-3'>
          <img src="btn-add.svg" alt="" /> <span></span>
        </div>
      </div>

    </PlantillaMascota>
  )
}

import React from 'react';

export const PlantillaMascota = ({ children, imagen }) => {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        {/* Utilizamos template literals para interpolar la prop `imagen` en el estilo */}
        <div className='w-[400px] h-[844px] relative' style={{ backgroundImage: `url(${imagen})`, backgroundRepeat: 'no-repeat' }}>
          {children}
        </div>
      </div>
    </>
  );
}

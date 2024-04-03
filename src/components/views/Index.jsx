import React from 'react';
import "../../assets/styles/index.css"
import landing from '../../assets/img/landingImg.jpg';
import landing1 from '../../assets/img/landing1.png';
import logo from '../../assets/img/logo.png';
import neurologia from '../../assets/img/neurología.png';
import medicina from '../../assets/img/medicina.png';
import cardiologia from '../../assets/img/cardiologia.png';
import oftamologia from '../../assets/img/oftalmologia.png';
import ortopedia from '../../assets/img/ortopedia.png';
import psiquiatria from '../../assets/img/psiquiatria.png';
import radiologia from '../../assets/img/radiologia.png';
import dermatologia from '../../assets/img/dermatologia.png';
import correo from '../../assets/img/correo-electronico.png';
import telefono from '../../assets/img/telefono.png';
import ubicacion from '../../assets/img/ubicación.png';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = () => {

  return (
    <>
      <section className="landing" style={{ backgroundImage: `url(${landing})`}}>
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="place-self-center lg:col-span-7">
            <h1 className="title1 max-w-2xl mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-blue">Tu salud es </h1>
            <h1 className="title2 max-w-2xl mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl"> nuestra prioridad</h1>
            <p className="paragraph max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium placeat illum quis nemo, nesciunt possimus sunt aut quam quod, odio praesentium eligendi totam ea voluptates aliquid natus adipisci ullam. Aperiam.</p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <a href="" className="botonCita inline-flex items-center justify-center w-full px-5 py-3 text-center text-white sm:w-auto hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:hover:bg-gray-700  bg-green">
              ¡Haz tu cita ahora!
              </a>
              <a href="" className="inline-flex items-center justify-center w-full px-5 py-3 mb-2 mr-2 text-3xl font-medium text-gray-900 bg-purple sm:w-auto focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:text-white dark:hover:bg-blue-700">
             >
             </a>

            </div>
          </div>
        </div>
      </section>

{/* ¿quiénes somos? */}
      <section id="quienes" className='bg-white'>
        <div className='pt-10 pr-5'>
          <div className='divTitle'>
          <button className='buttonTitle bg-blue text-white text-center rounded-full px-8 py-4 w-96'>¿Quiénes somos?</button>
          </div>
          <div className='flex flex-col items-center md:flex-row md:justify-between md:gap-x-24'>
            <div>
              <div className='bg-purple'>              
                <p className='text-white mt-1 mb-2 mt-2 paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, inventore neque fugit odit tempora, adipisci id unde sint fuga nihil placeat, qui porro minus. Quidem quam suscipit possimus unde itaque.</p>
              </div>
            </div>
            <div className='divImage mr-3 pl-4'>
              <img className='w-85 sm:85 md:w-85 lg:w-85' src={logo}/>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className='bg-blue'>
      <div className='pt-10 pr-5 pb-5'>
          <div className='divTitle'>
          <button className='buttonTitle bg-green text-white text-center rounded-full px-8 py-4 w-96'>Servicios</button>
          </div>
          <p className='text-white mt-5 mb-5 mt-2 paragraph text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci reprehenderit dolores cum maxime quis quas doloremque fugit impedit animi optio esse inventore natus veritatis officiis, nostrum quo eius qui quasi?</p>
          {/* empieza fila de cartas */}
          <div className='grid grid-cols-1 gap-6 md:grid-cols-4 m-4'>
            {/* Empieza card */}
            <div className='overflow-hidden border-4 border-green rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={medicina} alt="" />
              </div>
              <div className='px-3 pt-4 pb-6 text-center'>
                <button className='titleEspecialidades bg-green text-white text-center rounded-full px-8 py-4 w-80'>Medicina general</button>
              </div>
              <div className='mt-2 text-sm pEspecialidades'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sequi quisquam et eveniet tenetur sapiente amet quibusdam obcaecati, quo pariatur provident minus. Quasi, error reprehenderit necessitatibus itaque at illum nemo.
              </div>
            </div>
            {/* finaliza card */}
            {/* Empieza card */}
            <div className='overflow-hidden border-4 border-green rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={cardiologia} alt="" />
              </div>
              <div className='px-3 pt-4 pb-6 text-center'>
                <button className='titleEspecialidades bg-green text-white text-center rounded-full px-8 py-4 w-80'>Cardiología</button>
              </div>
              <div className='mt-2 text-sm pEspecialidades'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sequi quisquam et eveniet tenetur sapiente amet quibusdam obcaecati, quo pariatur provident minus. Quasi, error reprehenderit necessitatibus itaque at illum nemo.
              </div>
            </div>
            {/* finaliza card */}
            {/* Empieza card */}
            <div className='overflow-hidden border-4 border-green rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={neurologia} alt="" />
              </div>
              <div className='px-3 pt-4 pb-6 text-center'>
                <button className='titleEspecialidades bg-green text-white text-center rounded-full px-8 py-4 w-80'>Neurologia</button>
              </div>
              <div className='mt-2 text-sm pEspecialidades'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sequi quisquam et eveniet tenetur sapiente amet quibusdam obcaecati, quo pariatur provident minus. Quasi, error reprehenderit necessitatibus itaque at illum nemo.
              </div>
            </div>
            {/* finaliza card */}
            {/* Empieza card */}
            <div className='overflow-hidden border-4 border-green rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={oftamologia} alt="" />
              </div>
              <div className='px-3 pt-4 pb-6 text-center'>
                <button className='titleEspecialidades bg-green text-white text-center rounded-full px-8 py-4 w-80'>Oftamología</button>
              </div>
              <div className='mt-2 text-sm pEspecialidades'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sequi quisquam et eveniet tenetur sapiente amet quibusdam obcaecati, quo pariatur provident minus. Quasi, error reprehenderit necessitatibus itaque at illum nemo.
              </div>
            </div>
            {/* finaliza card */}
            {/* Empieza card */}
            <div className='overflow-hidden border-4 border-green rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={ortopedia} alt="" />
              </div>
              <div className='px-3 pt-4 pb-6 text-center'>
                <button className='titleEspecialidades bg-green text-white text-center rounded-full px-8 py-4 w-80'>Ortopedía</button>
              </div>
              <div className='mt-2 text-sm pEspecialidades'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sequi quisquam et eveniet tenetur sapiente amet quibusdam obcaecati, quo pariatur provident minus. Quasi, error reprehenderit necessitatibus itaque at illum nemo.
              </div>
            </div>
            {/* finaliza card */}
            {/* Empieza card */}
            <div className='overflow-hidden border-4 border-green rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={radiologia} alt="" />
              </div>
              <div className='px-3 pt-4 pb-6 text-center'>
                <button className='titleEspecialidades bg-green text-white text-center rounded-full px-8 py-4 w-80'>Radiología</button>
              </div>
              <div className='mt-2 text-sm pEspecialidades'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sequi quisquam et eveniet tenetur sapiente amet quibusdam obcaecati, quo pariatur provident minus. Quasi, error reprehenderit necessitatibus itaque at illum nemo.
              </div>
            </div>
            {/* finaliza card */}
            {/* Empieza card */}
            <div className='overflow-hidden border-4 border-green rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={psiquiatria} alt="" />
              </div>
              <div className='px-3 pt-4 pb-6 text-center'>
                <button className='titleEspecialidades bg-green text-white text-center rounded-full px-8 py-4 w-80'>Psiquiatría</button>
              </div>
              <div className='mt-2 text-sm pEspecialidades'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sequi quisquam et eveniet tenetur sapiente amet quibusdam obcaecati, quo pariatur provident minus. Quasi, error reprehenderit necessitatibus itaque at illum nemo.
              </div>
            </div>
            {/* finaliza card */}
            {/* Empieza card */}
            <div className='overflow-hidden border-4 border-green rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={dermatologia} alt="" />
              </div>
              <div className='px-3 pt-4 pb-6 text-center'>
                <button className='titleEspecialidades bg-green text-white text-center rounded-full px-8 py-4 w-80'>Dernatología</button>
              </div>
              <div className='mt-2 text-sm pEspecialidades'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam sequi quisquam et eveniet tenetur sapiente amet quibusdam obcaecati, quo pariatur provident minus. Quasi, error reprehenderit necessitatibus itaque at illum nemo.
              </div>
            </div>
            {/* finaliza card */}
          </div>
          {/* finaliza fila de cartas */}
          </div>
      </section>

{/* Unete */}
<section id="unete" className='bg-white'>
<div className='pt-10 pr-5 pb-5'>
  <div className='divTitle'>
    <button className='buttonTitle bg-blue text-white text-center rounded-full px-8 py-4 w-96'>Únete a nosotros</button>
  </div>
  <div className='m-5'>
    <form className="flex rounded-xl bg-green px-1 py-1 focus-within:ring-1 focus-within:ring-green hover:ring-2 hover:ring-green">
      <input className='w-full appearance-none bg-slate-800 focus:outline-none' />
      <button className='ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50'>
      Suscribirse
      </button>
    </form>
  </div>
</div> 
</section>

{/* Contacto */}
<section id="contacto" className='bg-white'>
<div className='pt-10 pr-5 pb-5'>
  <div className='divTitle'>
    <button className='buttonTitle bg-blue text-white text-center rounded-full px-8 py-4 w-96'>Encuéntranos</button>
  </div>
  <div className='grid grid-cols-1 gap-6 md:grid-cols-3 m-4'>
            {/* Empieza card */}
            <div className='overflow-hidden bg-purple rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={ubicacion} alt="" />
              </div>
              <div className='mt-2 text-lg pEspecialidades'>
              81 y 83 Avenida Sur y Calle Juan José Cañas, Colonia Escalón, San Salvador CP 1101
              </div>
            </div>
            {/* finaliza card */}
            {/* Empieza card */}
            <div className='overflow-hidden bg-green rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={correo} alt="" />
              </div>
              <div className='mt-2 text-lg pEspecialidades'>
              atencionintegral@salud.sv
              </div>
            </div>
            {/* finaliza card */}
            {/* Empieza card */}
            <div className='overflow-hidden bg-blue rounded-3xl flex flex-col items-center p-3'>
              <div className='aspect-w-3 aspect-h-2'>
                <img className="h-44 w-44 object-cover object-center" src={telefono} alt="" />
              </div>
              <div className='mt-2 text-lg pEspecialidades'>
              (503) 7476-9129
              </div>
            </div>
            {/* finaliza card */}
           
          </div>
          {/* finaliza fila de cartas */}
      
</div> 
</section>

    </>
  );
}

export default Index;

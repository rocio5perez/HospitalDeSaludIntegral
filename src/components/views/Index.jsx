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
import loging from './Loging/Loging';


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Index = () => {

  return (
    <>
      <section className="landing" style={{ backgroundImage: `url(${landing})`}}>
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="place-self-center lg:col-span-7">
            <h1 className="title1 max-w-2xl mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-blue">Tu salud es </h1>
            <h1 className="title2 max-w-2xl mb-4 text-4xl leading-none tracking-tight md:text-5xl xl:text-6xl"> nuestra prioridad</h1>
            <p className="paragraph max-w-2xl mb-6 font-light text-white lg:mb-8 md:text-lg lg:text-xl"> En el Hospital de Salud Integral, nos comprometemos a brindarte la mejor atención médica posible para garantizar tu bienestar. ¡Agenda tu cita hoy mismo y déjanos cuidar de ti! Nuestro equipo de profesionales altamente capacitados está listo para atenderte y proporcionarte el cuidado personalizado que mereces.</p>
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
                <p className='text-white mt-1 mb-2 mt-2 paragraph'>En el Hospital de Salud Integral, nos dedicamos a proporcionar una atención médica integral y de calidad a nuestra comunidad. Desde nuestra fundación, hemos sido líderes en la prestación de servicios de salud, comprometidos con el bienestar y la recuperación de nuestros pacientes. Nuestro enfoque se basa en la excelencia clínica, la innovación y el cuidado compasivo.</p>
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
                <button className='titleEspecialidades bg-green text-white text-center rounded-full px-8 py-4 w-80'>Dermatología</button>
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
    <button className='buttonTitle bg-blue text-white text-center rounded-full px-8 py-4 w-96'>Comentarios</button>
  </div>
  <div className='m-5'>
    <form className="flex rounded-xl bg-green px-1 py-1 focus-within:ring-1 focus-within:ring-green hover:ring-2 hover:ring-green">
      <input className='w-full appearance-none bg-slate-800 focus:outline-none' />
      <button className='ml-2 shrink-0 rounded-full bg-gradient-to-br from-sky-500 to-cyan-400 px-3 py-1 text-sm font-medium hover:from-sky-700 hover:to-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600/50'>
      Comentar
      </button>
    </form>
  </div>
</div> 
</section>

{/* Contacto */}
<section id="contacto" className='bg-white'>
<div className='pt-10 pr-5 pb-5'>
  <div className='divTitle'>
    <button className='buttonTitle bg-blue text-white text-center rounded-full px-8 py-4 w-96'>Contáctanos</button>
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
{/*Inicia footer*/}
<footer class="bg-blue-100/80 font-sans dark:bg-gray-900">
    <div class="container px-6 py-12 mx-auto">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
            <div class="sm:col-span-2">
                <h1 class="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-purple">Únete a nosotros</h1>

                <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                    <input id="email" type="text" class="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Correo Electrónico" />
            
                    <button class="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-purple transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-purple-500 rounded-lg hover:bg-gray-700 focus:ring focus:ring-purple-300 focus:ring-opacity-80">
                        Suscríbete
                    </button>
                </div>
            </div>

            <div>
                <p class="font-semibold text-purple-500 dark:text-purple">Hospital de Salud Integral</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Inicio</p>
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Quienes Somos</p>
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Servicios</p>
                </div>
            </div>

            <div>
                <p class="font-semibold text-purple-500 dark:text-purple">Especialidades</p>

                <div class="flex flex-col items-start mt-5 space-y-2">
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Consulta General</p>
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Odontología</p>
                    <p class="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">Dermatología</p>
                </div>
            </div>
        </div>
        
        <hr class="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />
        
        <div class="sm:flex sm:items-center sm:justify-between">
            <div class="flex flex-1 gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg" width="130" height="110" alt="" />
                <img src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg" width="130" height="110" alt="" />
            </div>
            
            <div class="flex gap-4 hover:cursor-pointer">
                <img src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg" width="30" height="30" alt="fb" />
                <img src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg" width="30" height="30" alt="tw" />
                <img src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg" width="30" height="30" alt="inst" />
                <img src="https://www.svgrepo.com/show/28145/linkedin.svg" width="30" height="30" alt="in" />
            </div>
        </div>
        <p class="font-sans p-8 text-start md:text-center md:text-lg md:p-4">© 2024 Hospital de Salud Integral. All rights reserved.</p>
    </div>
</footer>
{/*Termina footer*/}


    </>
  );
}

export default Index;

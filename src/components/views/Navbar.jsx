import React from 'react';
import logo from '../../assets/img/Recurso 1.png';
import '../../assets/styles/navbar.css';
import Loging from './Loging/Loging';

const Navbar = () => {  
  return (
    <nav className="bg-gray-800 shadow-lg">
    <div className=" mx-auto px-2 sm:px-6 lg:px-8">
      <div className="flex items-center h-16">
        <div className="flex-shrink-0">
          <div>
          <span className="text-white text-lg font-bold"><img className="logo" src={logo} /></span>
          </div>  
        </div>
        <div className="block md:hidden">
          <button className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Menú</button>
        </div>
        <div className="hidden md:block">
          <div className="ml-4 flex items-center md:ml-6">
            
            <a href="#" className="bg-purple text-white hover:text-white ml-2 w-42 px-3 py-2 rounded-full text-sm font-medium">Inicio</a>
            <a href="#quienes" className="bg-purple text-white hover:text-white ml-2 w-42 px-3 py-2 rounded-full text-sm font-medium">Sobre Nosotros</a>
            <a href="#servicios" className="bg-purple text-white hover:text-white ml-2 w-42 px-3 py-2 rounded-full text-sm font-medium">Servicios</a>
            <a href="#unete" className="bg-purple text-white hover:text-white ml-2 w-42 px-3 py-2 rounded-full text-sm font-medium">Blog</a>
            <a href="#contacto" className="bg-purple text-white hover:text-white ml-2 w-42 px-3 py-2 rounded-full text-sm font-medium">Contáctanos</a>

            <div className='botonsDiv'>
            <a href="#iniciarSesion" className="bg-purple text-white hover:text-white ml-2 w-42 px-3 py-2 rounded-xs text-sm font-medium">Iniciar Sesión</a>
            <a href="#crearCuenta" className="bg-purple text-white hover:text-white ml-2 w-42 px-3 py-2 rounded-xs text-sm font-medium">Regístrate</a>
            </div>

          </div>
        </div>
      </div>
    </div>
    {/* Responsive menu */}
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Inicio</a>
        <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Servicios</a>
        <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Acerca de</a>
        <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contacto</a>
      </div>
    </div>
  </nav>
  );
}

export default Navbar;

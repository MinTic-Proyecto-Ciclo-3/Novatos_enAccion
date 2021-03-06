import React from 'react';
import ImagenLogo from './ImagenLogo';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";

const Sidebar = () => {
  const {user, logout } = useAuth0();

  const cerrarSesion = () =>{
    logout({returnTo: 'https://pacific-sea-96272.herokuapp.com/'},
    localStorage.setItem('token',null));
  }

  return (
    <nav className='hidden sm:flex sm:w-72 h-full flex-col bg-green-600 --tw-bg-opacity: 1;
    background-color: rgba(16, 185, 129, var(--tw-bg-opacity)) p-4 sidebar'>
      <Link to='/admin'>
        <ImagenLogo />
      </Link>

      <div className='my-4'>
        <Ruta icono='fas fa-user' ruta='/admin/Productos' nombre='Admin Productos' />
        <Ruta icono='fas fa-cash-register' ruta='/admin/Ventas' nombre='Maestro Ventas' />
        <Ruta icono='fas fa-users' ruta='/admin/Usuarios' nombre='Usuarios' />
      </div>
      <Link to='/'>
        <button 
        onClick={() => cerrarSesion()}
        className='bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full'>Cerrar Sesión</button>
      </Link>
    </nav>
  );
};

const Ruta = ({ icono, ruta, nombre }) => {

  const location = useLocation();
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    console.log(location, ruta);
    if(location.pathname.includes(ruta)) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [location, ruta])

  return (
    <Link to={ruta}>
      <button className={`p-1 my-2 bg-${isActive ? "gray" : "green"}-800 hover:bg-green-900 flex w-full items-center text-white rounded-md`}>
        <i className={`${icono} w-10`} />
        {nombre}
      </button>
    </Link>
  );
};
<div class="bg-indigo-600">
  <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
    <div class="flex items-center justify-between flex-wrap">
      <div class="w-0 flex-1 flex items-center">
        <span class="flex p-2 rounded-lg bg-indigo-800">

          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
          </svg>
        </span>
        <p class="ml-3 font-medium text-white truncate">
          <span class="md:hidden">
            We announced a new product!
          </span>
          <span class="hidden md:inline">
            Big news! We're excited to announce a brand new product.
          </span>
        </p>
      </div>
      <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
        <a href="/#" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50">
          Learn more
        </a>
      </div>
      <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
        <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
          <span class="sr-only">Dismiss</span>

          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>

export default Sidebar;

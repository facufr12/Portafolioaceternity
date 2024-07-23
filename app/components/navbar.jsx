"use client";
import React from "react";
const Navbar = () => {
  return (
    <nav className="bg-transparent fixed top-0 left-0 w-3/4">
      <div className="flex justify-between items-center py-4 px-6">
        <div className="text-white text-xl font-bold">Logo</div>
        <div className="flex space-x-6">
          <a href="/proyectos" className="text-white hover:text-gray-300">
            Proyectos
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Contacto
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Quienes somos
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

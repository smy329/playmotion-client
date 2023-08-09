import React from 'react';
import Searchbar from './Searchbar';
import logo from '../../assets/logo.jpeg';
import searchIcon from '../../assets/search.svg';

const Navbar = () => {
  return (
    <nav className="bg-slate-100 shadow-md">
      <div className="max-w-7xl mx-auto px-5 lg:px-0 flex justify-between py-3">
        <a href="/" className="flex items-center">
          <img className="h-10 rounded-full" src={logo} alt="Learn with Sumit" />
          <span className="ml-3 font-bold text-3xl">Playmotion</span>
        </a>
        <div className="border border-slate-200 flex items-center bg-white h-10 px-5 rounded-lg text-sm ring-emerald-200">
          <Searchbar />
          <img className="inline h-4 cursor-pointer" src={searchIcon} alt="Search" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

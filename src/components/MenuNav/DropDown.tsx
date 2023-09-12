import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import IconeMenu from '../../assets/iconemenu.svg'
import './DropDown.style.css'

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-img" onClick={toggleDropdown}>
        <img src={IconeMenu} alt="IconeMenu"/>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>
            <Link to="/">Página Inicial</Link>
          </li>
          <li>
            <Link to="/z">Página 1</Link>
          </li>
          <li>
            <Link to="/pagina2">Página 2</Link>
          </li>
          {/* Adicione mais links conforme necessário */}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
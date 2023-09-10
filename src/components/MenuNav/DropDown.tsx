import React, { useState } from 'react';
import { StyledMenu } from './Header.style'
import IconeMenu from '../../assets/iconemenu.svg'

function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button onClick={toggleDropdown} className="dropdown-button">
        <img src="" alt="" />
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li><a href=''>Opção 1</a></li>
          <li><a href=''>Opção 2</a></li>
          <li><a href=''>Opção 3</a></li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
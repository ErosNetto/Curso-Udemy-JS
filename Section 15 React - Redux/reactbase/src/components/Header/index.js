import React from 'react';
import { FaHome, FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './style';

export default function Header() {
  const botaoClicado = useSelector((state) => state.botaoClicado);

  return (
    <Nav>
      <Link to="/">
        <FaHome size={24} />
      </Link>
      <Link to="/login">
        <FaUser size={24} />
      </Link>
      <Link to="/aa">
        <FaSignInAlt size={24} />
      </Link>
      {botaoClicado ? 'Clicado' : 'Não clicado'}
    </Nav>
  );
}

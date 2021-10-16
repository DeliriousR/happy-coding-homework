import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div className='navbarContainer'>
        <div className='navLinks'>
          <Link to="/">全部</Link>
          <Link to="/incomplete">進行中</Link>
          <Link to="/completed">已完成</Link>
        </div>
      </div>
    </nav>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div className='navbarContainer'>
        <div className='navLinks'>
          <Link to="/" data-qa="allItems">全部</Link>
          <Link to="/incomplete" data-qa="incomplete">進行中</Link>
          <Link to="/completed" data-qa="completed">已完成</Link>
        </div>
      </div>
    </nav>
  );
}

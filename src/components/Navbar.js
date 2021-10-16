import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <div>
        <div>
          <Link to="/">全部</Link>
        </div>
        <div>
          <Link to="/incomplete">進行中</Link>
        </div>
        <div>
          <Link to="/completed">已完成</Link>
        </div>
      </div>
    </nav>
  );
}

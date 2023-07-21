import React from 'react';
import styles from './Header.module.css';
import IgniteSimbol from '../assets/ignite-simbol.svg';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header className={styles.header}>
      <img src={IgniteSimbol} alt="Logotipo do Ignite" /><h1>{title}</h1>
    </header>
  );
};

export default Header;
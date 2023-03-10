import { NavLink } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';

const links = [
  { path: '/', text: 'Home' },
  { path: 'about', text: 'About' },
];

const Navbar = () => (
  <nav className={styles.navbar}>
    <ul className={styles.navItems}>
      {links.map((link) => (
        <li key={link.text} className={styles.navLinks}>
          <NavLink to={link.path}>
            {link.text}
            {' '}
            {({ isActive }) => ({
              color: isActive ? 'red' : undefined,
            })}
          </NavLink>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;

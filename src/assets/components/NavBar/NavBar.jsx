import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export default function NavBar() {

    return (
    <>
        <header className="header">
      {/* logo de la marca */}
      <div className="logo-container">
            JG/GAMES
      </div>

      {/* links de navegación */}
      <nav>
        <ul className="nav-container">
          <li>
            <a href="/">INICIO</a>
          </li>
          <li>
            <a href="/">PRODUCTOS</a>
          </li>
          <li>
            <a href="/">GALERIA</a>
          </li>
          <li>
            <a href="/">CONTACTO</a>
          </li>
        </ul>
      </nav>

      <CartWidget/>

    </header>
    </>
  );
}
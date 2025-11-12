import Styles from "./Navigation.module.scss";

function Navigation() {
  return (
    <nav className={Styles.nav}>
      <ul>
        <li>
          <a className="body-large-regular" href="/about">
            Sobre nós
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

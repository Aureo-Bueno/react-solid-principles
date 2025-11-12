import Styles from "./Header.module.scss";
import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import SearchBar from "./components/SearchBar";
import UserActions from "./components/UserActions";

type HeaderProps = {
  cartCount: number;
  onSearch: (query: string) => void;
};

function Header({ cartCount, onSearch }: HeaderProps) {
  return (
    <header className={Styles.header}>
      <div className={Styles.headerInner}>
        <Logo />
        <div className={Styles.options}>
          <Navigation />
          <SearchBar onSearch={onSearch} />
          <UserActions cartCount={cartCount} />
        </div>
      </div>
    </header>
  );
}

export default Header;

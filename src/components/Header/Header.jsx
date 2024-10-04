import HeaderTop from "./HeaderTop/HeaderTop";
import styles from "./Header.module.scss";
import HeaderBottom from "./HeaderBottom/HeaderBottom";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;

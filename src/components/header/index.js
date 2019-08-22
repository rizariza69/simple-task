import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style";

const Header = () => (
  <header style={{ margin: "1rem 0 0 0" }}>
    <h1 style={{ fontWeight: 700 }}>Todo</h1>
  </header>
);

export default Header;

import Navigation from './Navigation/Navigation';
import css from '../Navbar/navbar.module.css';

const Navbar = () => {
  return (
    <div className={css.navbar}>
      <div className={css.container}>
        <Navigation />
      </div>
    </div>
  );
};
export default Navbar;

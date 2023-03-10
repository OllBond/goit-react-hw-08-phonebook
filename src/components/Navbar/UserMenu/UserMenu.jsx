import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/auth/auth-selectors';
import css from '../../Navbar/UserMenu/userMenu.module.css';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  return (
    <div className={css.wrapperUserMenu}>
      <p className={css.userEmail}>{email}</p>
      <button className={css.btnLogout}>Logout</button>
    </div>
  );
};
export default UserMenu;

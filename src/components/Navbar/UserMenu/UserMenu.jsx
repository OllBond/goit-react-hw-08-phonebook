import { useSelector } from 'react-redux';
import { getUser } from '../../../redux/auth/auth-selectors';
// import css from '../../Navbar/UserMenu/userMenu.module.css';

const UserMenu = () => {
  const { email } = useSelector(getUser);
  return (
    <div>
      <p>{email}</p>
      <button>Logout</button>
    </div>
  );
};
export default UserMenu;

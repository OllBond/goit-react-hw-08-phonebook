import TextField from 'shared/components/TextField/TextField';
import useForm from 'shared/hooks/useForm';
import initialState from './initialState';

// import css from '../RegisterForm/registerForm.module.css';

const RegisterForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });
  const { name, email, password } = state;
  return (
    <form onSubmit={handleSubmit}>
      <TextField value={name} onChange={handleChange} />
      <TextField value={email} onChange={handleChange} />
      <TextField value={password} onChange={handleChange} />
    </form>
  );
};
export default RegisterForm;

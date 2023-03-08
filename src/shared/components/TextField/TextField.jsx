import css from '../TextField/textField.module.css';

const TextField = ({ label, handleChange, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input onChange={handleChange} {...props} />
    </div>
  );
};

export default TextField;

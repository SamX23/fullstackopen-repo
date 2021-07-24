const Buttons = ({ setValue, value, text }) => (
  <button onClick={() => setValue(value + 1)}>{text}</button>
);

export default Buttons;

const Button = ({ text, onClick, customClass }) => {
  return (
    <>
      <button onClick={onClick} className={customClass}>
        {" "}
        {text}{" "}
      </button>
    </>
  );
};
export default Button;

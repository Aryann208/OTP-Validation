const Button = ({ buttonText, buttonColor, textColor }) => {
  return (
    <>
      <button
        className="  px-7  h-[2.5em] text-[opensans] font-bold text-[1.3em] rounded-3xl hover:scale-105  transistion duration-200 ease-out "
        style={{
          backgroundColor: `${buttonColor} `,
          color: `${textColor}`,
        }}
      >
        {buttonText}
      </button>
    </>
  );
};

Button.defaultProps = {
  buttonText: "Sign In",
  buttonColor: "#000000",
  textColor: "#FFFFFF",
};

export default Button;

import "./Button.css";

function Button({ children, type }) {
  return <button className={`${type} btn`}>{children}</button>;
}

export default Button;

import clsx from "clsx";
import Link from "next/link";
interface ButtonPropsType {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  additionalClasses?: string;
  onClick?: () => void;
  className?: string;
}

export function ButtonBack(props: ButtonPropsType) {
  const { children, additionalClasses, type = "button", onClick } = props;
  return (
    <button
      type={type}
      className={clsx("px-3 py-3 bg-white shadow-xl rounded-lg  ", additionalClasses)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

import clsx from "clsx";
interface ButtonPropsType {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  additionalClasses?: string;
  onClick?: () => void;
  className?: string;
}

export function ButtonNav(props: ButtonPropsType) {
  const { children, additionalClasses, type = "button", onClick,  } = props;
  return (
    <button
      type={type}
      className={clsx("px-4 py-2 bg-white rounded-lg border border-gray-400 outline-none  ", additionalClasses)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

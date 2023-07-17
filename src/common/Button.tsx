import clsx from "clsx";

interface ButtonPropsType {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  additionalClasses?: string;
  onClick?: () => void;
  className?: string;
}

export function Button(props: ButtonPropsType) {
  const { children, additionalClasses, type = "button", onClick } = props;
  return (
    <button
      type={type}
      className={clsx("border border-gray-300 px-6 py-3 bg-white rounded-lg w-full sm:w-3/4 md:w-3/4 lg:w-3/4  ", additionalClasses)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

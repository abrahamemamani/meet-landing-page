
interface IButtonProps {
  children?: JSX.Element | Array<JSX.Element>;
  className?: string;
}

export const Button = ({ children, className = '', }: IButtonProps): JSX.Element => {
  return (
    <button className={`flex justify-center rounded-full py-4 cursor-pointer ${className}`}>
      {children}
    </button>
  );
};

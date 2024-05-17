interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="w-48 h-9 bg-blue-400 text-white hover:bg-blue-600 rounded-full transition-all duration-200">
      {children}
    </button>
  );
};

export default Button;

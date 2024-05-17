interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="flex justify-between max-w-6xl mx-auto">{children}</div>;
};

export default Container;

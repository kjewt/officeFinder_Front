type TitleProps = {
  children: React.ReactNode;
};

export default function Title({ children }: TitleProps) {
  return (
    <div className="border-b border-solid border-accent pb-2 text-black font-black">
      <h2 className="ml-2">{children}</h2>
    </div>
  );
}

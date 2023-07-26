interface ContainerPropsType {
  children: React.ReactNode;
}
export function Container(props: ContainerPropsType) {
  const { children } = props;
  return (
    <div className="px-10 mx-auto max-w-screen-2xl sm:max-w-md xs:max-w-[420px] lg:max-w-5xl md:max-w-2xl xl:max-w-6xl 2xl:max-w-[1500px]">
      {children}
    </div>
  );
}

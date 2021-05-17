interface Props {
  style: string;
  children: string;
}

 const Layout: React.FC<Props> = ({
  style = "bg-blue-800 p-40",
  children,
}) => {
  return <div className={style}>{children}</div>;
};

export default Layout;
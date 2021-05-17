import Link from "next/link";

interface Props {
  style: string;
  children: string;
}

const Footer: React.FC<Props> = ({
  style = "text-gray-100 flex flex-row flex-wrap items-center justify-around p-5 bottom-0 left-0 right-0 fixed bg-blue-900",
  children,
}) => {
  return (
    <div className={style}>
      <div className="text-lg lg:mt-0">Copyright 2021 Olaoluwa Salami</div>
    </div>
  );
};

export default Footer;

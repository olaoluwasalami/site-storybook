import { useState } from "react";
// import button from "../assets/close_icon.svg";
import Button from "../Buttons/Button";

interface Props {
  text: string;
}

const Navbar: React.FC<Props> = () => {
  const [isOpen, setisOpen] = useState(false);

  function handleClick() {
    setisOpen(!isOpen);
  }

  return (
    <div className="flex flex-row items-center text-white justify-between h-20 bg-dark lg:py-14 py-4 px-4 lg:px-14">
      <div>
        <a className="text-lg  font-semibold  transition-all text-gray-500">Olaoluwa</a>
      </div>
      {/* <button type="button" className="block lg:hidden" onClick={handleClick}>
        <svg
          className="h-6 w-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          {isOpen && (
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
          )}
          {!isOpen && (
            <path
              fillRule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          )}
        </svg>
      </button> */}

      <div className={`lg:flex ${isOpen ? "block" : "hidden"} `}>
        <div>
          <Button text="About" />
        </div>
        <div>
          <Button text="Contact" />
        </div>
        <div>
          <Button text="Resume" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

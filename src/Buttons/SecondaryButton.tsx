export default function SecondaryButton({ text }) {
  return (
    <button
      type="button"
      className="bg-transparent hover:bg-white 
      text-green-200 font-semibold hover:text-gray-400 lg:py-4  py-2  px-6 lg:px-6 border 
      border-gray-500 hover:border-transparent rounded lg:mt-10 mt-6 text-base lg:text-xl"
    >
      {text}
    </button>
  );
}

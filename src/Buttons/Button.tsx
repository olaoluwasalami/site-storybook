export default function Buttons({ text }) {
  return (
    <button
      type="button"
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-8 rounded hover:border-transparent rounded lg:mt-10 mt-6 text-base lg:text-xl"
    >
      {text}
    </button>
  );
}

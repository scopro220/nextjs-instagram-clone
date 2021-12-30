export default function Educational({ children }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
      <img
        src="https://links.papareact.com/ocw"
        alt="Instagram"
        className="w-80"
      />
      <p className="font-sm italic">
        This is not a REAL app, it is a clone and built for EDUCATION PURPOSES
        ONLY
      </p>

      {children}
    </div>
  );
}

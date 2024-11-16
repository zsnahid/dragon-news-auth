import logo from "../assets/logo.png";

export default function Header() {
  const date = new Date();
  const formattedDate = date.toLocaleDateString("en-US", {
    dateStyle: "full",
  });
  return (
    <div className="flex flex-col items-center gap-3 py-8">
      <img
        src={logo}
        className="w-96"
      />
      <p className="text-gray-600">Journalism Without Fear or Favour</p>
      <p className="text-gray-600">{formattedDate}</p>
    </div>
  );
}

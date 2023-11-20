
const Header = () => {
  const name = "Mamun Mahmood";
  return (
    <header className="w-full h-[80px] flex justify-between items-start ">
      <p className="text-6">
        <span
          style={{
            color: "#000",
            fontFamily: "Pacifico",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          {name.slice(0, 5)}
        </span>
        <span
          style={{
            background: "linear-gradient(91deg, #FF9C1A 7.92%, #E80505 108.2%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontFamily: "Pacifico",
            fontSize: "24px",
            fontStyle: "normal",
            fontWeight: "400",
            lineHeight: "normal",
          }}
        >
          {name.slice(5, 13)}
        </span>
      </p>
      <button>{"</>"}</button>
    </header>
  );
};

export default Header;

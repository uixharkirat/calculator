import "./Screen.css";

const Screen = ({ value }) => {
  return (
    <section className="screen" mode="single" max={70}>
      {value}
    </section>
  );
};

export default Screen;
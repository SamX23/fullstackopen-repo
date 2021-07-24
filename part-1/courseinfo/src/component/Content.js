import Part from "./Part";

const Content = ({ parts }) => (
  <div>
    {parts.map((item, key) => (
      <Part key={key} name={item.name} exercise={item.exercise} />
    ))}
  </div>
);

export default Content;

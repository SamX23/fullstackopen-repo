import Content from "./component/Content";
import Header from "./component/Header";
import Total from "./component/Total";

function App() {
  const course = {
    name: "Almost stack app development",
    parts: [
      {
        name: "Fundamentals of React",
        exercise: 10,
      },
      {
        name: "Using props to pass data",
        exercise: 7,
      },
      {
        name: "State of a component",
        exercise: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
}

export default App;

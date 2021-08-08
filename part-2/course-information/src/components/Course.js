const Course = (course) => {
  const [state, setstate] = useState(0);
  let exercise = 0;
  return (
    <>
      <h1>{course.name}</h1>
      <main>
        {course.map((item) => {
          <p key={item.id} data-set={setstate(state + item.exercises)}>
            {item.name} {item.exercises}
          </p>;
        })}
      </main>
      <p>Total of {state} excercise.</p>
    </>
  );
};

export default Course;

const Course = (course) => {
  return (
    <>
      <nav>{course.name}</nav>
      <main>
        {course.map((item) => {
          <h1>{item.name}</h1>;
          <h2>{item.exercises}</h2>;
          <p>{item.id}</p>;
        })}
      </main>
    </>
  );
};

export default Course;

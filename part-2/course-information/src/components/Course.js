const Course = (course) => {
  return (
    <>
      <h1>{course.name}</h1>
      <main>
        {course.map((item) => {
          <p key={item.id}>
            {item.name} {item.exercises}
          </p>;
        })}
      </main>
    </>
  );
};

export default Course;

import { useEffect, useState } from "react";
import Button from "./components/Button";
import Tables from "./components/Tables";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [stats, setStats] = useState(false);

  const reviews = {
    good: good,
    neutral: neutral,
    bad: bad,
    all: all,
    average: average,
    positive: positive,
  };

  useEffect(() => {
    all === 0 ? setStats(false) : setStats(true);
    setAll(good + neutral + bad);
    setAverage(all / 3);
    setPositive((good / all) * 100);
  }, [all, bad, good, neutral]);

  return (
    <div>
      <h2>Give Feedback</h2>
      <Button setValue={setGood} value={good} text="Good" />
      <Button setValue={setNeutral} value={neutral} text="Neutral" />
      <Button setValue={setBad} value={bad} text="Bad" />
      <h2>Statistics</h2>
      {stats ? <Tables reviews={reviews} /> : <p>No feedback given</p>}
    </div>
  );
};

export default App;

const Anecdote = ({ anecdotes }) => {
  return (
    <>
      <p>{anecdotes.text}</p>
      <p>has {anecdotes.vote} votes</p>
    </>
  );
};

export default Anecdote;

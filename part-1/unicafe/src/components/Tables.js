import TableRows from "./TableRows";

const Tables = ({ reviews }) => (
  <table>
    <tbody>
      <TableRows reviews={reviews.good} text="Good" />
      <TableRows reviews={reviews.neutral} text="Neutral" />
      <TableRows reviews={reviews.bad} text="Bad" />
      <TableRows reviews={reviews.all} text="All" />
      <TableRows reviews={Math.floor(reviews.average)} text="Average" />
      <TableRows
        reviews={Math.floor(reviews.positive) + " %"}
        text="Positive"
      />
    </tbody>
  </table>
);

export default Tables;

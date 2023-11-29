import "./App.css";
import bookData from "./book-data.json";
import { useState } from "react";

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      <div className="book-data">
        {bookData.map((book) => (
          <DataDisplay
            title={book.title}
            author={book.author}
            shortDesc={book.shortDescription}
            url={book.url}
          />
        ))}
      </div>
      {/* Use bookData to show books on the page*/}
    </div>
  );
}

function DataDisplay(props) {
  const [expanded, setExpanded] = useState(false);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>{props.shortDesc}</p>
      <button onClick={handleClick}>
        {expanded ? "show less" : "show more"}
      </button>
      {expanded && <p>{props.url}</p>}
    </div>
  );
}
export default App;

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
            cover={book.coverImageUrl}
            url={book.url}
            publisher={book.publisher}
            date={book.publicationDate}
            detailedDesc={book.detailedDescription}
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
    <div className="book">
      <h3>{props.title}</h3>
      <p>{props.author}</p>
      <p>{props.shortDesc}</p>
      <img className="book-cover" src={props.cover} alt="book cover" />
      <button onClick={handleClick}>
        {expanded ? " ▼ show less" : " ▶ show more"}
      </button>
      {expanded && <p>URL: {props.url}</p>}
      {expanded && <p>Publiser: {props.publisher}</p>}
      {expanded && <p>Publication Date: {props.date}</p>}
      {expanded && <p>Full Description: {props.detailedDesc}</p>}
    </div>
  );
}
export default App;

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
            key={book.url}
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

  const placeHolderImage = "images/istockphoto-1147544807-612x612.jpg";
  const placeHolderText = "Not Available";

  const usePlaceHolder = (e) => {
    e.target.src = placeHolderImage;
  };

  return (
    <div className="book">
      <div>
        <img
          className="book-cover"
          src={props.cover ? props.cover : placeHolderImage}
          alt="book cover"
          onError={usePlaceHolder}
          style={{ alignSelf: "right" }}
        />
      </div>
      <div className="book-details">
        <h3>{props.title}</h3>
        <p>
          <strong>{props.author}</strong>
        </p>
        <p>{props.shortDesc}</p>
        <button onClick={handleClick}>
          {expanded ? " ▼ show less" : " ▶ show more"}
        </button>
        {expanded && (
          <div>
            <p>
              <strong>URL:</strong> {props.url}
            </p>
            <p>
              <strong>Publiser:</strong>{" "}
              {props.publisher ? props.publisher : placeHolderText}{" "}
            </p>
            <p>
              <strong>Publication Date:</strong>{" "}
              {props.date ? props.date : placeHolderText}{" "}
            </p>
            <p>
              <strong>Full Description:</strong>{" "}
              {props.detailedDesc ? props.detailedDesc : placeHolderText}{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
export default App;

import "./App.css";
import bookData from "./book-data.json";

function App() {
  return (
    <div>
      <h1>Freeshelf</h1>
      <div className="book-data">
        {bookData.map((book) => (
          <DataDisplay title={book.title} />
        ))}
      </div>
      {/* Use bookData to show books on the page*/}
    </div>
  );
}

function DataDisplay(props) {
  // const [expanded, setExpanded] = useState(false);
  // const handleClick = () => {
  //   setExpanded(!expanded);
  // };
  return (
    <div>
      <h3>{props.title}</h3>
    </div>
  );
}
export default App;

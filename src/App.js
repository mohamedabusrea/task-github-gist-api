import SearchForm from "./components/SearchForm/SearchForm";

import "./styles.scss";

export default function App() {
  return (
    <div className="App">
      <h1 className="App__title">Github Gist API</h1>
      <SearchForm />
    </div>
  );
}

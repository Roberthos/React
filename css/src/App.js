import "./App.css";
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      {/* CSS GLOBAL */}
      <h1>REACT COM CSS</h1>
      {/* CSS DE COMPONENTE */}
      <MyComponent />
      <p>paragrafo do app.js</p>
      {/* CSS INLINE */}
      <p style={{ color: "red", padding: "25px", borderTop: "2px solid gold" }}>
        Esse elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;

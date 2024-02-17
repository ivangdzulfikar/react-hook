import { UseRef } from "./components/UseRef";
import "./app.css";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "" }}>React Hook</h1>

      <UseRef title="useReff" />
    </div>
  );
}

export default App;

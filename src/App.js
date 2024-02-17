import { UseMemo } from "./components/UseMemo";
import './app.css'

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ fontSize: "4rem", marginBottom: "" }}>React Hook</h1>

      <UseMemo title="useMemo" />
    </div>
  );
}

export default App;

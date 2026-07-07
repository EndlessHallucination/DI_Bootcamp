import "./App.css";
import BuggyCounter from "./BuggyCounter";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  return (
    <div>

      <h2>Simulation 1</h2>

      <ErrorBoundary>
        <BuggyCounter />
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 2</h2>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary>
        <BuggyCounter />
      </ErrorBoundary>

      <hr />

      <h2>Simulation 3</h2>

      <BuggyCounter />

    </div>
  );
}

export default App;
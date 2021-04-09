import ErrorBoundary from "./Helper/errorBoundary";
import "./App.css";
import Index from "./Component/Pages/Index";

const App=()=> {
  return (
    <div>
    <ErrorBoundary>
    <Index/>
  </ErrorBoundary></div>)
}

export default App;

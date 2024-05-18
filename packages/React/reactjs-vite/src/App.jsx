import { HashRouter
} from "react-router-dom";
import Router from "./router/index.jsx";

function App(){
  console.log('App');
  return (
    <HashRouter>
    <Router></Router>
  </HashRouter>
  )
}

export default App
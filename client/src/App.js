import { Provider } from "react-redux";
import "./App.css";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppRouter />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;

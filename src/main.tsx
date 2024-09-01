import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.ts";
import ThemeProvider from "./components/Theme/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ThemeProvider theme={`${localStorage.getItem("theme")}`}>
      <App />
    </ThemeProvider>
  </Provider>
);

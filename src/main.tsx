import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { setUpStore } from "./redux/store.ts";
import App from "./App.tsx";
import Home from "./components/Home.tsx";
import Favorites from "./components/Favorites.tsx";
import "./styles/index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/favorites", element: <Favorites /> },
      ],
    },
  ],
  { basename: "/frontend-challenge" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={setUpStore()}>
    <RouterProvider router={router} />
  </Provider>
);

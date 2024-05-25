import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import FormContent from "./Form/Form.jsx";
import View from "./Form/View.jsx";
import { Provider } from "react-redux";
import store from "./Store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FormContent />,
      },
      { path: "/view", element: <View /> },
    ],
  },
  // { path: "/user/:username", element: <></> },
  // { path: "*", element: <NotFound /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllCountriesView from "./pages/AllCountriesView";
import CountryView from "./pages/CountryView";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        

        children: [
            {
                element: <AllCountriesView />,
                index: true
            },

            {
                path: "country/:name",
                element: <CountryView />
            }
        ]
    }
])
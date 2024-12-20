import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AllCountriesView from "./pages/AllCountriesView";
import CountryDetails from "./pages/CountryDetails";

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
                path: "country/:countryName",
                element: <CountryDetails />
            }
        ]
    }
])
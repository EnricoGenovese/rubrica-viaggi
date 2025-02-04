import { BrowserRouter, Routes, Route } from "react-router-dom";
import Travels from "./pages/Travels";
import Travel from "./pages/Travel";
import DefaultLayout from "./components/DefaultLayout";
import TravelerInfo from "./pages/TravelerInfo";
// import NotFound from "./pages/NotFound";
import { GlobalProvider } from "./context/GlobalContext";
import ErrorPage from "./pages/ErrorPage";
import AllTravelers from "./pages/allTravelers";
import TravelForm from "./pages/TravelForm";
import TravelerForm from "./pages/TravelerForm";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <GlobalProvider> */}
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/">
              <Route index Component={Travels} />
              <Route path=":id" Component={Travel} />
              <Route index Component={Travels} />
              <Route path="/travelerform" Component={TravelerForm} />
              <Route path=":id/:id" Component={TravelerInfo} />
              <Route path="/alltravelers" Component={AllTravelers} />
              <Route path="/travelform" Component={TravelForm} />
            </Route>
          </Route>
          <Route path="*" Component={ErrorPage} />
        </Routes>
        {/* </GlobalProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;

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
import Login from "./pages/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <GlobalProvider> */}
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/">
              <Route index Component={Login} />
              <Route path="travels" Component={Travels}></Route>
              <Route path=":id" Component={Travel} />
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

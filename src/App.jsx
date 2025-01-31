import { BrowserRouter, Routes, Route } from "react-router-dom";
import Travels from "./pages/Travels";
import Travel from "./pages/Travel";
import DefaultLayout from "./components/DefaultLayout";
// import TravellerInfo from "./pages/TravellerInfo";
// import NotFound from "./pages/NotFound";
import { GlobalProvider } from "./context/GlobalContext"

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <GlobalProvider> */}
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" >
              <Route index Component={Travels} />
              <Route path=":id" Component={Travel} >
                {/* <Route path="/travellerInfo" Component={TravellerInfo} /> */}
              </Route>
            </Route>
          </Route>
          {/* <Route path="*" Component={NotFound} /> */}
        </Routes>
        {/* </GlobalProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App;

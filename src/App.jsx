import { BrowserRouter, Routes, Route } from "react-router-dom";
import Travels from "./pages/Travels";
import Travel from "./pages/Travel";
import TravellerInfo from "./pages/TravellerInfo";
import NotFound from "./pages/NotFound";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Travel from "./pages/Travel";

function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalProvider>
          <Routes>
            <Route Component={DefaultLayout} >
              <Route path="/" Component={Travels}>
                <Route path="/travelInfo" Component={Travel}>
                  <Route path="/travellerInfo" Component={TravellerInfo} />
                </Route>
              </Route>
            </Route>
            <Route path="*" Component={NotFound} />
          </Routes>
        </GlobalProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

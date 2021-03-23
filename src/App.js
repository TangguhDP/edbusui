import React from "react";
import Banner from "./layouts/Banner";
import BottomNav from "./layouts/BottomNav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Asi from "./pages/Edukasi/Asi";
import Menyusui from "./pages/Edukasi/Menyusui";
import Partner from "./pages/Edukasi/Partner";
import Oksitosin from "./pages/Edukasi/Oksitosin";
import Videos from "./pages/Hiburan/Videos";
import VRs from "./pages/Hiburan/VRs";

function App() {
  return (
    <Router>
      <div className="relative w-full h-full bg-gray-200 flex flex-col">
        <Banner />
        <div className="container mx-auto mb-16 p-4 h-screen">
          <Switch>
            <Route exact path="/" children={Landing}/>
            <Route exact path="/about-us" children={AboutUs}/>
            <Route exact path="/edukasi/asi" children={Asi}/>
            <Route exact path="/edukasi/oksitosin" children={Oksitosin}/>
            <Route exact path="/edukasi/menyusui" children={Menyusui}/>
            <Route exact path="/edukasi/partner-menyusui" children={Partner}/>
            <Route exact path="/hiburan/videos" children={Videos}/>
            <Route exact path="/hiburan/vr-videos" children={VRs}/>
          </Switch>
        </div>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;

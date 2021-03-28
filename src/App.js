import React from "react";
import Banner from "./layouts/Banner";
import BottomNav from "./layouts/BottomNav";
import { Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import AboutUs from "./pages/AboutUs";
import Edukasi from "./pages/Edukasi";
import Asi from "./pages/Edukasi/Asi";
import Menyusui from "./pages/Edukasi/Menyusui";
import Partner from "./pages/Edukasi/Partner";
import Oksitosin from "./pages/Edukasi/Oksitosin";
import Hiburan from "./pages/Hiburan";
import Videos from "./pages/Hiburan/Videos";
import VRs from "./pages/Hiburan/VRs";
import Content from "./layouts/Content";
import { history } from "./helper/history";
import TopNav from "./layouts/TopNav";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router history={history}>
      <Content>
        <TopNav/>
        <Banner />
        <div className="container mx-auto p-4 mb-16">
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/about-us" component={AboutUs} />
            <Route exact path="/edukasi" component={Edukasi} />
            <Route exact path="/edukasi/asi" component={Asi} />
            <Route exact path="/edukasi/oksitosin" component={Oksitosin} />
            <Route exact path="/edukasi/menyusui" component={Menyusui} />
            <Route exact path="/edukasi/partner-menyusui" component={Partner} />
            <Route exact path="/hiburan" component={Hiburan} />
            <Route exact path="/hiburan/videos" component={Videos} />
            <Route exact path="/hiburan/vr-videos" component={VRs} />
            <Route component={NotFound}/>
          </Switch>
        </div>
        <BottomNav />
      </Content>
    </Router>
  );
}

export default App;

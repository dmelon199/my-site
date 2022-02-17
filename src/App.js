
import './styles.css';
import React, { useState, useEffect } from 'react'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Header from './components/Header';
import Footer from './components/Footer';
import Scroll from './components/Scroll';

//pages
import Atlanta from "./pages/Atlanta";
import Avondale from "./pages/Avondale";
import Carter from "./pages/Carter";
import Fredbeans from "./pages/Fredbeans";
import Genesis from "./pages/Genesis";
import Lamborghini from "./pages/Lamborghini";
import Lithia from "./pages/Lithia";
import Luther from "./pages/Luther";
import SaltLake from "./pages/SaltLake";
import Splash from "./pages/Splash";
import Sunwise from "./pages/Sunwise";
import Ogara from "./pages/Ogara";

import MainPage from "./pages/MainPage";
import Projects from "./pages/Projects";
import LoadingScreen from './components/Loading';

const App = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2200)
  }, [])

  return (  
    <>
    {loading === false ? (
      <Router>
        <Header />
        <Scroll />
          <Switch>
            <Route exact path="/atlanta" component={Atlanta}/>
            <Route exact path="/avondale-select" component={Avondale}/>
            <Route exact path="/carter-meyers" component={Carter}/>
            <Route exact path="/fredbeans" component={Fredbeans}/>
            <Route exact path="/genesis" component={Genesis}/>
            <Route exact path="/lamborghini" component={Lamborghini}/>
            <Route exact path="/lithia" component={Lithia}/>
            <Route exact path="/luther" component={Luther}/>
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/salt-lake-city" component={SaltLake}/>
            <Route exact path="/splash" component={Splash}/>
            <Route exact path="/sunwise" component={Sunwise}/>
            <Route exact path="/ogara-coach" component={Ogara}/>
            <Route exact path="/projects" component={Projects}/>
          </Switch>
        <Footer />
    </Router>
    ) : (
      <LoadingScreen />
      )}
    </>
  )
}

export default App;

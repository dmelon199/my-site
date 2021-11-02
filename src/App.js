
import './styles.css';
import React, { useState, useEffect } from 'react'


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Scroll from './components/Scroll';

//pages
import MainPage from "./pages/MainPage";
import Lithia from "./pages/Lithia";
import Ogara from "./pages/Ogara";
import SaltLake from "./pages/SaltLake";
import Avondale from "./pages/Avondale";
import Fredbeans from "./pages/Fredbeans";
import Luther from "./pages/Luther";
import Carter from "./pages/Carter";
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
            <Route exact path="/" component={MainPage}/>
            <Route exact path="/lithia" component={Lithia}/>
            <Route exact path="/salt-lake-city" component={SaltLake}/>
            <Route exact path="/avondale-select" component={Avondale}/>
            <Route exact path="/ogara-coach" component={Ogara}/>
            <Route exact path="/fredbeans" component={Fredbeans}/>
            <Route exact path="/luther" component={Luther}/>
            <Route exact path="/carter-meyers" component={Carter}/>
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

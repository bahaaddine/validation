import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "./helpers/ScrollToTop";
import HomeOne from "./pages/HomeOne";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogRightSidebar from "./pages/BlogRightSidebar";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Service from "./pages/Service";
import ServiceDetails from "./pages/ServiceDetails";
import Merchants from "./pages/Merchants";
import Team from "./pages/Team";
import Wallet from "./pages/Wallet";
import LoginRegister from "./pages/LoginRegister";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AboutBitcoin from "./pages/AboutBitcoin";
import Article from "./pages/Article";
import Userdash from "./pages/Userdash";
import Admindash from "./pages/Admindash";
import Addmodel from "./components/wallet-contents/Addmodel"
import Update from "./components/wallet-contents/Update"


function App() {
  return (
    <>
    <Router>
      <ScrollToTop>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/home"}`}
            component={HomeOne}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/userdash"}`}
            component={Userdash}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/Addmodel"}`}
            component={Addmodel}
          />
           <Route
            exact
            path={`${process.env.PUBLIC_URL + "/update/:id"}`}
            component={Update}
          />
          
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/admindash"}`}
            component={Admindash}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL + "/article"}`}
            component={Article}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/login"}`}
            component={Login}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/home-one"}`}
            component={HomeOne}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about"}`}
            component={About}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/about-bitcoin"}`}
            component={AboutBitcoin}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog"}`}
            component={Blog}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-right-sidebar"}`}
            component={BlogRightSidebar}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/blog-post"}`}
            component={BlogPost}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/contact"}`}
            component={Contact}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service"}`}
            component={Service}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/service-details"}`}
            component={ServiceDetails}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/merchants"}`}
            component={Merchants}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/team"}`}
            component={Team}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/wallet"}`}
            component={Wallet}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/"}`}
            component={LoginRegister}
          />
          <Route
            path={`${process.env.PUBLIC_URL + "/login"}`}
            component={Login}
          />
          
          
          
        
          <Route
            path={`${process.env.PUBLIC_URL + "/not-found"}`}
            component={NotFound}
          />
          <Route exact component={NotFound} />
        </Switch>
      </ScrollToTop>
    </Router>
    </>
    
  );
}

export default App;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Boards from "./BoardsList/index.js";
import SideNav from "./SideNav/index.js";
import FootNav from "./Footer/index.js";
import "antd/dist/antd.css";
import "./index.css";
import { Layout } from "antd";
import { BrowserRouter as Router, Route } from "react-router-dom";
import aboutPage from "./SideNav/aboutPage.js";

const { Footer, Sider, Content } = Layout;

function App() {
  return (
    <Layout> 
      {/* Router is used to navigate between pages */}
      <Router>
       {/* in here we have two things sider to have side nav and layout for the rest of the screen */}
        <Sider className={"sideNav"}>
          <SideNav />
        </Sider>
        {/* Layout include three things header and content and footer  */}
        <Layout>
          <Content>
            <Route path="/about" component={aboutPage}></Route>
            <Route exact path="/" component={Boards}></Route>
            {/* <Boards /> */}
          </Content>

          <Footer className={"footer"}>
            <FootNav />
          </Footer>
        </Layout>

      </Router>
    </Layout>
  );
}

export default App;

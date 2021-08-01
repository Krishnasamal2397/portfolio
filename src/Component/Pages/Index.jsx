import React from "react";
import { Layout } from "antd";

import HeaderComponent from "../Header/Index";
import FooterComponent from "../Footer/Index";
import Container from "../Container/Index";

function Index() {
  return (
    <Layout>
      <HeaderComponent />
      <Container />
      <FooterComponent />
    </Layout>
  );
}

export default Index;

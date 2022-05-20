import * as React from "react";
import { Helmet } from "react-helmet";
import Button from "../components/Button";
import Container from "../components/Container";
import Subtitle from "../components/Subtitle";
import Title from "../components/Title";

const IndexPage = () => {
  return (
    <React.Fragment>
      {/* REACT HELMET FOR THIS PAGE */}
      <Helmet>
        <title>Fahmidyt: My Personal Portofolio | Homepage</title>
        <meta name="description" content="" />
        <meta
          name="keywords"
          content="Personal Blog, Personal Portofolio, Portofolio, Fahmi, Muhammad Fahmi Hidayat, fahmidyt, fmidyt"
        />
        <meta name="author" content="fahmidyt" />
      </Helmet>

      {/* CONTENT's START HERE */}
      <Container full className="py-8 h-[90vh]">
        <Title className="text-center mb-4">Good Morning!</Title>
        <Subtitle className="text-center">Thank you for sliding here.</Subtitle>
      </Container>

      <Container className="relative flex items-center flex-col">
        <Title className="text-center text-4xl mb-4">My Journey</Title>
        <Button className="items-center">View details</Button>
      </Container>
    </React.Fragment>
  );
};

export default IndexPage;

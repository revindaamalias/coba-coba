import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const Home = (props) => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          height="100%"
          src="/assets/homeDesign.jpg"
          alt="Card image cap"
        />
        {/* <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardText>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardText>
        </CardBody> */}
      </Card>
    </div>
  );
};

export default Home;

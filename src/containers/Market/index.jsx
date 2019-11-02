import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./style.scss";

const itemsDummy = [
  {
    id: 1,
    name: "Spark Plug - Busi Genuine",
    picture_url:
      "https://cache1.pakwheels.com/ad_pictures/3043/toyota-genuine-iridium-spark-plug-sk20bgr11-4-pcs-30435265.jpg"
  },
  {
    id: 2,
    name: "Toyota Tires Winter Season",
    picture_url:
      "http://dealers.gloveboxcms.com/assets/files/uploads/140005/generalinfotires.png"
  },
  {
    id: 3,
    name:
      "Genuine Toyota Parts 81521-AA010 Driver Side Front Signal Light Lens/Housing",
    picture_url:
      "https://images-na.ssl-images-amazon.com/images/I/91ZwcGFFwuL._SL1500_.jpg"
  }
];

const Market = props => {
  const [items, setItems] = useState(itemsDummy);

  var itemsGrid = [];
  for (let i = 0; i < items.length; i += 2) {
    itemsGrid.push(
      <Row>
        <Col className="market-items">
          <img src={items[i].picture_url} alt={items[i].name} />
          <div className="item-name">{items[i].name}</div>
        </Col>
        {i + 1 in items ? (
          <Col className="market-items">
            <img src={items[i + 1].picture_url} alt={items[i + 1].name} />
            <div className="item-name">{items[i + 1].name}</div>
          </Col>
        ) : (
          <Col />
        )}
      </Row>
    );
  }

  return (
    <>
      <input type="text" />
      <Container fluid className="market">
        {itemsGrid}
      </Container>
    </>
  );
};

export default Market;

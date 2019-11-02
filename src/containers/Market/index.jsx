import React, { useState } from "react";
import { 
    Container, 
    Row, 
    Col,
    Image,
    Button,
    Toast,
    Badge 
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.scss";
import Logo from '../../assets/img/toyota.png'
import {
    faBell,
} from '@fortawesome/free-solid-svg-icons';

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
    <div id="Market">
      {/* HEADER STARTS HERE */}
      <Row className="topbar">
        <Col xs={3}>
          <Image src={Logo} fluid />
        </Col>
        <Col xs={6} style={{ alignSelf: "center" }}>
          <Button size="sm" variant="dark">
            <Badge variant="info" style={{ verticalAlign: "sub" }}>
              9,999
            </Badge>
            <span className="sr-only">unread messages</span>
          </Button>
        </Col>
        <Col xs={3} className="has-button">
          <Button variant="link">
            <FontAwesomeIcon
              size="2x"
              icon={faBell}
              style={{ color: "white" }}
            />
          </Button>
        </Col>
      </Row>
      {/* HEADER ENDS HERE */}
      <input type="text" />
      <Container fluid className="market">
        {itemsGrid}
      </Container>
    </div>
  );
};

export default Market;

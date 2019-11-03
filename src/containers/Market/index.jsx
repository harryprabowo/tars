import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  Badge
} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./style.scss";
import Logo from '../../assets/img/toyota.png'
import {
  faBell,
  faChevronCircleDown
} from '@fortawesome/free-solid-svg-icons';

const itemsDummy = [
  {
    id: 1,
    name: "Spark Plug - Busi Genuine",
    picture_url:
      "https://cache1.pakwheels.com/ad_pictures/3043/toyota-genuine-iridium-spark-plug-sk20bgr11-4-pcs-30435265.jpg",
    price: 'IDR 400,000'
  },
  {
    id: 2,
    name: "Toyota Tires Winter Season",
    picture_url:
      "http://dealers.gloveboxcms.com/assets/files/uploads/140005/generalinfotires.png",
    price: 'IDR 750,000'
  },
  {
    id: 3,
    name:
      "Genuine Toyota Parts 81521-AA010 Driver Side Front Signal Light Lens/Housing",
    picture_url:
      "https://images-na.ssl-images-amazon.com/images/I/91ZwcGFFwuL._SL1500_.jpg",
    price: 'IDR 1,200,000'
  },
  {
    id: 4,
    name:
      "Used Toyota Parts 81521-AA010 Driver Side Front Signal Light Lens/Housing",
    picture_url:
      "https://images-na.ssl-images-amazon.com/images/I/91ZwcGFFwuL._SL1500_.jpg",
    price: 'IDR 1,000,000'
  },
  {
    id: 5,
    name: "Toyota Tires Summer Season",
    picture_url:
      "http://dealers.gloveboxcms.com/assets/files/uploads/140005/generalinfotires.png",
    price: 'IDR 700,000'
  },
  {
    id: 6,
    name: "Toyota Tires Autumn Season",
    picture_url:
      "http://dealers.gloveboxcms.com/assets/files/uploads/140005/generalinfotires.png",
    price: 'IDR 800,000'
  },
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
          <label>{items[i].price}</label>
        </Col>
        {i + 1 in items ? (
          <Col className="market-items">
            <img src={items[i + 1].picture_url} alt={items[i + 1].name} />
            <div className="item-name">{items[i + 1].name}</div>
            <label>{items[i + 1].price}</label>
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
        <Col xs={7} style={{ alignSelf: 'center' }}>
          {/* <Button size="sm" variant="dark">
                        <Badge variant="info" style={{ verticalAlign: "sub"}}>9,999</Badge>
                        <span className="sr-only">unread messages</span>
                    </Button> */}
          <label style={{ marginRight: 0 }}>
            <Badge variant="dark" style={{ fontSize: '12pt', marginRight: '1em' }}>B 1 RI</Badge>
            <br />
            <span style={{ marginRight: '1em', fontWeight: 100, color: 'rgba(255,255,255,0.8)' }}>TOYOTA SUPRA</span>
          </label>
          <FontAwesomeIcon icon={faChevronCircleDown} style={{ opacity: '0.3', verticalAlign: 'super' }} />
        </Col>
        <Col xs={2} className="has-button">
          <Button variant="link">
            <FontAwesomeIcon size="2x" icon={faBell} style={{ color: 'white' }} />
          </Button>
        </Col>
      </Row>
      {/* HEADER ENDS HERE */}

      <input onChange={e => {
        setItems(itemsDummy.filter(item => item.name.toLowerCase().includes(e.target.value)))
      }} type="text" style={{ margin: 0, width: '90%', backgroundColor: 'white' }} placeholder="Search marketplace" />
      <Container fluid className="market" >
        <br />
        <label style={{ fontSize: '12pt' }}>RECOMMENDED FOR YOU</label>
        {itemsGrid}
      </Container>
    </div>
  );
};

export default Market;

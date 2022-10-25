import React, { useState, useRef, useEffect } from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import FollowUs from "./FollowUs";
import "./Header.css";
import $ from 'jquery';
import FontSizeChanger from 'react-font-size-changer';
import { useHistory } from "react-router-dom";

const Header = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [isSticky, setSticky] = useState(false);
  const [count, setCount] = useState(0);
  const [countMultiply, setCountMultiply] = useState(4);
  const [resetVisible, setresetVisible] = useState(false)
  const [buttonStyle, setButtonStyles] = useState({ backgroundColor: '', color: '', display: 'none' })
  const history = useHistory();
  const ref = useRef(null);
  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top < 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', () => handleScroll);
    };
  }, []);

  if (!props.data) {
    return null;
  }
  const handleSearchEvent = () => {
    history.push("/globalSearch");
  }
  return (
    <header className="header" ref={ref} >
      {/* <FontSizeChanger
        targets={['#root .content']}
        options={{
          stepSize: 2,
          range: 3
        }}
      /> */}
      {/* <div className="container">
        <div class="row">
          <div class="col-sm-1">
            <FontSizeChanger
              targets={['#root .content']}
              onChange={(element, newValue, oldValue) => {
                console.log(element, newValue, oldValue);
              }}
              options={{
                stepSize: 2,
                range: 3
              }}
              customButtons={{
                up: <span style={{ 'fontSize': '36px' }}>+A</span>, 
                down: <span style={{ 'fontSize': '20px' }}>-A</span>,
                 
              }}
            />
          </div> 
        </div>
      </div> */}

      <div className={`${isSticky ? ' sticky' : ''}`}>
        <div className="green-bg " >
          <Container>
            <Row className="justify-content-between align-items-center">
              {/* <Col md={7} lg={7} className="d-md-block d-lg-block"> */}

              <Col md={12} lg={12}>

                <div className="topbar-text text-white">

                  <FollowUs
                    text={props.data.topHeader.text}
                    links={props.data.topHeader.links}
                  ></FollowUs>
                </div>

              </Col>
              {/* <Col md={2} lg={2}>
                <div className="topbar-text text-white">
                  <i class="fa fa-search" aria-hidden="true" onClick={handleSearchEvent}></i>
                </div>
              </Col> */}
              <Col md={4} lg={4}>
                
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className={`${isSticky ? ' _menuPostion' : ''}`} >
        <Navbar expanded={expanded} expand="lg" className="white-bg" >
          <Container>
            <Navbar.Brand as={Link} to={props.data.logo.link}>
              <img
                src={"/images/" + props.data.logo.imgsrc}
                className="img-fluid"
                alt={props.data.logo.title}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-hidden="true" role="presentation" onClick={() => setExpanded(expanded ? false : "expanded")} />
            <Navbar.Collapse className="h-auto">
              <Menu setExpanded={setExpanded} items={props.data.menu} />
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { useAccordionButton } from "react-bootstrap/esm/AccordionButton";
import Card from "react-bootstrap/Card";
import plus from "../../../assets/images/icons/plus.png";
import minus from "../../../assets/images/icons/minus.png";

let iventKey = null;

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, (children) => {
    console.log(children);
    iventKey = eventKey; 
    console.log("eventKey : ",eventKey);
    console.log("iventKey : ",iventKey);
  });
  return (
    <button
      type="button"
      style={{
        backgroundColor: "transparent",
        border: "none",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

const info = [
  {
    id: 0,
    number: "01",
    thema: "Venenatis feugiat viverra et",
    main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nisl eget ultrices praesent sed nunc libero, egestas nunc.
    Venenatis placerat nisl aliquet tempor justo risus rhoncus vel
    egestas. Et ut egestas nam sapien consequat, at pellentesque
    amet. Gravida tincidunt vestibulum vulputate convallis vel
    sollicitudin in suspendis.`,
    btn: "learn more",
  },
  {
    id: 1,
    number: "02",
    thema: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
    main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nisl eget ultrices praesent sed nunc libero, egestas nunc.
    Venenatis placerat nisl aliquet tempor justo risus rhoncus vel
    egestas. Et ut egestas nam sapien consequat, at pellentesque
    amet. Gravida tincidunt vestibulum vulputate convallis vel
    sollicitudin in suspendis.`,
    btn: "learn more",
  },
  {
    id: 2,
    number: "03",
    thema: "Vestibulum id ut egestas imperdiet sit.",
    main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nisl eget ultrices praesent sed nunc libero, egestas nunc.
    Venenatis placerat nisl aliquet tempor justo risus rhoncus vel
    egestas. Et ut egestas nam sapien consequat, at pellentesque
    amet. Gravida tincidunt vestibulum vulputate convallis vel
    sollicitudin in suspendis.`,
    btn: "learn more",
  },
  {
    id: 3,
    number: "04",
    thema: "Turpis adipiscing nunc nisl.",
    main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nisl eget ultrices praesent sed nunc libero, egestas nunc.
    Venenatis placerat nisl aliquet tempor justo risus rhoncus vel
    egestas. Et ut egestas nam sapien consequat, at pellentesque
    amet. Gravida tincidunt vestibulum vulputate convallis vel
    sollicitudin in suspendis.`,
    btn: "learn more",
  },
  {
    id: 4,
    number: "05",
    thema: "Vitae at risus ornare ac.",
    main: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Nisl eget ultrices praesent sed nunc libero, egestas nunc.
    Venenatis placerat nisl aliquet tempor justo risus rhoncus vel
    egestas. Et ut egestas nam sapien consequat, at pellentesque
    amet. Gravida tincidunt vestibulum vulputate convallis vel
    sollicitudin in suspendis.`,
    btn: "learn more",
  },
];

function Elementum() {
  const [toggle, setToggle] = useState(false);
  const changeHandler = (e) => {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  };
  return (
    <div className="maecanes elementum">
      <h3 className="elementum-title">Elementum</h3>
      <Accordion>
        {info.map((el, index) => {
          return (
            <Card className="maecanes__card" key={index}>
              <div onClick={changeHandler}>
                <CustomToggle eventKey={el.id}>
                  <div className="number">
                    <span>{el.number}</span>
                    <p>{el.thema}</p>
                  </div>
                  <div className={toggle && (iventKey == el.id) ? "minus--img" : "plus--img"}>
                    <img src={(toggle === true && iventKey == el.id ) ? minus : plus} alt="plus" />
                  </div>
                </CustomToggle>
              </div>
              <Accordion.Collapse eventKey={el.id}>
                <Card.Body className="body__card">
                  <div className="body__card__1">
                    <p>
                      {el.main}
                    </p>
                    <a href="#">{el.btn}</a>
                  </div>
                  <div className="body__card__2">
                    <img src="" alt="" />
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          );
        })}
      </Accordion>
    </div>
  );
}

export default Elementum;

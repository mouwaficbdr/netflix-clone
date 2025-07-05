/* eslint-disable react/prop-types */
import { useState, useContext, createContext } from "react";
import {
  Body,
  Title,
  Header,
  Container,
  Inner,
  Item,
  Frame,
} from "./styles/accordion";

const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
  return <Frame {...restProps}>{children}</Frame>;
};
Accordion.Item = function AccordionItem({ children, ...restProps }) {
  const [toggleShow, setToggleShow] = useState(false);

  return (
    <ToggleContext.Provider value={{ toggleShow, setToggleShow }}>
      <Item {...restProps}>{children}</Item>
    </ToggleContext.Provider>
  );
};
Accordion.Title = function AccordionTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};
Accordion.Header = function AccordionHeader({ children, ...restProps }) {
  const { toggleShow, setToggleShow } = useContext(ToggleContext);

  return (
    <Header onClick={() => setToggleShow(!toggleShow)} {...restProps}>
      {children}
      <img
        src={
          toggleShow ? "/images/icons/close-slim.png" : "/images/icons/add.png"
        }
        alt={toggleShow ? "Close" : "Open"}
        style={{
          transform: toggleShow ? "rotate(180deg)" : "rotate(0deg)",
          transition: "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
    </Header>
  );
};
Accordion.Body = function AccordionBody({ children, ...restProps }) {
  const { toggleShow } = useContext(ToggleContext);
  return (
    <Body className={toggleShow ? "open" : ""} {...restProps}>
      {children}
    </Body>
  );
};

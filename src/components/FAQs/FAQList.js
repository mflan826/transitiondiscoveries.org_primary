import React from "react";
import ReactHtmlParser from "react-html-parser";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import "./FAQList.css";

const FAQList = (props) => {
  return (
    <>
      <Accordion>
        {props.faqs.map((faq) => {
          return (
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>{faq.title}</AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>{ReactHtmlParser(faq.description)}</p>
              </AccordionItemPanel>
            </AccordionItem>
          );
        })}
      </Accordion>
    </>
  );
};
export default FAQList;

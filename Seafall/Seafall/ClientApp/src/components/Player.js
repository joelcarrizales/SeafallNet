import { useEffect, useState } from 'react';
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from 'reactstrap';
import Card from './Card';
import './Player.css'

export default function Player(props) {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
        if (open === id) {
            setOpen();
        } else {
            setOpen(id);
        }
    };

    let accordionItems = props.advisors.map((adv, index) => (
        <AccordionItem key={index}>
            <AccordionHeader targetId={index.toString()}>{adv.name !== "" ? adv.name : ("The " + adv.epithet)}</AccordionHeader>
            <AccordionBody accordionId={index.toString()}>
                <Card advisor={adv} />
            </AccordionBody>
        </AccordionItem>
    ))

    return (
        <div className="row">
            <div className="col">
                {props.player.name}
            </div>
            <div className="col">
                <Accordion open={open} toggle={toggle}>
                    {accordionItems}
                </Accordion>
            </div>
        </div>
    )
}
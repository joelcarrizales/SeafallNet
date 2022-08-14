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

    const handleChange = (event) => {
        props.action(props.player.id, event.target.value);
    }

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
            <div className="col-sm-4 offset-sm-2">
                <h1>
                    {props.player.name}
                </h1>
                <div className="row">
                    <label className="col-sm-4">Gold count: {props.player.gold}</label>
                    <input type="text" className="col-sm-3" onChange={handleChange} />
                </div>
                
            </div>
            <div className="col-sm-5">
                <Accordion open={open} toggle={toggle}>
                    {accordionItems}
                </Accordion>
            </div>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import './Milestones.css'

const Milestones = props => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [miles1, setMiles1] = useState([]);
    const [miles2, setMiles2] = useState([]);
    const [miles3, setMiles3] = useState([]);

    useEffect(() => {
        if (!isLoaded) {
            const asyncFetch = async () => {
                const response = await fetch('game/Milestones');
                const data = await response.json();
                await setIsLoaded(true);
                let tmp = [];
                for (let i = 0; i < data.length; i++) {
                    tmp.push(data[i]);
                    if (i === 3) {
                        setMiles1(tmp);
                        tmp = [];
                    }
                    if (i === 7) {
                        setMiles2(tmp);
                        tmp = [];
                    }
                    if (i === 8) {
                        setMiles3(tmp);
                    }
                }
            }
            asyncFetch();
        }
    });

    return (
        <>
        <div className="row">
                {miles1.map(ms => (
                    <div key={ms.name} className="card col">
                    <div className="card-body">
                        <h4>
                            {ms.name}
                        </h4>
                        <h5>
                            {ms.requirement}
                            <div className="glory">
                                {ms.glory}
                            </div>
                        </h5>
                    </div>
                </div>
            ))}
        </div>
        <div className="row">
            {miles2.map(ms => (
                <div key={ms.name} className="card col">
                    <div className="card-body">
                        <h4>
                            {ms.name}
                        </h4>
                        <h5>
                            {ms.requirement}
                            <div className="glory">
                                {ms.glory}
                            </div>
                        </h5>
                    </div>
                </div>
            ))}
        </div>
        <div className="row">
            {miles3.map(ms => (
                <div key={ms.name} className="card col">
                    <div className="card-body">
                        <h4>
                            {ms.name}
                        </h4>
                        <h5>
                            {ms.requirement}
                            <div className="glory">
                                {ms.glory}
                            </div>
                        </h5>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export {Milestones}
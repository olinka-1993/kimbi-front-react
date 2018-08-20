import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import ReactBootstrapSlider from 'react-bootstrap-slider';


const money = 95000;

class Calculator extends Component {
    render() {
        return (<div className="calculator">
            <div className="money-month">
                <Col sm={12} className="item">
                    <div className="text-section">
                        <h2>Գումար </h2>
                        <div>
                            <h2>
                                {money}
                                <span>֏</span>
                            </h2>

                            <div>
                                <p>{"+"}</p>
                                <p>{"-"}</p>
                            </div>
                        </div>
                    </div>
                    <ReactBootstrapSlider
                        value={95000}
                        change={this.handleValueChange}
                        step={10000}
                        max={95000}
                        min={10000}
                    />
                </Col>
                <Col sm={12} className="item">
                    <div className="text-section">
                        <h2>Ամիս </h2>
                        <div>
                            <h2>
                                {money}
                                <span>֏</span>
                            </h2>

                            <div>
                                <p>{"+"}</p>
                                <p>{"-"}</p>
                            </div>
                        </div>
                    </div>
                    <ReactBootstrapSlider
                        value={95000}
                        change={this.handleValueChange}
                        step={10000}
                        max={95000}
                        min={10000}
                    />
                    <div className="slider"></div>
                </Col>            </div>
            <div className="loan-details">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>

        </div>)
    }
}

export default Calculator
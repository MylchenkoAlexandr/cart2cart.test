import React from "react";
import Section from "../section";
import {Row, Col, Select, Input, Checkbox} from "antd";
import Button from "../button";
import { CaretRightOutlined } from "@ant-design/icons"

export default function Wizard() {
    return (
        <Section className="Wizard">
            <div className="steps">
                <div className="wrapper">
                    <span className="line"/>
                    <a data-active="true" href="/">1</a>
                    <a data-active="false" href="/">2</a>
                    <a data-active="false" href="/">3</a>
                    <a data-active="false" href="/">
                        <span className="icon-wizard"/>
                    </a>
                </div>
            </div>
            <h1>SOURCE AND TARGET CART SETUP</h1>
            <div className="content">
                <Row >
                    <Col span={18} className="wizard-data">
                        <div className="source-cart-setup">
                            <div className="centered-header">
                                <h1>SOURCE CART SETUP <span className="icon-wizard"/></h1>
                            </div>
                            <Row>
                                <Col offset="2" span="20">
                                    <Row className="source-cart-selector">
                                        <Col span={8}>
                                            <p className="selector-label">Source Cart</p>
                                        </Col>
                                        <Col span={13}>
                                            <Select size="large"/>
                                            <p className="notification-description">Select your current shopping cart to migrate data from</p>
                                        </Col>
                                    </Row>
                                    <Row className="source-cart-selector">
                                        <Col span={8}>
                                            <p className="selector-label">Source Store URL</p>
                                        </Col>
                                        <Col span={13}>
                                            <Input size="large" placeholder="http://yourdomain.com/store/" />
                                        </Col>
                                    </Row>
                                    <Row className="source-cart-steps" gutter={[24, 8]}>
                                        <Col span={8}>
                                            <div className="step-info fixed">
                                                <p className="selector-label">
                                                    1. Download<br/>
                                                    the <b>Connection Bridge</b>
                                                </p>
                                                <Button title="Download Bridge"/>
                                                <CaretRightOutlined />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="step-info fixed">
                                                <p className="selector-label">
                                                    2. Unpack '<b>connection_bridge.zip</b>' file
                                                    <br/>
                                                    <br/>
                                                    3. Upload '<b>bridge2cart</b>' folder to your store's root
                                                    (catalog) <a href="https://www.shopping-cart-migration.com/faq/10-general-questions/47-what-are-the-connection-bridge-files-and-how-to-download-them"
                                                    target="_blank">Read instructions</a>
                                                </p>
                                                <CaretRightOutlined />
                                            </div>
                                        </Col>
                                        <Col span={8}>
                                            <div className="step-info fixed">
                                                <p className="selector-label">
                                                    4. Check the connection to the <b>Source Store</b>
                                                </p>
                                                <Button title="Check Connection"/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <div className="centered-text">
                                <a className="upload-it-automatically" href="/">I want Cart2Cart to upload it automatically</a>
                            </div>
                        </div>
                        <div className="target-card-setup">
                            <div className="centered-header">
                                <h1>TARGET SETUP <span className="icon-wizard"/></h1>
                            </div>
                            <Row>
                                <Col offset="2" span="20">
                                    <Row className="source-cart-selector">
                                        <Col offset={8} span={13}>
                                            <Checkbox className="migration-using">Try migration using Cart2Cart test store</Checkbox>
                                            <p className="notification-description">Even if you don't have your Target Store installed and live, you can still try how easy it is to migrate your data with Cart2Cart</p>
                                        </Col>
                                    </Row>
                                    <Row className="source-cart-selector">
                                        <Col span={8}>
                                            <p className="selector-label">Target Cart</p>
                                        </Col>
                                        <Col span={13}>
                                            <Select size="large"/>
                                            <p className="notification-description">Select new shopping cart to migrate data to</p>
                                        </Col>
                                    </Row>
                                    <Row className="source-cart-selector">
                                        <Col offset={8} span={13}>
                                            <div className="step-info">
                                                <p className="notification-description dark centered">Click the button to install "Migration for Shopify" app needed to enable connection with your Shopify store.</p>
                                                <Button title="Install Plugin"/>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <div className="centered-header footer">
                                <div className="next-step">
                                    <p>Next Step</p>
                                    <Button title="Choose Entities"/>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col span={6} className="chat">
                        <div className="cover">
                            <div className="live-chat">
                                <div className="photo-wizard"/>
                                <div className="live-chat-context">
                                    <div className="live-chat-title">Live Chat</div>
                                    <div className="need-help">Need help?</div>
                                    <Button title="Chat Now"/>
                                </div>
                            </div>
                        </div>
                        <div className="notice">
                            <b>Source Store Url</b>
                            <br/>
                            <br/>
                            Please provide your Source Cart URL
                            e.g http://yourdomain.com/store/
                            <br/>
                            <br/>
                            Simply copy the URL of your store from a browser's address bar
                        </div>
                        <div className="arrows">
                            <div className="arrow" data-type="left"/>
                            <div className="arrow" data-type="right"/>
                        </div>
                    </Col>
                </Row>
            </div>
        </Section>
    )
}

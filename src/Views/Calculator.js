import React from "react";
import { Card, Col, Row, Button } from "antd";

export default function Calculator() {
return (
    <Card style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", margin: "auto" }}>
        <Row>
            <Col>
                    <Button>
                            <h1>7</h1>
                    </Button>
            </Col>
            <Col>
                    <Button>
                            <h1>8</h1>
                    </Button>
            </Col>
            <Col>
                    <Button>
                            <h1>9</h1>
                    </Button>
            </Col>
            <Col>
                    <Button>
                            <h1>x</h1>
                    </Button>
            </Col>
        </Row>
    {/* --------------- */}
        <Row>
            <Col>
                    <Button>
                            <h1>4</h1>
                    </Button>
            </Col>
            <Col>
                    <Button>
                            <h1>5</h1>
                    </Button>
            </Col>
            <Col>
                    <Button>
                            <h1>6</h1>
                    </Button>
            </Col>
            <Col>
                    <Button>
                            <h1>-</h1>
                    </Button>
            </Col>
        </Row>
        {/* -------------- */}
        <Row>
            <Col>
                    <Button>
                            <h1>1</h1>
                    </Button>
            </Col>
            <Col>
                    <Button>
                            <h1>2</h1>
                    </Button>
            </Col>
            <Col>
                    <Button>
                            <h1>3</h1>
                    </Button>
            </Col>
            <Col>
                    <Button>
                            <h1>+</h1>
                    </Button>
            </Col>
        </Row>
    </Card>
);
}
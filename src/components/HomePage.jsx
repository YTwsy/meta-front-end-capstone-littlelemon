import {Link} from "react-router-dom";
import { Image, Button, Carousel, Row, Col, Card} from "antd";
import React from "react";

const contentStyle = {
    height: '60vh',
    width:'50vw',
    color: '#fff',
    background: '#edbe57',
    objectFit: 'cover',
};

const HomePage=()=>{
    return(
        <div>
            <Row align="middle" style={{ height: 'auto', backgroundColor: '#333' }}>
                <Col span={12} style={{ padding: '20px' }}>
                    <h1 style={{ color: '#edbe57', fontSize: '48px' }}>Little Lemon</h1>
                    <p style={{ color: 'white', fontSize: '24px' }}>
                        Chicago<br/>
                        We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.
                    </p>
                    <Button type="primary" size="large" style={{ backgroundColor: '#edbe57', borderColor: '#edbe57' }}>
                        <Link to={'/reserve'}>
                        <h3>
                            Reserve Table
                        </h3>
                    </Link>
                    </Button>
                </Col>
                <Col span={12}>
                    <Card
                        hoverable
                        style={{ margin:'60px', width: '90%', height: '90%', background: 'none' }}
                        cover={            <Carousel arrows infinite={false} >
                            <div>
                                <Image style={contentStyle} preview={false} src={'assets/icons_assets/restauranfood.jpg'} alt={'restaurant food'}/>
                            </div>
                            <div>
                                <Image style={contentStyle} preview={false} src={'assets/icons_assets/lemon dessert.jpg'} alt={'restaurant food'}/>
                            </div>
                            <div>
                                <Image style={contentStyle} preview={false} src={'assets/icons_assets/greek salad.jpg'} alt={'restaurant food'}/>
                            </div>
                            <div>
                                <Image style={contentStyle} preview={false} src={'assets/icons_assets/restaurant.jpg'} alt={'restaurant food'}/>
                            </div>
                        </Carousel>} alt="restaurant food" src="assets/icons_assets/greek salad.jpg"/>
                </Col>
            </Row>
        </div>
    )
}

export default HomePage
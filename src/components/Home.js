import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom'


const data = [
    {
        image: '/images/nw0.png',
        topic: 'noWaiter App',
        link: '/nowaiter'
    },
    {
        image: '/images/wawawiwa.png',
        topic: 'Tischtennis',
        link: '/tischtennis'
    },
    {
        image: '/images/fm1.png',
        topic: 'restoGuide',
        link: '/restoGuide'
    },
    {
        image: '/images/tomjerry_1.jpeg',
        topic: 'DCI Developer Community',
        link: '/ddc'
    },
    {
        image: '/images/c2c_1.jpeg',
        topic: 'LapStore',
        link: '/LapStore'
        
    }
]

function Home() {
    return (
        <div  className="container-fluid pt-5 m-0 w-100" style={{background:'#16B8F3'}}>
            <div className="my-5">
                <div>
                    <h3>FBW-9-Abschlussprojekte</h3>
                </div>
              
                <CardGroup>
                    { data.map( (item, index) => 
                            <div className= "col-12 col-md-6 mb-3" key={index}>
                                <div className="text-dark m-2 mb-3">{item.topic}</div>
                                <div className="m-2 shadow">
                                    <Link to={item.link}>
                                        <Card>
                                            <Card.Img src= {item.image} width= "100%" height="280px"/>
                                        </Card>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </CardGroup>
            </div>
        </div>
    )
}

export default Home

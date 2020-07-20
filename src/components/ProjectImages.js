import React from 'react'
import { Card } from 'react-bootstrap';


function ProjectImages (props) {

    const { size, image } = props

    return (
       
            <div className= {size === 'full' ? "w-100" : size === 'half' ? "w-50" : "w-25"}>
                <div className="p-2 shadow">
                    <Card>
                        <Card.Img src= {image} width= "100%"/>
                    </Card>
                </div>
            </div>
     
    )
}



export default ProjectImages;

import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';


const data = {
    members: [
        {
            img: '/images/vins.jpeg',
            name: 'Ventsislav Velinov',
            email: 'velinov875@gmail.com',
            social_media: [
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/ventsislav-velinov-5981651a4/'
                },
                {
                    name: '/images/xing.webp',
                    link: 'https://www.xing.com/profile/Ventsislav_Velinov/cv'
                },
                {
                    name: '/images/github.jpg',
                    link: 'https://github.com/Vincente875'
                }
            ]
        }
    ],
    project_images: [
        {size: 'full', image: '/images/vins_1.jpeg'},    
        {size: 'full', image: '/images/vins_2.jpeg'},    
        {size: 'full', image: '/images/vins_3.jpeg'},    
        {size: 'full', image: '/images/vins_4.jpeg'},    
    ]
}

function GroupSix() {
    return (
        <div className="container pt-5">
            <div className="row my-5">
                    <div className="col-12 col-md-7">
                        {
                            data.members.map( (item, index) => <PersonCard key={index} {...item} />)
                        }
                    </div>
                    <div className="col-12 col-md-5">
                        <CardGroup>
                            {
                                data.project_images.map( (item, index) => <ProjectImages key={index} {...item} />)
                            }
                        </CardGroup>
                    </div>
            </div> 
        </div>
    )
}

export default GroupSix

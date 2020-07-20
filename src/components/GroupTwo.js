import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';


const data = {
    members: [
 
        {
            img: '/images/cia.jpeg',
            name: 'Ciamac Davoudi',
            email: 'ciamac.davoudi@gmail.com',
            social_media: [
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/ing-ciamac-davoudi-0a57a31a2/'
                },
                {
                    name: '/images/xing.webp',
                    link: 'https://www.xing.com/profile/Ciamac_Davoudi/cv'
                },
                {
                    name: '/images/github.jpg',
                    link: 'https://github.com/ciamac-da'
                },   {
                    name: '/images/web_page.png',
                    link: 'www.ciamacdavoudi.com'
                 },
            ]
        }
    ],
    project_images: [
        {size: 'full', image: '/images/wawawiwa.png'}   
    ]
}

function GroupTwo() {
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

export default GroupTwo

import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';


const data = {
    members: [
        {
            img: '/images/milad.jpeg',
            name: 'Milad Mosadegh',
            email: 'mosaddegh.milad@gmail.com',
            social_media: [
                {
                    name: '/images/web_page.png',
                    link: 'https://milad-mosadegh.github.io/My-Portfolio/'
                },
                {
                    name: '/images/github.jpg',
                    link: 'https://github.com/Milad-mosadegh'
                }
            ]
        },
        {
            img: '/images/ather.png',
            name: 'Ather Ahmad',
            email: 'atherahmad@gmail.com',
            social_media: [
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/ather-ahmad-11a040bb'
                },
                {
                    name: '/images/xing.webp',
                    link: 'https://www.xing.com/profile/Ather_Ahmad2'
                },
                {
                    name: '/images/github.jpg',
                    link: 'https://github.com/atherahmad'
                }
            ]
        }
    ],
    project_images: [
        {size: 'full', image: '/images/c2c_1.jpeg'},    
        {size: 'full', image: '/images/c2c_2.jpeg'},    
        {size: 'full', image: '/images/c2c_3.jpeg'},    
        {size: 'full', image: '/images/c2c_4.jpeg'},    
        {size: 'full', image: '/images/c2c_5.jpeg'},    
        {size: 'full', image: '/images/c2c_6.jpeg'},    
    ]
}

function GroupFive() {
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

export default GroupFive

import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';

const data = {
    members: [
        {
            img: '/images/fatima.png',
            name: 'Fatima Zahra',
            email: 'hasan.akkas@web.de',
            social_media: [
                {
                    name: '/images/web_page.png',
                    link: 'http://www.webtechsolutions.de'
                },
                {
                    name: '/images/linkedin.png',
                    link: 'http://www.linkedin.com/in/hasan-akkas/'
                },
                {
                    name: '/images/xing.webp',
                    link: 'http://www.xing.com/profile/Hasan_Akkas6/cv'
                },
                {
                    name: '/images/github.jpg',
                    link: 'http://www.github.com/HsnAkk'
                },
                {
                    name: '/images/medium.webp',
                    link: 'http://www.medium.com/@hasan.akkas123'
                }
            ]
        },
        {
            img: '/images/mohammad.jpg',
            name: 'Mohammad Saied Taleb ',
            email: '',
            social_media: [
            
                {
                    name: '/images/linkedin.png',
                    link: ''
                },
                {
                    name: '/images/xing.webp',
                    link: ''
                },
                {
                    name: '/images/github.jpg',
                    link: ''
                }
            ]
        }
    ],
    project_images: [
        {size: 'full', image: '/images/fm1.png'},
        {size: 'full', image: '/images/fm2.png'},
        {size: 'full', image: '/images/fm3.png'},
        {size: 'full', image: '/images/fm4.png'},
        {size: 'full', image: '/images/fm51.png'},
        {size: 'full', image: '/images/fm52.png'}

     
    ]
}

function GroupThree() {
    return (
        <div className="container pt-5" >
            <div className="row my-5">
                    <div className="col-12 col-md-7">
                        {
                            data.members.map( (item, index) => <PersonCard key={index} {...item} />)
                        }
                    </div>
                    <CardGroup className="col-12 col-md-5">
                        {
                            data.project_images.map( (item, index) => <ProjectImages key={index} {...item} />)
                        }
                    </CardGroup>
            </div>    
        </div>
    )
}

export default GroupThree

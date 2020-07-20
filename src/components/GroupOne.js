import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';


const data = {
    members: [
        {
            img: '/images/tomi.jpg',
            name: 'Tomislav Dumancic',
            email: 'tomislav.dumancic@gmail.com',
            social_media: [
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/tdumancic/'
                },
                {
                    name: '/images/xing.webp',
                    link: 'https://www.xing.com/profile/Tomislav_Dumancic3/cv'
                },
                {
                    name: '/images/github.jpg',
                    link: 'https://github.com/TommyD10'
                },   {
                    name: '/images/web_page.png',
                    link: 'https://tommydumancic.com/'
                },
            ]
        },
        {
            img: '/images/vardges.jpg',
            name: 'Vardges Baghdasaryan',
            email: 'Vardgesbaghdasaryan93@hotmail.com',
            social_media: [
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/vardges-baghdasaryan-a7257518a/'
                },
                {
                    name: '/images/xing.webp',
                    link: 'https://www.xing.com/profile/Vardges_Baghdasaryan/cv'
                },
                {
                    name: '/images/github.jpg',
                    link: 'https://github.com/Vardges-1'
                }
            ]
        },
        {
            img: '/images/kadirumac.jpeg',
            name: 'Kadir Umac',
            email: 'kadirumac49@gmail.com',
            social_media: [              
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/umackadir/'
                },
                {
                    name: '/images/xing.webp',
                    link: 'https://www.xing.com/profile/kadir_umac2/cv'
                },
                {
                    name: '/images/github.jpg',
                    link: '  https://github.com/kadirumac'
                },   {
                    name: '/images/web_page.png',
                    link: 'https://kadirumac.de/'
                },
            ]
        }
    ],
    project_images: [
        {size: 'half', image: '/images/nw1.png'},
        {size: 'half', image: '/images/nw2.png'},
        {size: 'half', image: '/images/nw3.png'},
        {size: 'half', image: '/images/nw4.png'},
        {size: 'half', image: '/images/nw5.png'}
    ]
}

function GroupOne() {
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

export default GroupOne

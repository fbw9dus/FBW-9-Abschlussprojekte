import React from 'react';
import PersonCard from './PersonCard';
import ProjectImages from './ProjectImages';
import { CardGroup } from 'react-bootstrap';


const data = {
    members: [
        {
            img: '/images/bora.jpeg',
            name: 'Z. Bora Manga',
            email: 'bora.mng525@gmail.com',
            social_media: [
                {
                    name: '/images/web_page.png',
                    link: 'http://www.boramanga.com'
                },
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/z-bora-m-700094175/'
                },
                {
                    name: '/images/xing.webp',
                    link: 'http://www.xing.com/profile/Manga_ZBora/cv'
                },
                {
                    name: '/images/github.jpg',
                    link: 'http://www.github.com/BrManga'
                }
            ]
        },
        {
            img: '/images/jovan.png',
            name: 'Jovan Derebanoski',
            email: 'jderebanoski@gmail.com',
            social_media: [
                {
                    name: '/images/web_page.png',
                    link: 'https://jojodev.herokuapp.com/'
                },
                {
                    name: '/images/linkedin.png',
                    link: 'https://www.linkedin.com/in/jovan-derebanoski-7a053b153/'
                },
                {
                    name: '/images/xing.webp',
                    link: 'https://www.xing.com/profile/Jovan_Derebanoski/cv'
                },
                {
                    name: '/images/github.jpg',
                    link: 'https://github.com/Ultral1sk'
                }
            ]
        }
    ],
    project_images: [
        {size: 'full', image: '/images/tomjerry_2.jpeg'}, 
        {size: 'full', image: '/images/tomjerry_1.jpeg'}, 
        {size: 'full', image: '/images/tomjerry_3.jpeg'}, 
        {size: 'full', image: '/images/tomjerry_4.jpeg'}, 

    ]
}

function GroupFour() {
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

export default GroupFour

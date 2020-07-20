import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';

function PersonCard(props) {

    const { img, name, email, social_media } = props

    return (
        <div className="mb-3 border border-light shadow rounded">
            <div className="col-12 m-3 p-0">
                <img src={img} alt="personal_image" className="rounded" width="150px" height="180px"/>
            </div>
            <div className="col-12 m-3 p-0">
                <h4 className="mb-0">{name}</h4>
                <div className="mb-4">
                    <AiOutlineMail style={{fontSize: '14px', color: 'grey'}}/>
                    <span className="ml-2" style={{fontSize: '14px', color: 'grey'}}>{email}</span>
                </div>
                {
                    social_media.map( (item, index) => <div key={index} className="my-2">
                        <img src={item.name} alt="social_media icon" width="25px" height="25px" className="mr-3"/>
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="social_links">{item.link}</a>
                    </div> )
                }
            </div>
        </div>
    )
}


export default PersonCard

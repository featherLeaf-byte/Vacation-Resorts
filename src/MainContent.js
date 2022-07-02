import React from "react"

export default function MainContent(props){
return(
     <main>
        <div className="content-block">
            <img className="content-img" src={props.imageUrl} alt=""/>
            <div  className="content-info">
                <div className="content-main">
                    <i className="fas fa-map-marker-alt"></i>
                    <label className="country">{props.location}</label>
                    <a href={props.googleMapsUrl}>View on google maps</a>
                </div>
                <h1 className="location">{props.title}</h1>
                <h4 className="duration">
                    <label>{props.startDate}</label> - <label>{props.endDate}</label>
                    </h4>
                <p>{props.description}</p>
            </div>
        </div>
     </main>
    )
}
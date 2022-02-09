import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"

export default function Place(props) {
    return (
        <>
            <section className="place">
                <img src={`../images/${props.imageUrl}`} alt={props.imageUrl} className="place-image" />
                <div className="content">
                    <p className="place-location"><FaMapMarkerAlt /> {props.location} <a href={props.googleMapsUrl} className="place-map">View on Google Maps</a></p>
                    <h1 className="place-title">{props.title}</h1>
                    <p className="place-date">{props.startDate} <span>-</span> <span className="place-date-end">{props.endDate}</span></p>
                    <p className="place-text">{props.description}</p>
                </div>
            </section>
            <hr/>
        </>
    )
}
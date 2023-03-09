import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Rating({rating}) {

    const MAX_RATING = 5;
    const rounded_rating = Math.round(rating);
    const emptyStar = MAX_RATING - rounded_rating;

    return (
        <div className="star-container">
            {new Array(rounded_rating).fill(null).map((e,index) => ( 
                <FontAwesomeIcon key={index} icon={faStar} className="star filled"/>
            ))}
            {new Array(emptyStar).fill(null).map((e,index) => ( 
                <FontAwesomeIcon key={index} icon={faStar} className="star"/>
            ))}
        </div>
    )
}

import "./CoreConcept.css";
import PropTypes from 'prop-types';

export default function CoreConcept({ image, title, description }) {
    return (
        <li>
            <img src={image} />
            <h3>{title}</h3>
            <p>{description}</p>
        </li>
    );
}


// Prop validation using PropTypes
CoreConcept.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};
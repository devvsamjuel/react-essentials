import PropTypes from 'prop-types';
import "./TabButton.css"

function TabButton({ isSelected, text, ...props }) {
    console.log(`${text} TABBUTTON COMPONENT EXECUTING`);
    return (
        <li>
            <button className={isSelected ? 'active' : undefined} {...props}>
                {text}
            </button>
        </li>
    )
}

export default TabButton;

// Prop validation using PropTypes
TabButton.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired
};
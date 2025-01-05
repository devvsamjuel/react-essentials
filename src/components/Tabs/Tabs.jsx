import PropTypes from "prop-types";


export default function Tabs({ children, buttons }) {
    return (
        <>
            <menu>{buttons}</menu>
            {children}
        </>
    );
}

Tabs.propTypes = {
    children: PropTypes.object.isRequired,
    buttons: PropTypes.object.isRequired
};
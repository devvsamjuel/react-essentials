import PropTypes from "prop-types";


export default function Tabs({ children, buttons, BladeContainerElement = "menu" }) {
    return (
        <>
            <BladeContainerElement>{buttons}</BladeContainerElement>
            {children}
        </>
    );
}

Tabs.propTypes = {
    children: PropTypes.object.isRequired,
    buttons: PropTypes.object.isRequired,
    BladeContainerElement: PropTypes.object.isRequired
};
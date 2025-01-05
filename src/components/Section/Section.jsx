import PropTypes from "prop-types";

export default function Section({ title, children, ...props }) {
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section >
    );
}


// Prop validation using PropTypes
Section.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    children: PropTypes.object
};
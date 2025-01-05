import reactAtomImage from "../../assets/react.svg";
import "./Header.css";

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];
function generateRandomInt(max) {
    return Math.floor(Math.random() * (max + 1));
}

function Header() {
    const description = reactDescriptions[generateRandomInt(2)];

    return (
        <header>
            <img src={reactAtomImage} alt="react atom image" />
            <h1>React Essentials</h1>
            <p>{description} React concepts you will need for almost any app you are
                going to build!</p>
        </header>
    );
}


export default Header;
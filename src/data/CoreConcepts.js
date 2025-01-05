
import componentsImg from "../assets/components.png";
import jsxImg from "../assets/jsx-ui.png";
import propsImg from "../assets/config.png";
import stateImg from "../assets/state-mgmt.png";

export const CORE_CONCEPTS = [
  {
    image: componentsImg,
    title: 'components',
    description:
      'The core UI building block - compose the user interface by combining multiple components.',
  },
  {
    image: jsxImg,
    title: 'jsx',
    description:
      'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
  },
  {
    image: propsImg,
    title: 'props',
    description:
      'Make components configurable (and therefore reusable) by passing input data to them.',
  },
  {
    image: stateImg,
    title: 'state',
    description:
      'React-managed data which, when changed, causes the component to re-render & the UI to update.',
  },
];
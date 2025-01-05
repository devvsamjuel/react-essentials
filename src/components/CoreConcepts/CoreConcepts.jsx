import { CORE_CONCEPTS } from "../../data/CoreConcepts";
import Section from "../Section/Section";
import CoreConcept from "./CoreConcept";

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
                {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />))}
            </ul>
        </Section>
    );
}



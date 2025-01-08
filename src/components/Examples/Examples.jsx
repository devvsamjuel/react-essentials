import { useState } from 'react'

import { EXAMPLES } from '../../data/Examples'
import { TAB_BUTTON_BLADES } from '../../data/TabButtonBlades'
import TabButton from '../TabButton/TabButton';
import Section from '../Section/Section';
import Tabs from '../Tabs/Tabs';

function Examples() {

    const [selectedBlade, setSelectedBladeText] = useState();

    function handleSelectedBlade(blade) {
        setSelectedBladeText(blade);
    }

    let tabContent = <p>Please select a topic blade.</p>;

    if (selectedBlade) {
        tabContent = (
            <div id="tab-content">
                <h3>{EXAMPLES[selectedBlade].title}</h3>
                <p>{EXAMPLES[selectedBlade].description}</p>
                <pre>
                    <code>{EXAMPLES[selectedBlade].code}</code>
                </pre>
            </div>
        );
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs
                BladeContainerElement="menu"
                buttons={
                    TAB_BUTTON_BLADES.map((blade) => (
                        <TabButton
                            key={blade}
                            isSelected={selectedBlade === blade}
                            text={blade} onClick={() => { handleSelectedBlade(blade) }}
                        />
                    ))
                }>
                {tabContent}
            </Tabs>
        </Section>
    )
}

export default Examples;

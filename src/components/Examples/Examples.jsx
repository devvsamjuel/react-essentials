import { useState } from 'react'

import { EXAMPLES } from '../../data/Examples'
import { TAB_BUTTON_BLADES } from '../../data/TabButtonBlades'
import TabButton from '../TabButton/TabButton';

function Examples() {

    const [selectedBlade, setSelectedTopic] = useState();

    function handleSelect(blade) {
        setSelectedTopic(blade);
    }

    let tabContent = <p>Please select a topic blade.</p>;

    if (selectedBlade) {
        console.log(selectedBlade);
        console.log(EXAMPLES[selectedBlade]);

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
        <section id="examples">
            <h2>Examples</h2>
            <menu>
                {
                    TAB_BUTTON_BLADES.map((blade) => (
                        <TabButton
                            key={blade}
                            isSelected={selectedBlade === blade}
                            text={blade} onSelect={() => { handleSelect(blade) }}
                        />
                    ))
                }
            </menu>
            {tabContent}
        </section>
    )
}

export default Examples;

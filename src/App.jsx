import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept/CoreConcept'
import { CORE_CONCEPTS } from './data/CoreConcepts'
import { TAB_BUTTON_BLADES } from './data/TabButtonBlades'
import { EXAMPLES } from './data/Examples'
import TabButton from './components/TabButton/TabButton'

function App() {

  const [selectedBlade, setSelectedTopic] = useState();

  function handleSelect(blade) {
    console.log(blade);
    setSelectedTopic(blade);
  }

  let tabContent = <p>Please select a topic.</p>;

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
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem) => (<CoreConcept key={conceptItem.title} {...conceptItem} />))}
          </ul>
        </section>
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

      </main>
    </div>
  )
}

export default App

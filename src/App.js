import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: crypto.randomUUID(),
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: crypto.randomUUID(),
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: crypto.randomUUID(),
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: crypto.randomUUID(),
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: crypto.randomUUID(),
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: crypto.randomUUID(),
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
  {
    id: crypto.randomUUID(),
    question: "What is createRoot()?",
    answer: "Controls the contents of the container node you pass in.",
  },
  {
    id: crypto.randomUUID(),
    question: "What does state driven mean?",
    answer:
      "State driven means data or state is rendered to the UI written by JSX that then on action occurs and then a reaction occurs, updating the state, then re-renders the UI.",
  },
  {
    id: crypto.randomUUID(),
    question: "Before you can even use React what must you first do?",
    answer: `import React from "react" import ReactDom from "react-dom/client" import "the. index.css".`,
  },
  {
    id: crypto.randomUUID(),
    question: "Explain Component Composition",
    answer:
      "Component Composition involves combining different components using the children prop, or explicity defined props.",
  },
  {
    id: crypto.randomUUID(),
    question: "What is JSX?",
    answer:
      "JSX is a syntax that combines HTML, CSS, JavaScript, as well as referencing other components.",
  },
  {
    id: crypto.randomUUID(),
    question:
      "In order for elements to display in components, what has to happen?",
    answer: "return()",
  },
  {
    id: crypto.randomUUID(),
    question: "How many elements can be in a component in React?",
    answer: "One, however you can put multiple inside of a Div element.",
  },
  {
    id: crypto.randomUUID(),
    question: "How would you return an <H2> in a component in React?",
    answer: "function XX(){, return <h2><h2>: }",
  },
  {
    id: crypto.randomUUID(),
    question: "What is a fragment?",
    answer:
      "A fragment allows us to have more than 1 element/component inside of JSX.",
  },
  {
    id: crypto.randomUUID(),
    question: "What does imparative mean?",
    answer:
      "Imparative means we are manually telling the DOM what to do, and have to do so step-by-step.",
  },
  {
    id: crypto.randomUUID(),
    question: "What does declarative mean?",
    answer:
      "Declarative is to simply describe what the UI should look like based on the correct data in the component",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          onClick={() => handleClick(question.id)}
          className={question.id === selectedId ? "selected" : ""}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}

import { useState } from "react"
import "./App.css"


const FaqItem = ({ data }) => {
  const [show, setShow] = useState(false);

  return (
    <div className={`faq-item ${show ? "active" : ""}`}>
      <div className="faq-item-header" onClick={() => setShow(!show)}>{data.question}</div>
      <div className="faq-item-body">
        <div className="faq-item-body-content">{data.answer}</div>
      </div>
    </div>
  )
}
const FaqAccordion = ({ data }) => {
  return (
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {data.map((item) => (
        <FaqItem key={item.id} data={item} />
      ))}
    </div>
  )
}

const data = [
  {
    id: 1,
    question: "What is React ?",
    answer: "React is a JavaScript library for building user interfaces."
  },
  {
    id: 2,
    question: "What is a component ?",
    answer: "A component is a reusable piece of code that represents a part of a user interface."
  },
  {
    id: 3,
    question: "What is state ?",
    answer: "State is an object that holds data that may change over time."
  },
  {
    id: 4,
    question: "What is props ?",
    answer: "Props are short for properties. They are used to pass data from one component to another."
  }
]

function App() {


  return (
    <>
      <div>
        <FaqAccordion data={data} />
      </div>

    </>
  )
}

export default App

import "./index.css";
import { useState } from "react";
const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function stepIncrease() {
    const stepAdder = step + 1;
    if (stepAdder > 3) {
      setStep(3);
      return;
    }
    setStep(stepAdder);
  }

  function stepDecrease() {
    const stepDeductor = step - 1;
    if (stepDeductor < 1) {
      setStep(1);
      return;
    }
    setStep(stepDeductor);
  }

  function openHandler() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button className="close" onClick={openHandler}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={stepDecrease}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={stepIncrease}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default App;

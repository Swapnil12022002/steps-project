import "./index.css";
import { useState } from "react";
const stepMessages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function stepIncrease() {
    if (step < 3) {
      setStep(() => step + 1);
    }
  }

  function stepDecrease() {
    if (step > 1) {
      setStep(() => step - 1);
    }
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
            Step {step}: {stepMessages[step - 1]}
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

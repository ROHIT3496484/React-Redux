import { useState } from "react";

const messages = [
	"Learn React ⚛️",
	"Apply for jobs 💼",
	"Invest your new income 🤑",
];
export default function App() {
	return (
		<div>
			<Steps />
			<Steps />
		</div>
	);
}

function Steps() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	// const [test, setTest] = useState({ name: "Jonas" });

	function handlePrevious() {
		if (step > 1) setStep(s => s - 1);
	}

	function handleNext() {
		if (step < 3) {
			setStep(s => s + 1);
			// setStep(s => s + 1);
			// react useState hooks are called in the order they are defined

			// setStep(step + 1);
			// setStep(step + 1);
			// 同一个函数中多次调用 setStep 时，React 会将这些更新批量处理，并且只应用最后一次更新。
		}

		// BAD PRACTICE
		// test.name = "Fred";
		// setTest({ name: "Fred" });
	}

	return (
		<div>
			<button className="close" onClick={() => setIsOpen(is => !is)}>
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
						{/* {test.name} */}
					</p>

					<div className="buttons">
						<button
							style={{ backgroundColor: "#7950f2", color: "#fff" }}
							onClick={handlePrevious}>
							Previous
						</button>
						<button
							style={{ backgroundColor: "#7950f2", color: "#fff" }}
							onClick={handleNext}>
							Next
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

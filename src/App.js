import { useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	const [operand1, setOperand1] = useState('');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [result, setResult] = useState(0);

	const cleanResult = () => {
		setOperand1('');
		setOperator('');
		setOperand2('');
		setResult(null);
	};

	const getResult = () => {
		let num1 = Number(operand1);
		let num2 = Number(operand2);

		cleanResult();
		// eslint-disable-next-line default-case
		switch (operator) {
			case '+':
				setResult(num1 + num2);
				setOperand1(num1 + num2);
				break;
			case '-':
				setResult(num1 - num2);
				setOperand1(num1 - num2);
				break;
		}
	};

	let hasOperatop = operator !== '';

	return (
		<div className={styles.app}>
			<div
				className={
					styles.result +
					' ' +
					(result !== 0 && !hasOperatop ? styles['result-done'] : '')
				}
			>
				{operand1 + operator + operand2 || result || ''}
			</div>
			<div className={styles.buttons}>
				{NUMS.map((num) => {
					return (
						<button
							className={
								styles.button +
								' ' +
								(Number(num) === 0 ? styles.null : '')
							}
							key={num}
							onClick={() =>
								hasOperatop
									? setOperand2(operand2 + num)
									: setOperand1(operand1 + num)
							}
						>
							{num}
						</button>
					);
				})}
				<button
					className={styles.button + ' ' + styles.operator + ' ' + styles.clean}
					onClick={cleanResult}
				>
					C
				</button>
				<button
					className={styles.button + ' ' + styles.operator + ' ' + styles.plus}
					onClick={() => setOperator('+')}
				>
					+
				</button>
				<button
					className={styles.button + ' ' + styles.operator + ' ' + styles.minus}
					onClick={() => setOperator('-')}
				>
					-
				</button>
				<button
					className={styles.button + ' ' + styles.operator + ' ' + styles.done}
					onClick={getResult}
				>
					=
				</button>
			</div>
		</div>
	);
};

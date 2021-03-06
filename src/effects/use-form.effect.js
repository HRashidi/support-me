import { useState } from 'react';
// https://www.codebeast.dev/react-forms-then-and-now/

const useForm = ({ initialValues, onSubmit, validate }) => {
	// highlight line
	const [values, setValues] = useState(initialValues || {});
	const [touchedValues, setTouchedValues] = useState({});
	const [errors, setErrors] = useState({});

	const handleChange = event => {
		const target = event.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;
		setValues({
			...values,
			[name]: value
		});
	};

	const handleBlur = event => {
		const target = event.target;
		const name = target.name;
		setTouchedValues({
			...touchedValues,
			[name]: true
		});
		const e = validate(values);
		setErrors({
			...errors,
			...e
		})
	};

	const handleSubmit = event => {
		event.preventDefault();
		const e = validate(values);
		setErrors({
			...errors,
			...e
		});
		onSubmit({ values, e });
	};

	return {
		values,
		touchedValues,
		errors,
		handleChange,
		handleSubmit,
		handleBlur
	};
};

export default useForm;
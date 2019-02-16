import { useState } from 'react'
import { toLower } from 'lodash'


const useFormInput = (data = {}) => {
	const [values, setState] = useState(data)

	const setInput = ({ name, checked, value, type }) => {
		let updatedValues = {[name]: value}
		if (toLower(type) === 'number') updatedValues = {[name]: parseFloat(value)}
		else if (toLower(type) === 'checkbox') updatedValues = {[name]: checked}
		setState(prevState => ({...prevState, ...updatedValues}))
	}

	const resetValues = defaults => setState(defaults)

	return [values, setInput, resetValues]
}


export default useFormInput

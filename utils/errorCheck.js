const checkIfValidUUID = async (str) => {
  const regexExp = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
  return regexExp.test(str);
}

export const initialErrorChecks = async (props) => {
	//
	//API KEY CHECKS
	if(!props.key) return { error: true, response: 'No API key provided', code: 'NAKP482' }

	let valid = await checkIfValidUUID(props.key)
	if(!valid) return { error: true, response: 'Invalid API key provided', code: 'IAKP938' }

	//OTHER CHECKS
	if(props?.other?.length) {
		if(props.other.length.data !== props.other.length.chars) return { error: true, response: 'Invalid data length', code: 'IDL745' }
	}

}
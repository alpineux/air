import { supabase } from './initSupabase'

const checkKey = async (key) => {
	const { data, error } = await supabase.rpc('check_api_key', { passkey: key })
	if(error) return error;
	return data;
}

export const fetch = async (props) => {
	let check = await checkKey(props.key)
	if(check.length === 0) return { error: { api: true } }
	if(check.code === '22P02') return { error: { api: true } }

	let select = "*"
	if(props.select) select = props.select

	let query = supabase.from('airports')
		.select(select)
		.eq('scheduled_service', 'yes')
		.neq('type', 'heliport')
		.neq('type', 'seaplane_base')

	//GEO
	if (props.country) query = query.eq('country', props.country.toUpperCase())
	if (props.province) query = query.eq('region', `CA-${props.province.toUpperCase()}`)

	//FILTERS
	if (props.limit) query = query.limit(props.limit)
	if (props.order) {
		let asc = true
		if(props.asc === 'false') asc = false;
		query = query.order(props.order, { ascending: asc })
	}

	//SEARCH
	if(props.term) {
		const search = decodeURI(props.term)
		let column = 'name'
		if(props.col) column = props.col
		query = query.like(column, `%${search.charAt(0).toUpperCase() + search.slice(1)}%`)
	}

	const { data, error } = await query

	if(data.length === 0) {
		return { empty: true };
	}

	return { data, error }
}


//
//
//FETCH A SINGLE AIRPORT
//
//
export const single = async (props) => {
	let query = supabase.from('airports').select().single()

	if (props.code.length === 4) query = query.eq('icao_code', props.code)
	if (props.code.length === 3) query = query.eq('iata_code', props.code)
			
	const { data, error } = await query
	return { data, error }
}
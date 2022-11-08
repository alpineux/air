import { supabase } from '../../../utils/initSupabase'
import { single } from '../../../utils/db'

export default async function handler(req, res) {

	const { query } = req

	if(!query.ident) {
		res.status(400).json({ error: 'No airport ICAO or IATA provided', code: 'NAII452' })
		return;
	}

	if(query.ident.length !== 4 && query.ident.length !== 3) {
		res.status(400).json({ error: 'Invalid ICAO or IATA', code: 'III456' })
		return;
	}

	const fetch = await single({ code: query.ident.toUpperCase() })

	if(fetch.error) { 
		res.status(400).json({ error: 'There was an error fetching the data', code: 'EFD998' }) 
		return;
	}

	if(fetch.empty) { 
		res.status(400).json({ error: 'No results found', code: 'NRF492' }) 
		return;
	}

	res.status(200).json(fetch.data)
}
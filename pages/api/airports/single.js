import { supabase } from '../../../utils/initSupabase'

export default async function handler(req, res) {

  const { query } = req
  console.log(query)

  if(!query) {
    console.log('empty!!')
    res.status(400).json({ error: 'there is an error' })
  }

  if(query.icao) {

    if(query.icao.length !== 4) res.status(400).json({ error: 'Invalid ICAO. ICAO code must be 3 characters long', code: '45J38D' })

    const { data, error } = await supabase.from('airports').select().eq('ident', query.icao.toUpperCase())
    res.status(200).json(data)
  }

  if(query.iata) {
    if(query.iata.length !== 3) res.status(400).json({ error: 'Invalid IATA. IATA code must be 3 characters long', code: '45OR83' })

    const { data, error } = await supabase.from('airports').select().eq('iata_code', query.iata.toUpperCase())
    res.status(200).json(data)
  }

  //res.status(200).json({ error: 'errrorrrr' })
}
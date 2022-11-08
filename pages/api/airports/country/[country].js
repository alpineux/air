import { supabase } from '../../../../utils/initSupabase'
import { fetch } from '../../../../utils/db'

export default async function handler(req, res) {

  const { query } = req

  let data = await fetch(query)

  if(data.error) {
    res.status(200).json({ error: 'There was an error fetching the data', code: 'EFD998' })
    return;
  }

  res.status(200).json(data)
}
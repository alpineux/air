import { supabase } from '../../../../utils/initSupabase'
import { fetch } from '../../../../utils/db'
import { initialErrorChecks } from '../../../../utils/errorCheck'

export default async function handler(req, res) {

  const { query } = req;

  let runChecks = 
    await initialErrorChecks({ key: query.key });

  if(runChecks?.error) { 
    res.status(500).send({ error: runChecks.response, code: runChecks.code }) 
    return; 
  }

  let data = await fetch(query)

  if(data.error) {
    res.status(400).json({ error: 'There was an error fetching the data', code: 'EFD512' }) 
    return;
  }
  if(data.empty) {
    res.status(400).json({ error: 'No results found', code: 'NRF492' }) 
    return;
  }

  res.status(200).json(data)
}

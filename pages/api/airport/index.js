export default async function handler(req, res) {
	res.status(400).json({ error: 'No aiport ICAO or IATA provided', code: 'NAIIP877' })
}
const TOKEN: string = import.meta.env.VITE_TINYURL_TOKEN
const URL: string = 'https://api.tinyurl.com/create'

/**
 * Calls API to get a shorten URL of the longUrl in param
 * @param {string} longUrl - URL you want to shorten
 * @returns the shorten URL as a String
 * @author Oriol Plazas León
 * @since 02/04/2026
 * @throws Error if API Calling fails - "Error shortening URL"
 */
export async function shortenUrl(longUrl: string): Promise<string> {
  const response = await fetch(URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      url: longUrl,
      domain: 'tinyurl.com',
    }),
  })
  if (!response.ok) {
    throw new Error('Error shortening URL')
    return 'Error shortening URL'
  }
  const data = await response.json()
  const shortURL = data.data.tiny_url
  return shortURL
}

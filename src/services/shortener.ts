const TOKEN: string = import.meta.env.VITE_TINYURL_TOKEN
const URL: string = 'https://api.tinyurl.com/create'

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

const API = import.meta.env.VITE_API_URL
  || (import.meta.env.DEV ? '' : 'https://classboxes-technologies-dummy.onrender.com')

export async function postJson(url, body) {
  const response = await fetch(`${API}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  })

  const data = await response.json().catch(() => ({}))
  if (!response.ok) {
    throw new Error(data.message || 'Unable to submit right now. Please try again.')
  }
  return data
}

import { useState } from 'react'

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_KEY

export default function InquiryForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('')

  async function onSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const data = Object.fromEntries(new FormData(e.target))
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      const json = await res.json()
      if (json.success) {
        setStatus('sent')
        e.target.reset()
      } else {
        setErrorMsg(json.message || '')
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  if (status === 'sent') return <p>Thanks! We'll be in touch.</p>

  return (
    <form action="https://api.web3forms.com/submit" method="POST" onSubmit={onSubmit} style={{ display: 'grid', gap: '0.75rem' }}>
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input name="name" placeholder="Your name" required />
      <input name="email" type="email" placeholder="Your email" required />
      <textarea name="message" placeholder="Your inquiry" rows={5} required />
      {/* honeypot: hidden from people, bots fill it in and Web3Forms drops the submission */}
      <input type="checkbox" name="botcheck" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />
      <button type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send'}
      </button>
      {status === 'error' && <p>Something went wrong{errorMsg && `: ${errorMsg}`}. Please try again.</p>}
    </form>
  )
}

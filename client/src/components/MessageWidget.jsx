import { useEffect, useRef, useState } from 'react'
import { postJson } from '../api'

const greeting = {
  from: 'team',
  text: 'Hi! Send a message and the ClassBoxes team will reply at info@classboxes.com.'
}

export default function MessageWidget() {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [draft, setDraft] = useState('')
  const [ready, setReady] = useState(false)
  const [error, setError] = useState('')
  const [messages, setMessages] = useState([greeting])
  const endRef = useRef(null)

  useEffect(() => {
    const saved = sessionStorage.getItem('cb-chat')
    if (!saved) return
    try {
      const data = JSON.parse(saved)
      if (data.messages?.length) setMessages(data.messages)
      if (data.name) setName(data.name)
      if (data.email) setEmail(data.email)
      if (data.ready) setReady(true)
    } catch {
      sessionStorage.removeItem('cb-chat')
    }
  }, [])

  useEffect(() => {
    sessionStorage.setItem('cb-chat', JSON.stringify({ messages, name, email, ready }))
  }, [messages, name, email, ready])

  useEffect(() => {
    if (open) endRef.current?.scrollIntoView({ block: 'end' })
  }, [open, messages])

  const start = (event) => {
    event.preventDefault()
    if (!name.trim()) {
      setError('Please enter your name.')
      return
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email.')
      return
    }
    setError('')
    setReady(true)
    setMessages((current) => [
      ...current,
      { from: 'team', text: `Thanks, ${name.trim()}. Type your message below and press send.` }
    ])
  }

  const send = async (event) => {
    event.preventDefault()
    const text = draft.trim()
    if (!text) return
    setDraft('')
    setMessages((current) => [...current, { from: 'you', text }])

    try {
      const data = await postJson('/api/messages', {
        name: name.trim(),
        email: email.trim(),
        message: text
      })
      setMessages((current) => [...current, { from: 'team', text: data.message }])
    } catch (error) {
      setMessages((current) => [...current, { from: 'team', text: error.message }])
    }
  }

  return (
    <>
      <style>{`
        .cb-chat-launcher {
          position: fixed;
          right: 18px;
          bottom: 0;
          z-index: 4000;
          border: 0;
          border-radius: 10px 10px 0 0;
          background: #14c15a;
          color: #fff;
          padding: 14px 22px;
          font-family: inherit;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          box-shadow: 0 8px 20px rgba(20, 193, 90, 0.28);
        }

        .cb-chat-launcher:hover {
          background: #0eaa4e;
        }

        .cb-chat-panel {
          position: fixed;
          right: 18px;
          bottom: 58px;
          z-index: 4000;
          width: min(360px, calc(100vw - 24px));
          height: min(480px, calc(100vh - 90px));
          display: flex;
          flex-direction: column;
          overflow: hidden;
          border-radius: 16px 16px 0 0;
          background: #fff;
          box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
        }

        .cb-chat-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 16px;
          background: #14c15a;
          color: #fff;
        }

        .cb-chat-head strong {
          display: block;
          font-size: 16px;
        }

        .cb-chat-head span {
          font-size: 12px;
          opacity: 0.9;
        }

        .cb-chat-head button {
          border: 0;
          background: transparent;
          color: #fff;
          font-size: 26px;
          line-height: 1;
          cursor: pointer;
        }

        .cb-chat-body {
          flex: 1;
          overflow: auto;
          padding: 14px;
          background: #f6f7f8;
        }

        .cb-bubble {
          max-width: 86%;
          margin-bottom: 10px;
          padding: 10px 12px;
          border-radius: 12px;
          font-size: 14px;
          line-height: 1.45;
        }

        .cb-bubble.team {
          background: #fff;
          color: #222;
        }

        .cb-bubble.you {
          margin-left: auto;
          background: #14c15a;
          color: #fff;
        }

        .cb-chat-form {
          display: grid;
          gap: 8px;
          margin: 0;
          max-width: none;
          padding: 12px;
          border-top: 1px solid #eee;
          background: #fff;
        }

        .cb-chat-form input,
        .cb-chat-form textarea {
          width: 100%;
          margin: 0;
          padding: 10px 12px;
          border: 1px solid #e5e5e5;
          border-radius: 10px;
          font: inherit;
          font-size: 14px;
        }

        .cb-chat-form textarea {
          min-height: 64px;
          resize: none;
        }

        .cb-chat-form button {
          border: 0;
          border-radius: 10px;
          background: #14c15a;
          color: #fff;
          padding: 10px 14px;
          font-weight: 700;
          cursor: pointer;
        }

        .cb-chat-error {
          margin: 0;
          color: #f04455;
          font-size: 12px;
          font-weight: 700;
        }
      `}</style>

      {open && (
        <section className="cb-chat-panel" aria-label="Send a message">
          <header className="cb-chat-head">
            <div>
              <strong>ClassBoxes</strong>
              <span>We typically reply soon</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close messages">
              ×
            </button>
          </header>

          <div className="cb-chat-body">
            {messages.map((message, index) => (
              <p className={`cb-bubble ${message.from}`} key={`${message.from}-${index}`}>
                {message.text}
              </p>
            ))}
            <div ref={endRef} />
          </div>

          {!ready ? (
            <form className="cb-chat-form" onSubmit={start}>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {error && <p className="cb-chat-error">{error}</p>}
              <button type="submit">Start chat</button>
            </form>
          ) : (
            <form className="cb-chat-form" onSubmit={send}>
              <textarea
                placeholder="Type a message..."
                value={draft}
                onChange={(event) => setDraft(event.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          )}
        </section>
      )}

      <button className="cb-chat-launcher" type="button" onClick={() => setOpen((value) => !value)}>
        {open ? 'Close chat' : 'Send message'}
      </button>
    </>
  )
}

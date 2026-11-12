export const searchEntries = [
  {
    title: 'About ClassBoxes',
    path: '/about-us',
    keywords: 'about us company recruitment agency training new jersey',
    text: 'ClassBoxes teaches the tools companies hire for and introduces those people to teams in New Jersey, the United States, and Canada. Career direction, instructors, course access, and practice tasks.'
  },
  {
    title: 'Find a Job',
    path: '/find-a-job',
    keywords: 'jobs careers apply openings hiring php java react python profile',
    text: 'A role you can explain in one sentence. Share your profile for Java, React, Python, or cloud work. Interview practice and a private introduction.'
  },
  {
    title: 'Find Talent',
    path: '/find-talent',
    keywords: 'hire talent candidates recruit staffing shortlist role',
    text: 'A few people, already spoken with. Send the role and receive a short list. Contract, trial, or direct hire. Piscataway and Montreal.'
  },
  {
    title: 'Test your Skills',
    path: '/test-your-skills',
    keywords: 'exam quiz skills review coding register book',
    text: 'Show the work before the interview. Book a skill review. Register, take the review, hear the notes, and choose a next step.'
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    keywords: 'contact email phone address piscataway office message montreal',
    text: 'Write, call, or come by. 371 Hoes Lane, #200, Piscataway, New Jersey 08854. Email info@classboxes.com. Call +1-551-355-5230. Montreal office at Place Ville Marie.'
  },
  {
    title: 'Send a role',
    path: '/find-talent',
    keywords: 'candidates company requirement shortlist hire',
    text: 'Fill the seats that are slowing the roadmap. Shortlists from people ClassBoxes has already spoken with.'
  },
  {
    title: 'Open paths',
    path: '/find-a-job',
    keywords: 'career paths job openings apply profile',
    text: 'Browse open paths and share a profile. ClassBoxes introduces you to a team that asked for your stack.'
  },
  {
    title: 'Headquarters',
    path: '/contact-us',
    keywords: 'headquarters location map hoes lane new jersey canada montreal',
    text: 'ClassBoxes Technologies at 371 Hoes Lane, #200, Piscataway, New Jersey 08854, and 5 Place Ville Marie, Montreal. Phone +1-551-355-5230. Email info@classboxes.com.'
  }
]

export function searchSite(query) {
  const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (!terms.length) return []

  return searchEntries
    .map((entry) => {
      const hay = `${entry.title} ${entry.keywords} ${entry.text}`.toLowerCase()
      if (!terms.every((term) => hay.includes(term))) return null
      const score = terms.reduce((total, term) => {
        if (entry.title.toLowerCase().includes(term)) return total + 5
        if (entry.keywords.toLowerCase().includes(term)) return total + 2
        return total + 1
      }, 0)
      return { ...entry, score, snippet: buildSnippet(entry.text, terms[0]) }
    })
    .filter(Boolean)
    .sort((a, b) => b.score - a.score)
}

function buildSnippet(text, term) {
  const clean = text.replace(/\s+/g, ' ').trim()
  const index = clean.toLowerCase().indexOf(term)
  if (index < 0) return clean.slice(0, 150)

  let start = Math.max(0, index - 40)
  if (start > 0) {
    const space = clean.indexOf(' ', start)
    if (space !== -1 && space < index) start = space + 1
  }

  let end = Math.min(clean.length, index + term.length + 90)
  const lastSpace = clean.lastIndexOf(' ', end)
  if (lastSpace > index) end = lastSpace

  const prefix = start > 0 ? '…' : ''
  const suffix = end < clean.length ? '…' : ''
  return `${prefix}${clean.slice(start, end).trim()}${suffix}`
}

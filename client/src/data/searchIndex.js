export const searchEntries = [
  {
    title: 'About ClassBoxes',
    path: '/about-us',
    keywords: 'about us company recruitment agency training new jersey',
    text: 'Classboxes is an online learning platform and a recruitment agency in New Jersey. Training in Salesforce, Azure, DevOps, Amazon Web Services, SailPoint, Splunk, Business Analysis, Quality Analysis, Java, Dot Net, and Performance Testing. Career guidance, expert instruction, lifetime access, and lifelong learning.'
  },
  {
    title: 'Find a Job',
    path: '/find-a-job',
    keywords: 'jobs careers apply openings hiring php java react python',
    text: 'Finding jobs and direct apply with ClassBoxes. Resume writing, interview preparation, and career coaching in New Jersey. High quality jobs, immediate joining, zero hiring cost, and 12 month support. PHP, Java, React, and Python developer roles.'
  },
  {
    title: 'Find Talent',
    path: '/find-talent',
    keywords: 'hire talent candidates recruit staffing zero cost',
    text: 'Hire the best talent at zero cost. Companies connect with skilled professionals. High quality candidates, immediate joining, zero hiring cost, and 12 month support. Drop your hiring requirements.'
  },
  {
    title: 'Test your Skills',
    path: '/test-your-skills',
    keywords: 'exam quiz skills prize coding challenge register',
    text: 'Test your skills and win prizes. Coding challenges and design contests. Register, participate, see the result announcement, and prize distribution. Online exam preparation.'
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
    keywords: 'contact email phone address piscataway office message',
    text: 'Get in touch with ClassBoxes Technologies. 371 Hoes Lane, #200, Piscataway, New Jersey 08854. Email info@classboxes.com. Call +1-551-355-5230. Send a message from the contact form.'
  },
  {
    title: 'Need Candidates',
    path: '/find-talent',
    keywords: 'candidates company requirement share',
    text: 'We specialize in finding skilled and motivated candidates for your company and connect you with people who fit your unique needs.'
  },
  {
    title: 'Job Openings',
    path: '/find-a-job',
    keywords: 'dream company job openings apply',
    text: 'We connect talented individuals with employers and help job seekers find their dream jobs.'
  },
  {
    title: 'Headquarters',
    path: '/contact-us',
    keywords: 'headquarters location map hoes lane new jersey canada',
    text: 'ClassBoxes Technologies headquarters at 371 Hoes Lane, #200, Piscataway, New Jersey - 08854. Phone +1-551-355-5230. Email info@classboxes.com.'
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

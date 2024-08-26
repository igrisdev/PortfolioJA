export const projects = (await api()) || []

async function api() {
  const document = await fetch(
    'https://docs.google.com/spreadsheets/d/1ChnRtdQcb8bQ_WiS43gHEKsagiLmpzMkkh7MSNhIaLg/pub?gid=537540525&single=true&output=tsv'
  ).then((res) => res.text())

  const rows = document
    .split('\n')
    .slice(1)
    .map((row) => row.trim().split('\t'))

  return rows.map(
    ([
      title,
      urlRepository,
      urlWeb,
      sizeCard,
      skills,
      imageName,
      description,
    ]) => ({
      title,
      urlRepository,
      urlWeb,
      sizeCard: sizeCard === 'TRUE',
      skills: parseSkills(skills),
      imageName,
      description,
    })
  )
}

function parseSkills(skillsString) {
  const skillEntries = skillsString
    .replace(/[\r\n]+/g, '')
    .split('},')
    .map((skill) => skill.trim() + '}')

  return skillEntries.map((skill) => {
    const urlMatch = skill.match(/url:\s*'([^']+)'/)
    const skillMatch = skill.match(/skill:\s*'([^']+)'/)

    return {
      url: urlMatch ? urlMatch[1] : '',
      skill: skillMatch ? skillMatch[1] : '',
    }
  })
}

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

/* export const projects = [
  {
    title: 'UniMayor',
    urlRepository: 'https://github.com/igrisdev/horario_unimayor',
    urlWeb: 'https://horario-unimayor.vercel.app',
    sizeCard: true,
    skills: [
      {
        url: 'https://res.cloudinary.com/dbwupri3k/image/upload/v1718679763/PortfolioJA/IconsSkills/x0oa6esfpleclrhwkt1w.svg',
        skill: 'nest js',
      },
      {
        url: 'https://res.cloudinary.com/dbwupri3k/image/upload/v1701231522/PortfolioJA/IconsSkills/lzeyxmohh4plhwimeaod.svg',
        skill: 'tailwind',
      },
      {
        url: 'https://res.cloudinary.com/dbwupri3k/image/upload/v1718679848/PortfolioJA/IconsSkills/bfaxtmcl9iyuurrf2zbt.svg',
        skill: 'prisma',
      },
      {
        url: 'https://res.cloudinary.com/dbwupri3k/image/upload/v1718679677/PortfolioJA/IconsSkills/ycblmxtxdng8iqhobbih.svg',
        skill: 'PostgreSQL',
      },
    ],
    imageName:
      'https://res.cloudinary.com/dbwupri3k/image/upload/v1718679486/PortfolioJA/ImageProjects/kyqyewxo5yhmhzkvhzfk.jpg',
    description:
      'App desarrollada con Next js, cuenta con una base de datos y se realizado para mejorar la experiencia al momento de asignar los horarios de clases a los docentes.',
  },
  {
    title: 'Aplicación del clima',
    urlRepository: 'https://github.com/TJIGRIS/WEATHER-APP-MASTER-TJIGRIS.git',
    urlWeb: 'https://gleeful-salmiakki-5ff1cd.netlify.app/',
    sizeCard: true,
    skills: [
      {
        url: 'https://res.cloudinary.com/dbwupri3k/image/upload/v1701231522/PortfolioJA/IconsSkills/ufpy5r6l0lsu5izjj1xu.svg',
        skill: 'react',
      },
      {
        url: 'https://res.cloudinary.com/dbwupri3k/image/upload/v1701231522/PortfolioJA/IconsSkills/lzeyxmohh4plhwimeaod.svg',
        skill: 'tailwind',
      },
    ],
    imageName:
      'https://res.cloudinary.com/dbwupri3k/image/upload/v1701230671/PortfolioJA/ImageProjects/allvu6b9935bsghbw8pq.webp',
    description:
      'App en la que aplique todos los conceptos que tengo hasta el momento, uso de hooks como useReducer y useContext.',
  },
] */

import { projects as API } from '@services/projects'
import { CardProjects } from './CardProjects'
import { ButtonCardProjects } from './ButtonCardProjects'
import { useEffect, useState } from 'react'

export const ContainerProjects = () => {
  const [projects, setProjects] = useState(null)

  useEffect(() => {
    setProjects(API)
  }, [])

  if (projects === null)
    return (
      <div className='grid place-content-center text-lg py-10 text-P-title-primary'>
        <h3>Cargando proyectos...</h3>
      </div>
    )

  if (projects.length === 0)
    return (
      <div className='grid place-content-center text-lg py-10 text-P-title-primary'>
        <h3>No hay proyectos...</h3>
      </div>
    )

  return (
    <div className='flex flex-col gap-8 mt-4 mb-16'>
      {projects.map((item) => {
        if (item.sizeCard)
          return (
            <CardProjects
              key={item.urlRepository}
              {...item}
            />
          )
      })}

      <div className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8'>
        {projects.map((item) => {
          if (!item.sizeCard)
            return (
              <ButtonCardProjects
                key={item.urlRepository}
                {...item}
              />
            )
        })}
      </div>
    </div>
  )
}

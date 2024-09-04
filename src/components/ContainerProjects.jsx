import { projects as API } from '@services/projects'
import { CardProjects } from './CardProjects'
import { ButtonCardProjects } from './ButtonCardProjects'
import { useEffect, useState } from 'react'

export const ContainerProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(API)
  }, [])

  return (
    <div className='flex flex-col gap-8 mt-4 mb-16'>
      {projects?.map((item) => {
        if (item.sizeCard) {
          return (
            <CardProjects
              key={item.urlRepository}
              {...item}
            />
          )
        } else {
          return (
            <div
              className='grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-8'
              key={item.urlRepository}
            >
              <ButtonCardProjects {...item} />
            </div>
          )
        }
      })}
    </div>
  )
}

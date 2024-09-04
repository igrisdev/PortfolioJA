import { projects } from '@services/projects'
import { CardProjects } from './CardProjects'
import { ButtonCardProjects } from './ButtonCardProjects'

export const ContainerProjects = () => {
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

import { ButtonNameFloating } from './ButtonNameFloating'

export const ListIcons = ({ skills }) => {
  return (
    <div className='flex flex-row gap-2'>
      {skills.map((item) => (
        <ButtonNameFloating
          key={item.skill}
          message={item.skill.toUpperCase()}
          className={true}
        >
          <img
            className='w-7 h-7'
            src={item.url}
            alt={item.skill}
          />
        </ButtonNameFloating>
      ))}
    </div>
  )
}

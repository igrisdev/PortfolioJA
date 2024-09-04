export const ButtonCardProjects = ({
  title,
  description,
  skills,
  urlWeb,
  urlRepository,
}) => {
  return (
    <article className='shadow ring-[2px] hover:ring-4 ring-P-background-secondary flex flex-col justify-center px-6 pt-6 pb-3 rounded-lg transition-all duration-500 md:hover:-translate-y-2 relative group'>
      <a
        href={urlWeb}
        target='_blank'
      >
        <h2 className='text-P-subtitle-primary text-xl font-semibold'>
          {title}
        </h2>
        <p className='text-P-text-primary text-sm'>{description}</p>

        {/* <ListIcons skills={skills} /> */}
      </a>

      <div className='absolute top-4 right-4 text-xl opacity-0 text-P-title-primary group-hover:opacity-100 group-hover:animate-jump animate-duration-300 animate-ease-linear z-10'>
        {/* <RowIcon /> */}
      </div>

      <div className='absolute bottom-4 right-4 text-xl opacity-0 group-hover:opacity-100 group-hover:animate-jump animate-duration-300 animate-ease-linear z-10'>
        <a
          href={urlRepository}
          className='bg-P-background-tertiary text-P-text-secondary p-1 text-xs rounded-lg font-semibold z-10 hover:bg-P-background-secondary
      transition-all duration-200 dark:hover:text-P-title-primary'
          target='_blank'
        >
          Code
        </a>
      </div>
    </article>
  )
}

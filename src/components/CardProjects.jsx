export const CardProjects = ({
  title,
  description,
  imageName,
  skills,
  urlWeb,
  urlRepository,
}) => {
  console.log(title, description)
  return (
    <article class='grid grid-cols-1 md:grid-cols-2 gap-8 group'>
      <a
        href={urlWeb}
        target='_blank'
        class='w-full h-full max-h-[350px] md:h-56 bg-P-background-secondary rounded-lg overflow-hidden'
      >
        <picture>
          <img
            class='w-full h-full translate-x-8 translate-y-8 group-hover:translate-x-6 group-hover:translate-y-6 rounded-lg transition-all duration-500'
            src={imageName}
            alt={title}
          />
        </picture>
      </a>

      <section class='flex flex-col gap-2 justify-center'>
        <h2 class='text-P-subtitle-primary text-3xl font-semibold'>{title}</h2>
        <p class='text-P-text-primary text-sm'>{description}</p>

        {/* <ListIcons skills={skills} /> */}

        <div class='flex gap-3'>
          <a
            href={urlRepository}
            class='bg-P-background-tertiary text-P-text-secondary px-4 py-2 rounded-lg font-semibold'
            target='_blank'
          >
            Code
          </a>

          <a
            href={urlWeb}
            class='bg-P-background-tertiary text-P-text-secondary flex gap-2 hover:gap-5 transition-all duration-200 px-4 py-2 rounded-lg font-semibold group/link'
            target='_blank'
          >
            Live
            {/* <LinkIcon /> */}
          </a>
        </div>
      </section>
    </article>
  )
}

interface ListProps {
    id: number,
    title: string,
    img: string,
    text: string
}

export const List = (props: ListProps) => {
    return (
        <section id={'homelist' + props.id} className={`xs:block md:flex xs:gap-0 md:gap-8 mx-auto my-10 py-8 xs:w-full xs:px-10 md:w-5/6 md:px-0 xs:text-center md:text-start  ${props.id % 2 === 1 ? "flex-row" : "flex-row-reverse"}`}>
            <picture className="w-64 basis-2/6 xs:hidden md:block" >
                <img src={`${process.env.PUBLIC_URL}/images/${props.img}`} alt={`${props.title}`} />
            </picture>
            <article className='flex flex-col justify-center basis-4/6 xs:gap-0 md:gap-3 xs:w-full md:w-42 md:align-left  '>
                <h2 className='mb-6 text-center text-4xl font-semibold font-josefin bg-clip-text text-transparent bg-gradient-to-br from-[#ff8cc6] via-[#ffffff] to-[#15c4ff] drop-shadow-[0px_2px_2px_rgba(0,0,0,.55)]'>{props.title}</h2>
                <p className='text-xl'>{props.text}</p>
            </article>
        </section>
    )
}

interface ListProps {
    id: number,
    title: string,
    img: string,
    text: string
}

export const List = (props: ListProps) => {
    return (
        <section id={'homelist' + props.id} className={`flex xs:gap-0  md:gap-8  overflow-hidden mx-0 py-8 px-4 w-full  flex-row ${props.id % 2 === 1 ? "flex-row" : "flex-row-reverse"}`}>
            <picture className="w-64 xs:hidden md:block" >
                <img src={`${process.env.PUBLIC_URL}/images/${props.img}`} alt={`${props.title}`} />
            </picture>
            <article className='flex flex-col justify-center xs:gap-0 md:gap-3 xs:w-full md:w-42 md:align-left  '>
                <h2 className='text-gray-800 font-semibold text-center text-xl'>{props.title}</h2>
                <p className='txt-size-l'>{props.text}</p>
            </article>
        </section>
    )
}

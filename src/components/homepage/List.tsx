interface ListProps {
    id: number,
    title: string,
    img: string,
    text: string
}

export const List = (props: ListProps) => {
    return (
        <section id={'homelist' + props.id} className={`flex gap-8 overflow-hidden mx-0 py-8 px-4 w-full  flex-row ${props.id % 2 === 1 ? "flex-row" : "flex-row-reverse"}`}>
            <picture className="w-64" >
                <img src={props.img} alt="" />
            </picture>
            <article className='flex flex-col justify-center gap-3 list-content w-80 md:w-42 md:align-left mobile:flex-col '>
                <h2 className='text-gray-800 font-semibold text-center text-xl'>{props.title}</h2>
                <p className='txt-size-l'>{props.text}</p>
            </article>
        </section>
    )
}

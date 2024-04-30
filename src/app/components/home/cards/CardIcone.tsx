interface CardIconeProp {
    icon: JSX.Element
}


export default function CardIcone(prop: CardIconeProp) {
    return (
        <div className={`text-branco pr-2`}>
            {prop.icon}
        </div>
    )
}
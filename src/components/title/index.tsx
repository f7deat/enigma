type TitleProps = {
    text: string;
}

const Title: React.FC<TitleProps> = (props) => {
    return (
        <div className="text-xl font-bold mb-4">{props.text}</div>
    )
}

export default Title
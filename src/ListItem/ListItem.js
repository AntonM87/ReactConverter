export default function ListItem(props) {
    return (
        <li style={{
            }}>
                <p>{props.name} :</p>
                <p>{props.value.toFixed(1)}</p>
        </li>
    )
}
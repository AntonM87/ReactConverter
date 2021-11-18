export default function ListItem(props) {
    return (
        <div>
            <li style={{
                listStyle : 'none'
            }}>
                <p style={{
                    display: 'inline-block'
                }}>{props.name} :</p>
                <p style={{
                    display: 'inline-block'
                }}>{props.value.toFixed(1)}</p>
            </li>
        </div>
    )
}
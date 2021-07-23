
function Item(props) {
    return (
        <div>
            <img src={props.value.avatarUrl} alt="Avatar" />{props.value.name}
        </div>
    );
}

export default Item;

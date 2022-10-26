import Item from "./Item"

const List = ({listData}) => {
    console.log('listData',listData)
    return <div>
        {
            listData.map(Item => <Item key={Item.id} />)
        }
        <Item />
        <Item />
        <Item />
    </div>
}

export default List
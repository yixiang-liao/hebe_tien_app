import { useState } from 'react'
import Header from "./components/Header"
import Edit from "./components/Edit"
import List from "./components/List"
import './index.css'

const Home = () => {
    const [data , setData] = useState([1,2,3])

    return <div>
        <Header />
        <Edit />
        <List listData={data} />
    </div>
}

export default Home
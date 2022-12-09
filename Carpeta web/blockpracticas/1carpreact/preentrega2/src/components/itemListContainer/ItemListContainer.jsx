import { useState, useEffect } from "react"
//import CustomButton from "../custombutton/Custombutton"
import "./ItemListContainer.css"

import { products } from "../../productsMock"

import ItemList from "../itemList/ItemList"
import ItemCount from "../itemCount/ItemCount"

const ItemListContainer = () => {
  // FLAG o BANDERA

  const [items, setItems] = useState([])

  const [posts,setPosts] = useState([])

  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products)
      }, 2000)
    })

    task
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log("se rechazo")
      })

    console.log("se hizo la peticion")
  }, [])

useEffect( ()=>{
  const getPost= fetch("https://jsonplaceholder.typicode.com/todos")
   getPost
   .then( (res)=>res.json())
   .then((res)=> post = res)  
}, []   )




  return (
    <div className="light">
      <ItemCount initial={1} stock={7}/>
      <ItemList items={items} />
    </div>
  )
}

export default ItemListContainer

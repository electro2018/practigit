import { useState, useEffect } from "react"

import "./ItemListContainer.css"

import { products } from "../../productsMock"

import ItemList from "../itemList/ItemList"
import ItemCount from "../itemCount/ItemCount"

import {useParams} from "react-router-dom"
//import { useEffect } from "react"
const ItemListContainer = () => {
  // FLAG o BANDERA
//const parametros = useParams()
const { categoryName } = useParams()

console.log(categoryName)

  const [items, setItems] = useState([])
  const [posts, setPosts] = useState([])
  const [isCreated, setIsCreated] = useState(false)
  const [error, setError] = useState(null)
  const createPost = ()=>{
    fetch("https://jsonplaceholder.typicode.com/posts",{
      method:"POST",
      body:JSON.strigify({
      userId:2,
      title:"nuevo",
      body:"aca descripcion"
      }),
      headers:{
        "Content-type":"application/json",
      }
      
      })
.then (()=>setIsCreated(true))


    }
  useEffect(() => {

    const productosFiltered = products.filter( productos =>productos.category === categoryName)

    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve( categoryName ? productosFiltered : products  )
     }, 200)
    })

    task
      .then((res) => {
        setItems(res)
      })
      .catch((err) => {
        console.log("se rechazo")
      })

    console.log("se hizo la peticion")
  }, [categoryName ])

  useEffect(()=>{
   const getPost = fetch("https://jsonplaceholder.typicode.com/posts") 

getPost
.then ( (res)=>res.json())
.then(  (res)=> setPosts(res))
.catch(err=>setError(err))

  },[])

  return (
    <div className="light">
      <ItemCount initial={1} stock={7}/>
      <ItemList items={items} />
      <button onClick= {createPost}> Crear</button>
      <button  onClick={createPost} >Crear</button>

    </div>
  )
}

export default ItemListContainer
    /* <button onClick= {createPost}> Crear</button>
   //   <button  onClick={} >Crear</button>*/
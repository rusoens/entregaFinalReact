import { useEffect, useState } from 'react'
import React from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from 'firebase/firestore'
import { db } from '../../services/firebase/config'

const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([]);
    const {idCategoria}=useParams();

    useEffect(()=>{
      const misProductos=idCategoria?query(collection(db, "productos"), where("idCat", "==", idCategoria)):collection(db, "productos");

      getDocs(misProductos)
        .then(res=>{
            const nuevosProductos= res.docs.map(doc=>{
              const data=doc.data()
              return {id:doc.id, ...data}
            })
            setProductos(nuevosProductos);
        })
        .catch(error=>console.log(error))
    }, [])

    return (
    <div>
      <h2 style={{textAlign:"center"}}>{greeting}</h2>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer



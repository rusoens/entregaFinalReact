import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'
import './ItemDetailContainer.css'
import { db } from '../../services/firebase/config'
import { getDoc, doc } from 'firebase/firestore'

const ItemDetailContainer = () => {
    const[producto, setProducto]=useState(null);
    const {idItem}=useParams();

    useEffect(()=>{
      const nuevoDoc=doc(db, "productos", idItem);
      getDoc(nuevoDoc)
        .then(res=>{
          const data=res.data();
          const nuevoProducto={id: res.id, ...data};
          setProducto(nuevoProducto);
        })
        .catch(error=>console.log(error))
    },[idItem])



  return (
    <div className='listorti'>
      <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer


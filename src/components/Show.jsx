import { useState,useEffect } from "react";
import {Link} from "react-router-dom"
import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import {db} from "../firebaseConfig/firebase.js"

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const Show = ()=>{



const [products,setProducts] = useState([])



const productsColletion = collection (db,"dctoys")


const getProducts = async ()=>{
const data = await getDocs (productsColletion)
//console.log(data.docs)
setProducts(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
}





const deleteProduct  = async(id)=>{
const ProductDoc = doc(db,"dctoys",id) 
await deleteDoc (ProductDoc)
getProducts()
}



const confirmDelete=(id)=>{

    Swal.fire({
        title: 'Estas Segurola?',
        text: "Esto no se revierte!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si Quiero eliminarlo!'
      }).then((result) => {
        if (result.isConfirmed) {
            deleteProduct(id)  //llamamos a la funcion eliminar
          Swal.fire(
            'Borrado!',
            'tu producto fue borrado.',
            'success'
          )
        }
      })

}




useEffect(()=>{
    getProducts()
},[])






    
    return(


<div>
    <h1>Holaaaa</h1>
</div>


    )


}

export default Show
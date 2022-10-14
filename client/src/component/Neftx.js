import React, { useEffect } from 'react'
import '../App.css';
import { useState } from 'react';
import axios from 'axios'
const Neftx = () => {
    const [data,setData]=useState()
    const [recipe,setRecipe]=useState()
    const [filter,setFilter]=useState(false)
    useEffect(()=>{
        axios.get("http://localhost:3002/home").then((data)=>{
            // console.log(data.data)   
            setData(data.data) 
        }).catch((err)=>console.log(err))
    },[])
    const handleSort=(recipe)=>{
      setFilter(true)
      setRecipe(recipe)
      data.sort(function(a,b){
        if(a[recipe]>b[recipe]){
          return 1
        }
        if(b[recipe]>a[recipe]){
return -1
        }
        return 0
      })
      
    }
  return (
    <div className="App">

    <div id='recipesDropdown'>
     <h1> Neftx Store</h1>
     <p>Select One to know the best offer</p>
      <ul>
        Recipes
         <li onClick={()=>handleSort('Recipe1')}>
        Reciepe 1
      </li>
      <li onClick={()=>handleSort("Recipe2")}>
        Reciepe 2
      </li>
      <li onClick={()=>handleSort("Recipe3")}>
        Reciepe 3
      </li>
      <li onClick={()=>handleSort("Recipe4")}>
        Reciepe 4
      </li>
      <li onClick={()=>handleSort("Recipe5")}>
        Reciepe 5
      </li>
    </ul>
    </div>

{data &&
    <div id="Stores">
        {
            data.map((item,i)=>{
              if(filter===true && i>0){
                  return
              }
                return(
                  <div className="store" key={i}>
                  <p className='storeName'>{item.store}</p>
                  <div className='list-recipe'>
                      <img className='image' alt="" src="Recipe1.png"/>
                      <p>Price:{item.Recipe1}</p>
                      </div>
                  <div className='list-recipe'>
                      <img className='image' alt="" src="Recipe2.jpg"/>
                      <p>Price:{item.Recipe2}</p>
                      </div>
                  <div className='list-recipe'>
                      <img className='image' alt="" src="Recipe3.jpg"/>
                      <p>Price:{item.Recipe3}</p>
                      </div>
                  <div className='list-recipe'>
                      <img className='image' alt="" src="Recipe4.jpg"/>
                      <p>Price:{item.Recipe4}</p>
                      </div>
                  <div className='list-recipe'>
                      <img className='image' alt="" src="Recipe5.jpg"/>
                      <p>Price:{item.Recipe5}</p>
                      </div>
                </div>)
            })
        }
 
  </div>
   }
   <button onClick={()=>setFilter(false)}>All Reciepe</button>
  </div>
  )
}

export default Neftx
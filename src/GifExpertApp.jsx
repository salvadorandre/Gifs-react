import { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";


const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([])

    const onAddCategory = ( newCategory) => {

        
        if( categories.includes(newCategory)) return 


        setCategories([newCategory,...categories])
    }
    return (
        <>
            <h1>Gifs</h1>


            {/**Input */}

            <AddCategory 
                //setCategories={setCategories}
                onNewCategory={ event =>  onAddCategory(event)}
                currentCategory={ categories }
            />

            {/**Listado de Gif 
             *  Gif Item
            */
            }
            {categories.map( category => 
                    (
                        <GifGrid key={category} category={category}/>
                    )
            )}

          
        </>
    )
}

export default GifExpertApp; 
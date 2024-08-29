import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import GifItem from "./GifItem";

const GifGrid = ({ category }) => {

    const [images, setImages] = useState([])

    useEffect(() => {

        getGifs(category)
        
            .then(newImages => setImages(newImages))
    }, []);


    return (
        <>

            <h3>{category}</h3>

            <div className="card-grid">
                {images.map(({ url, title, id }) => {
                    return (<GifItem 
                        key={ id }
                        title={title}
                        url={url}
                    />)
                })}
            </div>

            <ol>

            </ol>
        </>
    )
}
export default GifGrid; 
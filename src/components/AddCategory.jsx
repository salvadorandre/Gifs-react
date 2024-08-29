import { useState } from "react"

const AddCategory = ({ onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')


    const onInputChange = (event) => { 
        
        setInputValue(event.target.value)
    }

    const onSubmit = (event) => { 
        event.preventDefault()
        
        if(inputValue.trim().length <= 1) { 
            return 
        }
        

        onNewCategory(inputValue)

        setInputValue('')
        
    }
    return (
        <>
            <form onSubmit={onSubmit}>
                <input onChange={onInputChange} type="text" placeholder="Search Gifs" value={inputValue}/>
            </form>
        </>
    )
}


export default AddCategory
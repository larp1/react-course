import { FaDownload } from "react-icons/fa6";

export function Posts()
{
    return <button onClick={()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json()).
        then(json => console.log(json))
        .catch(error => console.error(error))
    }}>
    <FaDownload />
    Pedir datos ajax    
    </button>
}
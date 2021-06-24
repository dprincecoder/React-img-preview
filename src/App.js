import "./styles.css";
import { useState, useEffect} from "react";


export default function App() {
  const [file, setFile] = useState();
  const [preview, setPreview] = useState()

  useEffect(() => {
    if (file) {
    const readFile = new FileReader();
     readFile.onloadend = () => {
    setPreview(readFile.result)
     }
     readFile.readAsDataURL(file)
    } else setPreview(null)
    }, [file])

  return (
    <div className="App">
      <h1>Image preview in ReactJs </h1>
      <form> 
        {preview ? 
        <>
        <div className="image"> 
        <img src={preview} alt="user-image"/>
        </div> 
        </> : <>
        <button onClick={e => {
          e.preventDefault()
         const pick = document.getElementById("pick-image")
         pick.click()
        }}> Choose image </button>
       <input type="file" id="pick-image" hidden={true}
        onChange={e => {
          const oneImage = e.target.files[0]
          if (oneImage && oneImage.type.substr(0,5) === "image") {
            setFile(oneImage)
          } else setFile(null);
        }}
      /> 
      </> }
      </form>
    </div>
 )
}
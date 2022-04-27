import { useState } from "react";

  
export default  function Login () {
    const [name, setName] = useState("");
    const [result, setResult] = useState("");
  
    const handleChange = (e) => {
        setName(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();

        const formData = new FormData(this) ;
        formData.append('name',name)
        
        
        // Envoie vers le Serveur PHP du dossier server.PHP
       fetch('http://localhost:8888/Tentative3/my-app/PHP/server.php',
       {
           method : 'post' ,
           body : formData ,
       })
        .then((response)=>{
            return response.text() ;
        }) 
        .then((text)=>{
            setResult(text)
            console.log(text ) ;
        })
        .catch( (err)=>{
            console.log(err)

        })
    } 
  
    return (
        <div >
            <form
                
                onSubmit={(event) => handleSumbit(event)}
            >
                <label htmlFor="name">Name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChange(event)}
                />
                <br />
                <button type="submit">Submit</button>
            </form>
            <h1>{result}</h1>
        </div>
    );
}


import { useState } from "react";

  
export default  function Datas () {
    const [name, setName] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [result, setResult] = useState([]);

    let tab = [] ;
  
    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleChangeContent = (e) => {
        setContent(e.target.value);
    };
  
    const handleSumbit = (e) => {
        e.preventDefault();
        const formData = new FormData(this) ;
        formData.append('name',name) ;
        formData.append('title',title)
        formData.append('content',content)

    
        
        
        // Envoie vers le Serveur PHP du dossier server.PHP
       fetch('http://localhost:8000/server.php',
       {
           method : 'POST' ,
           body : formData ,
       })
        .then((response)=>{
            return response.json() ;
        }) 
        .then((resp)=>{
            console.log(resp) ;
            // Je récupère mon tableau d'objet. Je met ses objets dans un tableau autre que je met à la place de result.
            for ( let keys of resp){
                console.log(keys);
                tab.push(keys)
                setResult(tab)
            }
        })
        .catch((err)=>{
            console.log(err)

        })
        setName('');
        setTitle('');
        setContent('')



    } 
    const info = result.map((elem) =>
  <div key={elem.id}>
    <div>
        <h3>{elem.title}</h3>
        <h4>Par : {elem.users_name}</h4>
        <p> MOMA</p>
    </div>
    <div>
        <p>{elem.content}</p>
    </div>
  
  </div>
);
  
    return (
        
        <div >
            <form
                
                onSubmit={(event) => handleSumbit(event)}
            >
                <div>
                <label htmlFor="name"> Nom de l'auteur : </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(event) => handleChangeName(event)}
                />
                

                </div>
                <div>
                <label htmlFor="title">Titre : </label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(event) => handleChangeTitle(event)}
                />

                </div>


                <div>
                <label htmlFor="content"> Contenu: </label>
                <input
                    type="textarea"
                    id="content"
                    name="content"
                    value={content}
                    onChange={(event) => handleChangeContent(event)}
                />

                </div>
                
                <br />
                <button type="submit">Submit</button>
            </form>
            <div>
            {info}
            </div>
              
        </div>
    );
}


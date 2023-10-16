import React, { useEffect } from "react"
import { useState } from "react"
import axios from 'axios';

export default function Episodios({ episode }) {

const [episodio, setEpisodio] = useState()

    useEffect(() => {
        const fetchData = async () => {
          const results = [];
    
          for (const url of episode) {
            try {
              const response = await axios.get(url);
              results.push(response.data);
            } catch (error) {
              console.error(`Erro ao buscar ${url}: ${error}`);
            }
          }
    
          setEpisodio(results)
          
        };
    
        fetchData();
      }, [episode]);

      
    return (
        <div  style={{ maxHeight: '400px', overflowY: 'auto' }}>
          {episodio && episodio.map((item, index) => (
                <div key={index} className="divEpisodios">
                    <p className="numeroEpisodio">Numero : {item.episode}</p>
                    <p className="tituloEpisodio">Titulo : {item.name}</p>
                </div>
            ))}
        </div>
    )
}
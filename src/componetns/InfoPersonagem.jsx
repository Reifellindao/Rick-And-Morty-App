import Episodios from "./Episodios"

export default function InfoPersonagem({ data }) {
    return (
        <>
            <h1>Detalhes do Personagem</h1>
            {data && <img src={data.image} className='imageInfo' />}
            <div style={{ marginLeft: 20 }}>
                {data && <p>Nome: {data.name} </p>}
                {data && <p>Status: {data.status}</p>}
                {data && <p>Spécie: {data.species}</p>}
            </div>
            <h2 style={{ marginLeft: 20 }}>Episódios:</h2>
            {data && <Episodios episode={data.episode}/>}
        </>
    )
}
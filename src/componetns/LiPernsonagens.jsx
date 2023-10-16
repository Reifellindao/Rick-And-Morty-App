import './../App.css'

export default function LiPersonagens({ data, selecionarId }) {

    return (
        <div >
            <ul style={{ maxHeight: '820px', overflowY: 'auto' }}>
                {data.map((item, index) => (
                    <li
                        className='personagens'
                        key={index}
                        onClick={() => selecionarId(item.id)}
                    >
                        <img
                            src={item.image}
                            className='imagem'
                        />
                        <p className='nomelista'>{item.name}</p>
                    </li>
                ))}

            </ul>
        </div>
    )
}
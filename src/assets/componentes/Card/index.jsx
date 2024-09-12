import "./styles.css"
import Code from './assets/code.svg'
import Share from './assets/share.svg'
import Chat from './assets/chat.svg'

export default function Card({id, imagemUrl, titulo, resumo, linhasDeCodigo, compartilhamentos, comentarios, usuario}){
    return(
        <article className="card">
            <div className="card__img">
                <img src={imagemUrl} alt="imagem do post"/>
            </div>

            <div className="card__conteudo">

                <div className="conteudo__texto">
                    <h3>{titulo}</h3>
                    <p>{resumo}</p>
                </div>

<div className="conteudo__rodape">
    <ul>
        <li>
            <img src={Code} alt="Códigos"/>
            {linhasDeCodigo}
        </li>

        <li>
            <img src={Share} alt="Compartilhamento"/>
            {compartilhamentos}
        </li>

        <li>
            <img src={Chat} alt="Comentários"/>
            {comentarios}
        </li>
    </ul>

<div className="rodape__usuario">
    <img src={usuario.imagem} alt="Foto de usuário"/>
    {usuario.nome}
</div>
</div>
            </div>
        </article>
    )
}
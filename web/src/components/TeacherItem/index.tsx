import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'


function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://media-exp1.licdn.com/dms/image/C4E03AQH3kv-QgElQgg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=pkXyRbhthiRUPFOYVSp4iMxOvIFWJeaMzV2OscBqT9g" alt="Lucas Brandi"/>
                <div>
                    <strong>Lucas Brandi</strong>
                    <span>Programação</span>
                </div>
            </header>

            <p>
                Entusiasta das melhores tecnologias de engenharia de dados.
                <br /><br />
                Sempre buscando trazer mais um pouco de conhecimento para alguém.
            </p>

            <footer>
                <p>
                    Preço/Hora
                    <strong>R$ 80,00</strong>                            
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;
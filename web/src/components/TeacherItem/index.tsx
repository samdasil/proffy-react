import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {

    return (

        <article className="teacher-item">

            <header>

                <img src="https://avatars2.githubusercontent.com/u/32578116?s=460&u=a337889d46e79384f14827246396f544f057ab5f&v=4" alt="Avatar"/>

                <div>
                    <strong>Sammy Melo</strong>
                    <span>Química</span>

                    <p>

                    </p>
                </div>

            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br/><br/>
                Apaixonado por explodir coisas no laboratório e por mudar a vida das pessoas através de experiências.
            </p>

            <footer>

                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>

            </footer>

        </article>

    );

}

export default TeacherItem;
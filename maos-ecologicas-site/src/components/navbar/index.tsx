import { use, useState } from 'react';
import '../../styles/global.css';
import style from './style.module.css';


const Navbar = () => {

    const[open, setOpen] = useState(false);

    const links = [
        { name: "Quem Somos", href: "#quemsomos" },
        { name: "Diferenciais", href: "#diferenciais" },
        { name: "Galeria", href: "#galeria" },
        { name: "Eventos", href: "#eventos" },
    ];

  return (
    <>

    <div className={style.header}>
        <div className={style.header_nav}>

            <img src="src/assets/img/fgr.png" alt="logo" />

            <div onClick={()=>{setOpen(!open)}} className={`${style.hamburguer} ${open ? style.hamburguer_open : ''}`}>
                <span></span>
                <span></span>
                <span></span>
            </div>
          
            <ul className={`${style.header_nav__menu} ${open ? style.open : ''}`}>
             {links.map((item, index) => (
                <li key={index}>
                    <a href={item.href}>{item.name}</a>  
                </li>
             ))}
             <li className={style.btnMobile}>
                <button>Comunidade</button>
             </li>
            </ul>

            <button className={style.btnDesktop}>Comunidade</button>
        </div>

    </div>

    </>
  )
}

export default Navbar
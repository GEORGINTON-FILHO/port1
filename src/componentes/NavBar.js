import { useState, useEffect } from "react";
import { NavBar, Container, Nav } from "react-bootstrap";
import logo from '../materiais/img/logo.png';
import nav1 from '../materiais/img/nav1.png';
import nav2 from '../materiais/img/nav2.png';
import nav3 from '../materiais/img/nav3.png';

export const NavBar = () => {
    const{activeLink, setActiveLink} = useState('home');
    const{scrolled, seScrolled} = useState(false);
     
    useEffect(() => {
      const onScroll = () =>{
        if(window.scrollY > 50){
          seScrolled(true);
        } else{
          seScrolled(false);
        }
      }

      windows.addEventListener("scroll", onScroll);

      return() => window.removeEventListener("scroll", onScroLl);

    },[])
    const onUUpdateActiveLink = (value) => {
      setActiveLink(value);
    }
    return(
     <NavBar expand="lg" className={scrolled ? "scrolled" : "" } >
       <Container>
           <NavBar.Brand href="#home">
             <img scr={logo} alt="Logo" />
           </NavBar.Brand>
           <NavBar.Toggle aria-controls="basic-navbar-nav">
             <span className="navbar-toggler-icon"></span>
           </NavBar.Toggle>
           <NavBar.Collapse id="basic-navbar-nav">
             <Nav classname='me-auto'>
             <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link' : "navbar-link"  } onClick={('') = onUUpdateActiveLink('home')}>Home</Nav.Link>
             <Nav.Link href="#habilidades" className={activeLink === 'habilidades'? 'active navbar-link' : "navbar-link" } onClick={('') = onUUpdateActiveLink('habilidades')} >Habilidades</Nav.Link>
             <Nav.Link href="#projetos"className={activeLink === 'projetos'? 'active navbar-link' : "navbar-link" } onClick={('') = onUUpdateActiveLink('Projetos')}>Projetos</Nav.Link>
             </Nav>
             <span className="navbar-text">
               <div className="social-icon">
                 <a HREF="#">< img src={nav1} alt="logo-inst" /></a>
                 <a HREF="#">< img src={nav2} alt="logo-git" /></a>
                 <a HREF="#">< img src={nav3} alt="logo-linked" /></a>
               </div>
               <button className="vvd" onClick={() => console.log("connect")}><span>Fale Comigo</span></button>
              </span> 
         </NavBar.Collapse>
       </Container>
    </NavBar>
 )
}
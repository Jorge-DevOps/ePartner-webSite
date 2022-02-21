import React from 'react'
import nosotros from "../assets/images/nosotros/banner-nosotros-desk.png"
import { Cards, ContactForm } from "../components";
import CardNosotros1 from "../assets/images/nosotros/nosotrosMobile.png";
import "../styles/sass/pages/Nosotros.sass";
import logorecamier from '../assets/images/ePartner/clientes/logo/recamier-logo-blanco.png';
import logoarturocalle from '../assets/images/ePartner/clientes/logo/arturocalle-logo-blanco.png';
import logolerner from '../assets/images/ePartner/clientes/logo/librerialerner-logo-blanco.png';
import empleado  from '../assets/images/nosotros/empleado.png';

const Nosotros = () => {
  return (
    <div> 
      <div> 
      <img src={nosotros} alt=''className='imagennosotros'/>
      </div>
      <Cards
        title="EPARTNER"
        subtitle="NOSOTROS"
        description="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,"
        subdescription="Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,"
        modifier="fourth"
        image={CardNosotros1}
      /> 
      <section className="features" id="features">

    <div className="box-container">

        <div className="box">
             <p className="subtitulo">Nosotros</p>
            <h3 className="titulonosotros">Nuestra historia</h3>
            <p className="textonosotros">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,</p>
        </div>

    </div>
    
    
</section>

<section className="marcas">
                <div className="marcascontainer">
                <div className="marcas__columna">
                        <img src={logorecamier} alt=""  className="marcas__img" />
                        
                    </div>
                <div className="marcas__columna">
                        <img src={logolerner} alt=""  className="marcas__img" />
                        
                    </div>
                <div className="marcas__columna">
                        <img src={logoarturocalle} alt=""  className="marcas__img" />
                        
                    </div>
                </div>
</section>

      <section className="container-equipo">
         <p className="subtitulo"> Epartner</p>
        <h1 className="heading"> Nuestro Equipo</h1>
        <h4 className="textopartners">Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años,</h4>
          <div className="profiles">
            <div className="profile">
        <img src={empleado} className="profile-img" />

        <h3 className="user-name">Nombre Completo</h3>
        <h5 className="textocargo">Cargo que desempeña</h5>
      </div>
      <div className="profile">
        <img src={empleado} className="profile-img" />

        <h3 className="user-name">Nombre Completo</h3>
        <h5 className="textocargo">Cargo que desempeña</h5>
      </div>
      <div className="profile">
        <img src={empleado} className="profile-img" />

        <h3 className="user-name">Nombre Completo</h3>
        <h5 className="textocargo">Cargo que desempeña</h5>
      </div>
      <div className="profile">
        <img src={empleado} class="profile-img" />

        <h3 className="user-name">Nombre Completo</h3>
        <h5 className="textocargo">Cargo que desempeña</h5>
      </div>
    </div>
  </section>
  <br/>

      <section className="extraFooter">
        <ContactForm />
      </section>
    </div>
  )
}

export { Nosotros }
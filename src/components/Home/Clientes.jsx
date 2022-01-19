import React from 'react'
import {ClientesCard} from '../../components'
import "../../styles/sass/components/Clientes.sass";


const Clientes = () => {
  return (
    <section className="section-clients">
      <ClientesCard/>
    </section>
  )
}

export { Clientes }
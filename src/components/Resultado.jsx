import styled from "@emotion/styled"


const Contenedor = styled.div`
color: #fff;
font-family: 'lato', sans-serif;
display: flex;
align-items:center;
gap: 1rem;
margin-top: 30px;








`
const Texto = styled.p`
font-size: 18px;



span{
    font-weight:700;
}
`

const Imagen = styled.img`
display:block;
width: 120px;


`
const Precio = styled.p`
font-size: 24px;


span{

    font-weight:700;
}

`

const Resultado = ({ resultado }) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24, IMAGEURL, LASTUPDATE } = resultado
    return (
        <Contenedor>
            <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt="IMAGEN CRIPTO" />
            
            <div>
                            <Precio>El Precio es de: <span>{ PRICE}</span></Precio>
            <Texto>El Precio más alto del día: <span>{ HIGHDAY}</span></Texto>
            <Texto>El Precio más bajo del día: <span>{ LOWDAY}</span></Texto>
            <Texto>Variacion últimas 24 horas: <span>{ CHANGEPCT24}</span></Texto>
            <Texto>Ultima actualizacion: <span>{ LASTUPDATE}</span></Texto>
            </div>
            


      </Contenedor>
  )
}

export default Resultado
import styled from "@emotion/styled"

const Texto = styled.div`

background-color: #b7322c;
color: #ffff;
padding: 15px;
font-size: 16px; 
text-transform: uppercase;
font-family: 'lato', sans-serif;
font-weight:700;
text-align: center;
margin-top:20px;
border-radius: 5px;


`
const Error = ({children}) => {
  return (
      <Texto>{children}</Texto>
  )
}

export default Error
import styled from 'styled-components'

const Button = styled.button`
width:100%;
font: inherit;
padding: 0.5rem 1.5rem;
border: 1px solid #3b0542;
color: white;
background: #3b0542;
box-shadow: 00 4px rgba(0,0,0,0.26);
cursor: pointer;
@media(min-width: 768px) {
    width:auto;
}
&:focus{
    outline:none;
}
&:hover,
&:active {
  background: #cfc0d1;
  border-color: #3b0542;
  color: #3b0542;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
}
`;

export default Button;
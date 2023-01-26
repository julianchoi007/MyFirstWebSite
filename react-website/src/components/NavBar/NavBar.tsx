import React from 'react'; // we need this to make JSX compile

type NavBar = {
  title: string
}

const Card = ({ title}: NavBar) => (<>
  <h2>{ title }</h2>
</>)

export default Card;
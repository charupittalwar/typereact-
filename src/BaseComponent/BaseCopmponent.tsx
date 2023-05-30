import React from "react";

import './BaseComponent.scss'

const BaseComponent:React.FC <

{

    title:string,

    name :string
}

> = (props) =>{

const {title ,name } = props ;

//let title:string = "Base componnent";

return (

<div className="title">

  <p>  {title} {name} </p>


</div>

)


}

export default BaseComponent ;
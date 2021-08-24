import React from "react";

function Header({title, description}) {

    const saludo = "Hola";

    return (
        <div>
            <h2 className = "header">{saludo} Header</h2>
            <h3>{title}</h3>
            <h4>{description}</h4>
        </div>
    )
}

export default Header;
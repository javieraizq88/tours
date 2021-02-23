import React, { useState } from 'react';

const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
           {/* si el valor del state es readMore q por defail es false
        en el parrafo, en vez de agregar toda la info, dice:
        si el readMore es true, va a mostrar toda la info
        si el readMore es false, va a mostrar la info con el metodo de mostrar solo 200 caracteres */}
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {/* !readMore devuelve el valor contrario, es decir cuando haga el primer click, el valor va a ser false, el siguiente click lo devuelve a true y se despliega toda la info */}
            {readMore ? 'show less' : 'read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};
export default Tour;

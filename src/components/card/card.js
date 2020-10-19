import React from 'react';
import './card.css'

const Card = ({data}) => {
    return (
        <div className="container">
            <h1>#{data.id} {data.species.name}</h1>

            <img src={data.sprites["front_default"]} alt={data.species.name}/>
            <div className="divTable">
              <div className="divTableBody">
                <div className="divTableRow">
                  <div className="divTableCell">Type</div>
                  <div className="divTableCell">{data.types[0].type.name}</div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Height</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.height * 3.9)}"
                  </div>
                </div>
                <div className="divTableRow">
                  <div className="divTableCell">Weight</div>
                  <div className="divTableCell">
                    {" "}
                    {Math.round(data.weight / 4.3)} lbs
                  </div>
                </div>                
              </div>
            </div>
          </div>
    );
};

export default Card;
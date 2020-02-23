import React, { Component } from 'react';
import images from '../../picture/images';

class customized extends Component {
  
  render() {
    return (
      <div>
        <section>
          <div className="cardBlock margin-top-20">
            <ul className="cardImages">
              {images.map(({id, src, title, description}) =>
                <li className="cardImage col-xl-3 col-lg-4 col-md-6 col-sm-12">
                  <div className="img">
                    <img className="handMadeImage" key={id} src={src} title={title} alt={description} /> 
                  </div>
                </li>
              )}
            </ul>
          </div>
        </section>
      </div>
    );
  }
}

export default customized;

import React, { Component } from 'react';
import './categories.css';
import handmade from '../../picture/handmade';
import CategoriesLinks from './categoriesLinks';

class Handmade extends Component {
  
  render() {
    let { addToCartReducer } = this.props
    return (
      <div>
        <div className="wrapper margin-top-20">
          <div className="col-2">
            <CategoriesLinks />
          </div>

          <div className="categories col-10">
            <div className="categories-row">
              {handmade.map(({id, src, title, description,NTdollar}) =>
                <div className="card-block col-12 col-md-6 col-xl-4 margin-bottom-15" key={id}>
                  <div className="card">
                    <img className="card-img" src={src} title={title} alt={description} /> 
                    <div className="card-body">
                      <div>{title}</div>
                      <div>{description}</div>
                    </div>
                    <div className="card-footer">
                      <div>NT {NTdollar} </div>
                    </div>
                    <button type="button" className="btn btn-info" onToggle={this.toggle} onClick={()=>addToCartReducer({
                        id, src, title, description,NTdollar
                      })}>
                      加入購物車
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Handmade;

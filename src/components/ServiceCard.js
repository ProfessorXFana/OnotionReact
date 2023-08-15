import React from 'react'
import { NavLink } from 'react-router-dom'

export const ServiceCard = (props) => {
  return (
    <>
          <div className='col-md-4 col-10 mx-auto'>
          <div className="card" >
            <div className='mt-5 mb-5 d-flex justify-content-center'>
  <img src={props.imgsrc} className="card-img-top" alt="..."/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{props.subTitle}</p>
    <NavLink href="#" className="btn btn-primary">Explore More</NavLink>
  </div>
</div>
          </div>




    </>
    )
}
export default ServiceCard
import React from 'react'
import ServiceCard from './ServiceCard'
import Sdata from './Sdata'


export const Service = () => {
  return (
    <>
    <div className='my-5'>
      <h1 className='text-center'>Services</h1>
      </div>
      <div className='container-fluid mb-5'>
        <div className='row'>
          <div className='col-10 mx-auto'>
          <div className='row gy-4'>
          {
      Sdata.map((val, ind) => {
        return <ServiceCard
          imgsrc={val.imgsrc} title={val.title} subTitle={val.subTitle} />
      })
           }
          </div>
        </div>
      </div>
      </div>
    </>
    )
}
export default Service
import React from 'react'

const Rating = ({value}) => {
  return (
    <div className="text-yellow-400 text-lg flex items-center">  
        {/* <span className="text-xl text-black font-bold">Stars</span> */}
        <i className={value >=1 ? "fa fa-star" : value >= 0.5 ? "fa fa-star-half" : "fa fa-star"}></i>
        <i className={value >=2 ? "fa fa-star" : value >= 1.5 ? "fa fa-star-half" : "fa fa-star"}></i>
        <i className={value >=3 ? "fa fa-star" : value >= 2.5 ? "fa fa-star-half" : "fa fa-star"}></i>
        <i className={value >=4 ? "fa fa-star" : value >= 3.5 ? "fa fa-star-half" : "fa fa-star"}></i>
        <i className={value >=5 ? "fa fa-star" : value >= 4.5 ? "fa fa-star-half" : "fa fa-star"}></i>
    </div>
  )
}

export default Rating
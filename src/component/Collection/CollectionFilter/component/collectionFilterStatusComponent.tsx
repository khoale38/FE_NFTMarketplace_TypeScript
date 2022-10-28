import React from 'react'
interface FilterStatusComponent{
    name:string;
}

const collectionFilterStatusComponent:React.FC<FilterStatusComponent> = (props:FilterStatusComponent) => {
  return (
    <div className="form-check ms-1">
    <input
      className="form-check-input "
      type="checkbox"
      value=""
      id="flexCheckDefault"
    />
    <label className="form-check-label filter-item" htmlFor="flexCheckDefault">
      {props.name}
    </label>
  </div>
  )
}

export default collectionFilterStatusComponent
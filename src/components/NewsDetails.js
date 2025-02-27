import React, { Component } from 'react'

export default class NewsDetails extends Component {
  render() {
    let {title,description,imgurl,link}=this.props;
    return (
      <>
       <div className="row">
        <div className="">
        <div className="card">
  <img src={imgurl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}<b>...</b></p>
    <a  href={link} className="btn  btn-sm btn-dark">Details</a>
  </div>
</div>
</div>
</div>

      </>
    )
  }
}

import React,{Component} from 'react'

class ListItem extends Component{
    render(){
        const {image, name,email,address} = this.props.user
        return(
        <div className="card" style={{marginBottom:'50px'}}>
            <img className="card-img-top" src={image} alt={name} height='150px'  />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{address}</p>
                    <a href={"mailto:"+email} className="btn btn-primary">{email}</a>
                </div>
        </div>
        );
    }
}

export default ListItem
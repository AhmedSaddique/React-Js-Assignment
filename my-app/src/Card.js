

function Card(props){
    return(
        <div className="">
            <div className="card">
                <div className="card-img">
                    <img className="img-size" src={props.img}/>
                </div>
                <div className="card-title">
                    <p>{props.title}</p>
                </div>
                <div className="card-description">
                    <p>{props.des}</p>
                </div>
                <div className="btn-center">
                <button className="btn">Submit</button>
                </div>
            </div>
  
        </div>
    );
}
export default Card;
import "./Main.css"

const Main = (props) => {

     const {img,title,desc}= props;
  return (
    <div className="main" >   
    <div className="card">
     <img src={img} alt="" width={200}/>
    </div>
     
    </div>
  )
}

export default Main
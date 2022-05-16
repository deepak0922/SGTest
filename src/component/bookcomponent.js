import 'bookcomponent.css';

function Books(props)
{
    return (
        <div class="card">
        <img src={props.img} alt="Avatar" style="width:100%"/>
        <div class="container">
          <h4><b>{props.name}</b></h4>
          <p>{props.author}</p>
          <p>{props.releasedate}</p>
          <p>{props.isbn}</p>
        </div>
      </div> 
    );
}

export default Books;
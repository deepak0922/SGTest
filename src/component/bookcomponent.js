import 'bookcomponent.css';

function Books(props)
{
    return (
        <div class="card">
        <img src="{props.img}" alt="Avatar" style="width:100%"/>
        <div class="container">
          <h4><b>John Doe</b></h4>
          <p>Architect & Engineer</p>
        </div>
      </div> 
    );
}

export default Books;
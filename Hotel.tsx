
interface Hotel {

    id: number;
    name: string;
    image: string;
    description: string;
    hotelProfile: string;


}


function Hotel(props: Hotel) {

    return (

        < div className="card">

            <img src={props.image} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <a href={props.hotelProfile} className="btn btn-primary" target='_blank'>Go somewhere</a>
            </div>
        </div >

    )
}

export default Hotel

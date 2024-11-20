import { Link } from "react-router-dom";

const Adventure = ({adventure}) => {
    const{id,adventureTitle,image,ecoFriendlyFeatures}=adventure;
    return (
    
      <Link to={`/adventures/${id}`}>
        <div>
            
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure className="h-[166px] w-[64px]rounded my-3">
    <img
      src={image}
      alt="Adventures" />
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold text-black">
      Title:
      {adventureTitle}</h2>
      {
        ecoFriendlyFeatures.map(item=><li>{item}</li>)
      }
   
    <div className="card-actions justify-end">
     <button className="btn bg-green-400">Explore Now</button>
    </div>
  </div>
</div>



        </div>
      </Link>
    );
};

export default Adventure;
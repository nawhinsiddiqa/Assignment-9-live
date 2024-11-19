

const Adventure = ({adventure}) => {
    const{adventureTitle,image,ecoFriendlyFeatures}=adventure;
    return (
    
        <div>
            
            <div className="card card-compact bg-base-100 w-96 shadow-xl">
  <figure className="h-[166px] w-[64px]rounded my-3">
    <img
      src={image}
      alt="Adventures" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Title:
      {adventureTitle}</h2>
   
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Explore Now</button>
    </div>
  </div>
</div>



        </div>
    );
};

export default Adventure;


const Banner = () => {
    return (
        <div className="w-7/12 mx-auto my-8">
          <h1 className="text-4xl font-bold w-6/12 mx-auto my-5">The Roaming Routes</h1>
          <p className="my-5">Eco-adventure experiences combine the thrill of exploring natural landscapes with a commitment to sustainability and conservation. These types of adventures are crafted to minimize environmental impact while immersing participants in the beauty and diversity of our planet’s ecosystems</p>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVkfaiQUPYO0OWCzXuqBDWqHhXDpfPRTiRPw&s"

      className="w-[1020px] h-[300px]" />
  </div>
  <div id="item2" className="carousel-item w-full">
    <img
      src="https://www.pipeaway.com/wp-content/uploads/2023/07/backpacking-swiss-alps-photo-by-janis-fasel-unsplash.jpg"
      className="w-[1020px] h-[300px]" />
  </div>
  <div id="item3" className="carousel-item w-full">
    <img
      src="https://plus.unsplash.com/premium_photo-1694743671375-ace436b4d797?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZHJlYW18ZW58MHx8MHx8fDA%3D"

      className="w-[1020px] h-[300px]" />
  </div>
  
</div>
<div className="flex w-full justify-center gap-2 py-2">
  <a href="#item1" className="btn btn-xs">1</a>
  <a href="#item2" className="btn btn-xs">2</a>
  <a href="#item3" className="btn btn-xs">3</a>

</div>
            
        </div>
    );
};

export default Banner;
import img1 from '../assets/page1-img3.jpg'
import { useNavigate } from 'react-router-dom';
const HomePage1 = () => {
    const navigate=useNavigate()

  const handle=()=>{
    navigate('/service')
  }
  return (
    <div>
      <h1 className='text-center m-7 text-3xl font-bold text-blue-500 mt-5 p-4'>Our Service section</h1>
      <div className='flex w-9/12 mx-auto gap-7'>
        <img className="rounded-xl" src={img1}></img>
        <p className="mb-8">
          <span className='text-2xl font-bold'> Our Services</span><p></p>

          We provides international standard custom made ocular prosthesis,orbital prosthesis,<br></br> custom made conformer, relinable child ocular prosthesis and other maxillofacial prosthesis.
          <br></br>          <button onClick={handle} className='btn bg-blue-600 mt-4 hover:bg-black text-white'> More</button>

        </p>

      </div>
      <div>

      </div>

    </div>

  );
};

export default HomePage1;
import { NavLink, Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div data-aos="fade-up-right">
      <footer className="footer footer-horizontal footer-center bg-primary text-primary-content  p-10">
        <aside>
          <img src="https://www.artificialeyebd.com/imagess/logo_2.png"></img>
          <p className="font-bold">
            Artificial Eye Center
            <br />
            Providing reliable Service
          </p>

        </aside>
        <nav>

     <div className="menu menu-horizontal gap-10">
           <a><NavLink to="/">Home</NavLink></a>

          <a><NavLink to="/service"> Our Service</NavLink></a>
          <a><NavLink to="/featureSection"> Features</NavLink></a>
          <a><NavLink to="/aboutDoctor"> About Doctor</NavLink></a>
          <a><NavLink to="/contact"> Contact</NavLink></a>

     </div>

        </nav>
         <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </footer>
 
    </div>
  );
};

export default Footer;
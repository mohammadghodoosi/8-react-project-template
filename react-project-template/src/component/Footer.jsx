import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import Logo from '../img/classW.png'
const Footer = () => {
  return ( <div >
       <footer className="bg-dark main-footer mt-auto py-3 sticky-footer">
           <div className="container-fluid text-center">
              <img src={Logo} style={{marginTop:'-60px',marginBottom:'-60px'}} />
           </div>
       </footer>
      
  </div> );
}
 
export default Footer;
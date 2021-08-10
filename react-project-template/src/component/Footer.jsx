import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style.css';
import Logo from '../img/dark.svg'
const Footer = () => {
  return ( <div >
       <footer className="bg-dark main-footer mt-auto py-3 sticky-footer">
           <div className="container-fluid text-center">
              <img src={Logo} style={{marginTop:'-60px',marginBottom:'-60px'}} height='70px' width='70px'/>
           </div>
       </footer>
      
  </div> );
}
 
export default Footer;
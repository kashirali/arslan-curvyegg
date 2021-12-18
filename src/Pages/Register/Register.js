import './Register.css';
import { Signuplist } from './Signuplist';
import { Signupform } from './Signupform';

function Register() {
  return (
    <div>
      <div class="container">
      <h2 class="home-h" >WE’RE IN THIS TOGETHER!</h2>
      
      <div class="row">
<div class="col-lg-5 col-md-6 col-sm-12 margin-top">
<p class="home-p">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </p>
  <p class="home-p">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod, consectetur adipiscing elit, sed do eiusmod.
  </p>
  <p class="home-p">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit!
  </p>
  <Signuplist/>
</div>
<div class="col-lg-5 col-md-6 col-sm-12 mob-wid margin-top">
 <Signupform/>

</div>
      </div>
 
    </div>
    </div>
  );
}

export default Register;

import '@styles/SignUp.css';
import Link from 'next/link';

const page = () => {
  return (
    
    <div className='SignUp'>
        
        <div className='formDiv'>

          <h1>Register</h1>

          <form>

              <input placeholder='Name'/>

              <input type='email' placeholder='Email'/>
              
              <input type='password' placeholder='Password'/>
              
              <input type='password' placeholder='Confirm Password'/>
              
              <input placeholder='Phone number'/>

              <div className='policies'>
              <input type='checkbox'/>
              <p>I agree to the <span> terms of use</span> & <span>policies</span></p>
              </div>
              
              <button>Sign Up</button>

          </form>

          <p>already have an account? <Link href={'/sign-in'}>Login</Link></p>

        </div>

    </div>

  )
};

export default page;

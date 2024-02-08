import '@styles/SignUp.css';
import Link from 'next/link';

const page = () => {
  return (
    
    <div className='SignUp'>
        
        <div className='formDiv'>

          <h1>Login</h1>

          <form>

              <input type='email' placeholder='Email'/>
              
              <input type='password' placeholder='Password'/>

              <input placeholder='Phone number'/>

              <div className='policies'>
                  <input type='checkbox'/>
                  <p> Remember me</p>
              </div>
              
              <button>Login</button>

          </form>

          <p>don't have an account? <Link href={'/sign-up'}>Sign Up</Link></p>

        </div>

    </div>

  )
};

export default page;

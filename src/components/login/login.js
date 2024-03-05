// import React, { useState,useEffect } from 'react';
import './login.css'; // Make sure to import your CSS file

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlusG, faFacebookF, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import './LoginForm.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const history = useNavigate();

  const toggleForm = () => {
    setIsSignIn((prev) => !prev);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if email and password are entered for signup
    if (!isSignIn && (!userData.email || !userData.password)) {
      alert('Please enter both email and password for registration.');
      return;
    }
  
    // Store user data in local storage
    if (!isSignIn) {
      localStorage.setItem('userData', JSON.stringify(userData));
      alert('User registered successfully!');
    } else {
      // For login, you can implement the authentication logic here
      const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
      if (
        storedUserData &&
        storedUserData.email === userData.email &&
        storedUserData.password === userData.password
      ) {
        alert('Login successful!');
        history("/Navbar")
      } else {
        alert('Invalid credentials. Please try again.');
      }
    }
  };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  
  //   // Capture the current input values
  //   const formData = {
  //     name: e.target.name ? e.target.name.value : '',
  //     email: e.target.email.value,
  //     password: e.target.password.value,
  //   };
  
  //   // Store user data in local storage
  //   if (!isSignIn) {
  //     localStorage.setItem('userData', JSON.stringify(formData));
  //     alert('User registered successfully!');
  //   } else {
  //     // For login, you can implement the authentication logic here
  //     const storedUserData = JSON.parse(localStorage.getItem('userData'));
  
  //     if (
  //       storedUserData &&
  //       storedUserData.email === formData.email &&
  //       storedUserData.password === formData.password
  //     ) {
  //       alert('Login successful!');
  //     } else {
  //       alert('Invalid credentials. Please try again.');
  //     }
  //   }
  // };
  

  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   // Store user data in local storage
  //   if (!isSignIn) {
  //     localStorage.setItem('userData', JSON.stringify(userData));
  //     alert('User registered successfully!');
  //   } else {
  //     // For login, you can implement the authentication logic here
  //     const storedUserData = JSON.parse(localStorage.getItem('userData'));

  //     if (
  //       storedUserData &&
  //       storedUserData.email === userData.email &&
  //       storedUserData.password === userData.password
  //     ) {
  //       alert('Login successful!');
  //     } else {
  //       alert('Invalid credentials. Please try again.');
  //     }
  //   }
  // };

  return (
    <div className={`container ${isSignIn ? '' : 'active'}`}>
      <div className={`form-container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
        <form onSubmit={handleSubmit}>
          <h1>{isSignIn ? 'Sign In' : 'Create Account'}</h1>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGooglePlusG} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </div>
          <span>{isSignIn ? 'or use your email and password' : 'or use your email for registration'}</span>
          {!isSignIn && <input type="text" name="name" placeholder="Name" onChange={handleChange} />}
          <input type="email" name="email" placeholder="Email" onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" onChange={handleChange} />
          {!isSignIn && (
            <React.Fragment>
              <a href="#">Forget Your Password?</a>
              <button type="submit">Sign Up</button>
            </React.Fragment>
          )}
          {isSignIn && (
            <React.Fragment>
              <a href="#">Forget Your Password?</a>
              <button type="submit">Sign In</button>
            </React.Fragment>
          )}
        </form>
      </div>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-left">
            <h1>Welcome Back!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" onClick={toggleForm}>
              Sign In
            </button>
          </div>
          <div className="toggle-panel toggle-right">
            <h1>Welcome, Friend!</h1>
            <p>Enter your personal details to use all site features</p>
            <button className="hidden" onClick={toggleForm}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;






// const LoginForm = () => {
//   const [isSignIn, setIsSignIn] = useState(false);
  
// const[data,setData]=useState({
//   username:"",
//   email:"",
//   password:""

// })
// const[loginstausdata,loginSetStatusData]=useState()
//   const toggleForm = () => {
//     setIsSignIn((prev) => !prev);
//   };
//   const handleChange=(e)=>{
//     setData({...data,[e.target.name]:e.target.value})
//     // console.log("omvhanege data",data)
//   }

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//    let newUsers=JSON.parse(localStorage.getItem("users"))
//    if(!Array.isArray(newUsers)){
//     newUsers=[];

//    }
//    let newlogin=[...newUsers,data]
//           localStorage.setItem("users",JSON.stringify(newlogin))
//           console.log("dign in page",newlogin)

//   };

// //   if(!isSignIn){
// // loginSetStatusData({...data})
// //   }

//   useEffect(() => {
//     if (isSignIn) {
//       loginSetStatusData(data );
//     }else{
//       setData(data)

//     }
//   }, [isSignIn, data]);
  
// const handleLogin=(e)=>{
//   e.preventDefault()

// console.log("login page")
// console.log("chenged ligins",loginstausdata)

// let loginData=JSON.parse(localStorage.getItem("users"))
// console.log("login entries",loginstausdata)
// // console.log("login data",loginData[0])
// }





//   return (
//     <div className={`container ${isSignIn ? '' : 'active'}`}>
//       <div className={`form-container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
//         <form onSubmit={isSignIn?handleLogin:handleFormSubmit}>
//           <h1>{isSignIn ? 'Sign In' : 'Create Account'}</h1>
//           {isSignIn ? (
//             <>
//               <span>or use your email and password</span>
//               <input type="text" placeholder="Name"  />
//             </>
//           ) : (
//             <span>or use your email for registration</span>
//           )}
//           {!isSignIn && <input type="text" placeholder="Name" name='username' value={data.username} onChange={handleChange}/>}
//           <input type="email" placeholder="Email" name='email' value={data.email} onChange={handleChange}/>
//           <input type="password" placeholder="Password" name='password' value={data.password} onChange={handleChange}/>
//           {!isSignIn && <button type="submit" >Sign Up</button>}
//           {isSignIn ? (
//             <button type="submit" >Sign In</button>
//           ) : (
//             <button type="submit">Sign Up</button>
//           )}
//         </form>
//       </div>
//       <div className="toggle-container">
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome Back!</h1>
//             <p>Enter your personal details to use all site features</p>
//             <button className="hidden" onClick={toggleForm}>
//               Sign In
//             </button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Welcome, Friend!</h1>
//             <p>Enter your personal details to use all site features</p>
//             <button className="hidden" onClick={toggleForm}>
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;















// import React, { useState } from 'react';

// import './login.css'; // Make sure to import your CSS file

// const LoginForm = () => {
//   const [isSignIn, setIsSignIn] = useState(true);
 
//   // const userdetails=[]||JSON.parse(localStorage.getItem("userdetails"))

//   const toggleForm = () => {
//     setIsSignIn((prev) => !prev);
//   };


//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     // Assuming you have a unique identifier for each user, like email
//     const identifier = e.target[0].value; // Using email as an identifier
//     const userdetails = JSON.parse(localStorage.getItem("userdetails")) || {};

//     const userData = {
//       // Customize this based on your form structure
//       // "name": e.target[0].value, // Uncomment for sign-up
//       "email": e.target[0].value,
//       "password": e.target[1].value,
//       "value":e.target[2].value
//     };

//     if (isSignIn) {
//       // Sign In logic (you can handle authentication here)
//       console.log("Sign In:", userData);
//     } else {
//       // Sign Up logic
//       userdetails[identifier] = userData;
//       localStorage.setItem("userdetails", JSON.stringify(userdetails));
//       console.log("Sign Up:", userData);
//     }
//   };


  



 

//   return (
//     <div className={`container ${isSignIn ? '' : 'active'}`}>
//       <div className={`form-container ${isSignIn ? 'sign-in' : 'sign-up'}`}>
//         <form onSubmit={handleFormSubmit}>
//           <h1>{isSignIn ? 'Sign In' : 'Create Account'}</h1>
        
//           {isSignIn ? (
//             <span>or use your email and password</span>
//           ) : (
//             <span>or use your email for registration</span>
//           )}
//           {!isSignIn && <input type="text" placeholder="Name" />}
//           <input type="email" placeholder="Email" />
//           <input type="password" placeholder="Password" />
//           {!isSignIn && <button type='submit'>Sign Up</button>}
//           {isSignIn ? (
//             <button >Sign In</button>
//           ) : (
//            <button>Sign Up</button>
//           )}
//         </form>
//       </div>
//       <div className="toggle-container">
//         <div className="toggle">
//           <div className="toggle-panel toggle-left">
//             <h1>Welcome Back!</h1>
//             <p>Enter your personal details to use all site features</p>
//             <button className="hidden" onClick={toggleForm}>
//               Sign In
//             </button>
//           </div>
//           <div className="toggle-panel toggle-right">
//             <h1>Welcome, Friend!</h1>
//             <p>Enter your personal details to use all site features</p>
//             <button className="hidden" onClick={toggleForm}>
//               Sign Up
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginForm;

// import React, { useContext, useState, user, setUser } from "react";
// import firebaseConfig from "./firebase.config";
// import firebase from "firebase/app";
// import "firebase/auth";
// import "./Login.css";
// import { UserContext } from "../../App";
// import { useHistory, useLocation } from "react-router";
// const Login = () => {
//   const [newUser, setNewUser] = useState(false);
//   const [user, setUser] = useState({
//     isSignIn: false,
//     name: "",
//     email: "",
//     password: "",
//     photo: "",
//     error: "",
//     success: false,
//   });
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   console.log(loggedInUser, "Login page");
//   const history = useHistory();
//   const location = useLocation();
//   // const { from } = location.state || { from: { pathname: "/" } };
//   let { from } = location.state || { from: { pathname: "/" } };
//   if (firebase.apps.length === 0) {
//     firebase.initializeApp(firebaseConfig);
//   }
//   // const googleProvider = new firebase.auth.GoogleAuthProvider();
//   const fbProvider = new firebase.auth.FacebookAuthProvider();
//   const handleGoogleSignIn = () => {
//     const googleProvider = new firebase.auth.GoogleAuthProvider();

//     firebase
//       .auth()
//       .signInWithPopup(googleProvider)
//       .then((result) => {
//         const { displayName, photoURL, email, name } = result.user;

//         // const signInUser = {
//         //   isSignIn: true,
//         //   name: displayName,
//         //   email: email,
//         //   photo: photoURL,
//         // };
//         const signedInUser = { name: displayName, email, name };
//         setLoggedInUser(signedInUser);
//         history.replace(from);
//         console.log(email, "Google email");

//         // setUser(signInUser);
//         // history.replace(from);
//       })
//       .catch(function (error) {
//         const errorMessage = error.message;
//         console.log(errorMessage);
//       });
//   };
//   const handleFbSignIn = () => {
//     firebase
//       .auth()
//       .signInWithPopup(fbProvider)
//       .then((result) => {
//         var credential = result.credential;
//         console.log("fb user ", user);
//         var user = result.user;
//         var accessToken = credential.accessToken;
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         var email = error.email;
//         var credential = error.credential;
//       });
//   };
//   const handleBlur = (e) => {
//     let isFieldValid;
//     if (e.target.name === "email") {
//       isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
//     }
//     if (e.target.name === "password") {
//       const isPasswordValid = e.target.value.length > 6;
//       const passwordHasNumber = /\d{1}/.test(e.target.value);
//       isFieldValid = isPasswordValid && passwordHasNumber;
//     }
//     if (isFieldValid) {
//       const newUserInfo = { ...user };
//       newUserInfo[e.target.name] = e.target.value;
//       setUser(newUserInfo);
//     }
//   };
//   const handleSubmit = (e) => {
//     // console.log(user.email, user.password);
//     if (newUser && user.email && user.password) {
//       firebase
//         .auth()
//         .createUserWithEmailAndPassword(user.email, user.password)
//         .then((userCredential) => {
//           var user = userCredential.user;
//           console.log(user, "email user");
//           const newUserInfo = { ...user };
//           newUserInfo.error = "";
//           newUserInfo.success = true;
//           setUser(newUserInfo);
//           updateUserName(user.name);
//         })
//         .catch((error) => {
//           const newUserInfo = { ...user };
//           newUserInfo.error = error.message;
//           setUser(newUserInfo);
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           newUserInfo.success = false;
//           console.log(errorCode, errorMessage, "Email-error");
//           // ..
//         });
//     }
//     if (!newUser && user.email && user.password) {
//       firebase
//         .auth()
//         .signInWithEmailAndPassword(user.email, user.password)
//         .then((userCredential) => {
//           var user = userCredential.user;
//           console.log(user, "sign-in-user");
//         })
//         .catch((error) => {
//           var errorCode = error.code;
//           var errorMessage = error.message;
//           console.log(errorMessage, "sign-in-error");
//           const newUserInfo = { ...user };
//           newUserInfo.error = "";
//           newUserInfo.success = true;
//           setUser(newUserInfo);
//         });
//     }
//     e.preventDefault();
//   };
//   const updateUserName = (name) => {
//     const user = firebase.auth().currentUser;

//     user
//       .updateProfile({
//         displayName: name,
//       })
//       .then(function () {
//         console.log("user name update successfully");
//       })
//       .catch(function (error) {
//         console.log("error-404");
//       });
//   };
//   return (
//     <div>
//       <h1>This is login</h1>
//       <p>Name : {user.name}</p>
//       <p>Email : {user.email}</p>
//       <p>Password : {user.password}</p>
//       <br />

//       <input
//         type="checkbox"
//         onChange={() => setNewUser(!newUser)}
//         name="newUser"
//         id=""
//       />
//       <label htmlFor="newUser">New User Sign Up</label>

//       <form onSubmit={handleSubmit}>
//         {newUser && (
//           <input
//             name="name"
//             type="text"
//             onBlur={handleBlur}
//             placeholder="Name kaj kore na"
//           />
//         )}
//         <br />
//         <input
//           className="login-input"
//           type="text"
//           name="email"
//           onBlur={handleBlur}
//           placeholder="Enter Your Email"
//           required
//         />
//         <br />
//         <input
//           className="login-input"
//           type="password"
//           name="password"
//           onBlur={handleBlur}
//           placeholder="Enter Your Password"
//           required
//         />
//         <br />
//         <input type="submit" value={newUser ? "Sign up" : "Sign in"} />
//       </form>
//       <p style={{ color: "red" }}> {user.error} </p>
//       {user.success && (
//         <p style={{ color: "green" }}>
//           {" "}
//           User {newUser ? "created" : "Logged In"} successfully{" "}
//         </p>
//       )}

//       <button className="submit-button" onClick={handleGoogleSignIn}>
//         Google
//       </button>
//       <button className="submit-button" onClick={handleFbSignIn}>
//         Facebook
//       </button>
//     </div>
//   );
// };

// export default Login;

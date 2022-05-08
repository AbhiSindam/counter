// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjuEIZTXsNNEq-U-Ha0Ncc3MsZyivsrLA",
  authDomain: "login-d3dee.firebaseapp.com",
  projectId: "login-d3dee",
  storageBucket: "login-d3dee.appspot.com",
  messagingSenderId: "651355989774",
  appId: "1:651355989774:web:1e8c869fce37dc98e4195f",
  measurementId: "G-T2T0LNZQQD",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();

<Router>
  <div id='recaptcha-container'></div>
  <Switch>
    <Route path='/' element={<Home />} />
    <Route path='/signin' element={<SignIn />} />
  </Switch>
</Router>;

useEffect(() => {
  window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
    "recaptcha-container",
    {
      size: "invisible",
      callback: function (response) {
        console.log("Captcha Resolved");
      },
      defaultCountry: "IN",
    }
  );
}, []);
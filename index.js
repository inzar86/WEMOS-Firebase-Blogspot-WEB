(function(){
// Initialize firebase
  const config = {
    apiKey: "AIzaSyCRWWPTa3oyXD8Cf-rYGBn7fO9_r-hopFo"
    authDomain: "cuaca-8d24e.firebaseapp.com",
    databaseURL: "https://cuaca-8d24e.firebaseio.com",
    //projectId: "cuaca-8d24e",
    storageBucket: "cuaca-8d24e.appspot.com",
    //messagingSenderId: "716575067735",
    //appId: "1:716575067735:web:7d7b6a0c18ecc31e"
  };

firebase.initializeApp(config);
 
const preObject = document.getElementById("DHT11");
const dbRefObject = firebase.database().ref().child("DHT11");
dbRefObject.on("value", snap => {
  preObject.innerText =JSON.stringify(snap.val(), null, 3);
});

  
}());
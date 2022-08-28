(function(){
// Initialize firebase
  const config = {
    apiKey: "Your project API Key From Firebase"
    authDomain: "your-project.firebaseapp.com",
    databaseURL: "https://your-project.firebaseio.com",
    //projectId: "your-project",
    storageBucket: "your-project.appspot.com",
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

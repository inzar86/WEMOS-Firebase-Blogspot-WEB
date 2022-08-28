# WEMOS-Firebase-Blogspot-WEB
ESP8266 WEMOS D1 Mini Firebase Retrieve data to HTML Java Script

1. Setup your realtime database using firebase in firebase website
2. Get API key or secret key from your realtime database and put detail inside file ```index.js```:
```javascript
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
```
3. Set your realtime database to test mode read this 
https://firebase.google.com/docs/rules/basics
4. Change your Tag database ex: DHT11 is my example
```
[+] your-project.firebaseapp.com
 |_ [+] DHT11
```
my script is:
```javascript
firebase.initializeApp(config);
 
const preObject = document.getElementById("DHT11");
const dbRefObject = firebase.database().ref().child("DHT11");
dbRefObject.on("value", snap => {
  preObject.innerText =JSON.stringify(snap.val(), null, 3);
});
```
5. Open ```index.html``` and change your tag (step 4) ex:DH11 to your realtime database
```html
<body>
  <pre id='DHT11'></pre>
  <script src="index.js"></script>
</body>
```
6. Run and enjoy.


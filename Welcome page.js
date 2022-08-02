const firebaseConfig = {
    apiKey: "AIzaSyCecv_m29Y4RmQCL6tFmwXBo-bAeUunFUk",
    authDomain: "text-it-now.firebaseapp.com",
    projectId: "text-it-now",
    storageBucket: "text-it-now.appspot.com",
    messagingSenderId: "290899362773",
    appId: "1:290899362773:web:54a1b0bfd3781020ebb35c",
    measurementId: "G-XYGGN37B22"
};

firebase.initializeApp(firebaseConfig);

var email = "benjamin.burnell@student.tdsb.on.ca";
var myName = "James Burnell";
var ImageURL = "Profile Img.png";
var chats = "nobody"

var publicShowName = myName
myName = myName.toLowerCase()

firebase.database().ref("TDSB/Users/" + myName).set({
    "Name": publicShowName,
    "Email": email,
    "imgURL": ImageURL,
    "agree": "Agreed",
    "usersChats":chats
})

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName())
    $("#email").text(profile.getEmail())

    console.log(profile)
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // style.display = "none"
    const allowedEmailDomain = 'student.tdsb.on.ca';

    const email = profile.getEmail();
    var myName = profile.getName();
    const ImageURL = profile.getImageUrl();
    
    myName = myName.toLowerCase()
    var users = []
    var agreed;

    if (email.split('@')[1] === allowedEmailDomain) {
        firebase.database().ref("TDSB/Users/").once('value', function(snapshot) {
            snapshot.forEach(
                function(ChildShapshot) {
                    var name = ChildShapshot.val().Name
                    users.push(name.toLowerCase())
                }
            )
            if(users.includes(myName)) {
                firebase.database().ref("TDSB/Users/" + myName).on("value", function(snapshot) {
                    agreed = snapshot.val().agree
                })
                setTimeout(function() {
                    if(agreed == "Agreed") {
                        window.location = "index.html"
                    } else {
                        window.location = "Terms&Conditions.html"
                    }
                }, 100)
            } else {
                window.location = "Terms&Conditions.html"
            }
        })
        setTimeout(function() {
            console.log("agreed")
        }, 100)
    } else {
        window.location = "emailNotAccepted.html"
    }
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
      window.location = "Welcome Page.html"
    });
}
// const checker = document.getElementById("checker")

var currPriChatMessage = ""

// const observer = new IntersectionObserver(entries => {
//     if(entries[0].isIntersecting == false) {
//         document.getElementById("button-Container").classList.add("open")
//     } else {
//         document.getElementById("button-Container").classList.remove("open")
//     }
// })
// observer.observe(checker)

document.getElementById("profile-Image-Holder").addEventListener("click", function() {
    console.log("Profile Clicked")
}) 

window.addEventListener("scroll", function() {
    document.documentElement.style.setProperty('--vh', `${vh}px`);
//     var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     if(scrollTop > lastScrollTop || scrollTop == lastScrollTop) {
//         navbar.style.top = "15px"
//         // searchButton.style.top = "60px"
//     } else {
//         navbar.style.top = "60px"
//         // searchButton.style.top = "105px"
//     }

//     if(scrollTop == 0 || scrollTop < 0) {
//         // searchButton.style.top = "105px"
//         navbar.style.top = "60px"
//     }
//     lastScrollTop = scrollTop
})

var chats = 0;

document.getElementById("button-One").addEventListener("click", function() {
    // if(chats == 0) {
        document.getElementById("group-Chat-Holder").style.display = "none"
        document.getElementById("chat-Icon").style.fill = "rgb(0, 132, 255)"
        document.getElementById("group-Icon").style.fill = "var(--main-text-color)"
        const chatsPage = document.getElementById("chats-Holder").style
        chatsPage.display = "flex"
        chatsPage.flexDirection = "column"
        const chatbox = document.getElementById("normal-Group-Chats")
        chatbox.scrollTo({ bottom: 0, behavior: 'auto' });
        const chatbox2 = document.getElementById("group-Chat-Holder")
        chatbox2.scrollTo({ bottom: 0, behavior: 'auto'});
        chats = 1;
    // }
})

document.getElementById("button-Two").addEventListener("click", function() {
    // if(chats == 1) {
        document.getElementById("chats-Holder").style.display = "none"
        document.getElementById("chat-Icon").style.fill = "var(--main-text-color)"
        document.getElementById("group-Icon").style.fill = "rgb(0, 132, 255)"
        const chatsPage = document.getElementById("group-Chat-Holder").style
        chatsPage.display = "grid"
        chatsPage.flexDirection = "column"
        document.getElementById("search-Text").style.top = "195px"
        document.getElementById("search-Icon").style.top = "195px"
        chats = 0
    // }
})


document.getElementById("send-Message-Textbox").addEventListener("keyup", function(){
    const sendTextbox = document.getElementById("send-Message-Textbox").value
    if(sendTextbox != "") {
        document.getElementById("send-Icon").style.fill = "rgb(0, 132, 255)"
    } else {
        document.getElementById("send-Icon").style.fill = "rgb(100, 100, 100)"
    }
})

var typing = 1;

document.getElementById("group-Chat-Holder").addEventListener("click", function() {
    console.log("Click")
    if(typing == 1) {
        document.getElementById("all-Send-Box-Container").style.border = "10px"        
        typing = 0
    }
})

document.getElementById("all-Send-Box-Container").addEventListener("click", function() {
    if(typing == 0) {
        document.getElementById("all-Send-Box-Container").style.border = "3px solid rgb(0, 132, 200)"        
        typing = 1
    }
})

var desktop = null

if(window.innerWidth > 749) {
    desktop = true
} else {
    desktop = false
}

// setInterval(function() {
//     if(desktop == false && window.innerWidth > 749) {
//         location.reload();
//     } else if(desktop == true && window.innerWidth < 749) {
//         location.reload();
//     } else {
        
//     }
// }, 1)

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
var previousMode = null

// Then we set the value in the --vh custom property to the root of the document

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    let root = document.documentElement;
    previousMode = "darkMode"
    root.style.setProperty('--main-background-color', 'rgb(37.5, 37.5, 37.5)');
    root.style.setProperty('--sub-background-color', 'rgb(45, 45, 45)');
    root.style.setProperty('--main-text-color', 'rgb(250, 250, 250)');
    root.style.setProperty('--line-color', 'rgb(50, 50, 50)');
    root.style.setProperty('--sub-text-color', 'rgb(100, 100, 100)');
} else {
    let root = document.documentElement;
    previousMode = "lightMode"
    root.style.setProperty('--main-background-color', 'rgb(250, 250, 250)');
    root.style.setProperty('--main-text-color', 'rgb(33, 33, 33)');
    root.style.setProperty('--line-color', 'rgb(200, 200, 200)');
    root.style.setProperty('--sub-text-color', 'rgb(50, 50, 50)');
    // --sub-text-color
}

var changed = null

setInterval(function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        if(previousMode == "lightMode") {
            changed = true
            previousMode = "darkMode"
        }
    } else {
        if(previousMode == "darkMode") {
            changed = true
            previousMode = "lightMode"
        }
    }

    if(changed) {
        document.querySelector("body").style.transition = ".25s"
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            let root = document.documentElement;
            previousMode = "darkMode"
            root.style.setProperty('--main-background-color', 'rgb(37.5, 37.5, 37.5)');
            root.style.setProperty('--sub-background-color', 'rgb(45, 45, 45)');
            root.style.setProperty('--main-text-color', 'rgb(250, 250, 250)');
            root.style.setProperty('--line-color', 'rgb(50, 50, 50)');
            root.style.setProperty('--sub-text-color', 'rgb(100, 100, 100)');
        } else {
            let root = document.documentElement;
            previousMode = "lightMode"
            root.style.setProperty('--main-background-color', 'rgb(250, 250, 250)');
            root.style.setProperty('--sub-background-color', 'rgb(240, 240, 240)');

            root.style.setProperty('--main-text-color', 'rgb(33, 33, 33)');
            root.style.setProperty('--line-color', 'rgb(200, 200, 200)');
            root.style.setProperty('--sub-text-color', 'rgb(50, 50, 50)');
            // --sub-text-color
        }
        setTimeout(function() {
            document.querySelector("body").style.transition = ".25s"
        }, 250)
    }
}, 500)

var users = []
var chatProfileImgURLs = []
var contacts = []
var lastMessages = []


var email = "benjamin.burnell@student.tdsb.on.ca";
var name;
var ImageURL;
var chats = "nobody"
var previousName = ""
var previousName2 = ""

var checkUserSignIn = 0;

var imgURL = "random gmail profile pic.jpg"

setTimeout(function() {
    if(checkUserSignIn == 0) {
        window.location = "Welcome Page.html"
    }
    console.log(checkUserSignIn)
}, 2000)


function onSignIn(googleUser) {
    checkUserSignIn = 1
    var profile = googleUser.getBasicProfile();
    $("#name").text(profile.getName())
    $("#email").text(profile.getEmail())
    document.getElementById("image").setAttribute("src", profile.getImageUrl())

    imgURL = profile.getImageUrl()
    myName = profile.getName()

    document.getElementById("profile-Img").setAttribute("src", profile.getImageUrl())
    document.getElementById("profile-Name").textContent = myName
    document.getElementById("profile-Email").textContent = profile.getEmail()

    console.log(profile)
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    // style.display = "none"
    const allowedEmailDomain = 'student.tdsb.on.ca';

    var email = profile.getEmail();
    var myName = profile.getName();
    var ImageURL = profile.getImageUrl();

    var imgURL = ImageURL
    var previousName = ""

    var publicShowName = myName
    var contacts = []
    var checkLoad = false
    myName = myName.toLowerCase()

    if(email == null) {
        window.location = "Welcome Page.html"
    }

    if (email.split('@')[1] === allowedEmailDomain) {   

        // Delete {
        
        // var previousName = ""

        // var myName = "Leona Burnell"
        // var myName = prompt("James Burnell" + " Benjamin Burnell")

        var publicShowName = myName
        var checkLoad = false
        myName = myName.toLowerCase()
        // }
        
        // myName = prompt("Enter Your Name")
        // var publicShowName = myName
        firebase.database().ref("TDSB/Users/").once('value', function(snapshot) {
            snapshot.forEach(
                function(ChildShapshot) {
                    var name = ChildShapshot.val().Name
                    users.push(name.toLowerCase())
                }
            )
            console.log(users)
            if(users.length == 0) {
                firebase.database().ref("TDSB/Users/" + myName).set({
                    "Name": publicShowName,
                    "Email": email,
                    "imgURL": imgURL,
                    "agree": "Agreed",
                    "usersChats":chats
                })
            } else {
                if(users.includes(myName)) {
                    var path = "TDSB/Users/" + myName
                    firebase.database().ref(path).once('value', function(snapshot) {
                        var chats = snapshot.val().usersChats
                        if(chats == "nobody") {
                            console.log("no chats")
                        } else {
                            firebase.database().ref("TDSB/Users/" + myName + "/usersChats/Contacts").on("child_added", function(snapshot) {
                                if(checkLoad == false) {
                                    var nameArr = snapshot.val()
                                    nameArr = nameArr.split(" ")
                                    var firstName = nameArr[0]
                                    var lastName = nameArr[1]
                                    firstName =  firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
                                    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
                                    console.log(firstName)
                                    var finalName = firstName + " " + lastName
                                    // console.log(snapshot.val())
                                    
                                    contacts.unshift(finalName)
                                    var seen = {};
                                    var out = [];
                                    var len = contacts.length;
                                    var j = 0;
                                    for(var i = 0; i < len; i++) {
                                        var item = contacts[i];
                                        if(seen[item] !== 1) {
                                            seen[item] = 1;
                                            out[j++] = item;
                                        }
                                    }
                                    contacts = out
                                    loadChatImages(snapshot.val())
                                } else {
                                    var nameArr = snapshot.val()
                                    nameArr = nameArr.split(" ")
                                    var firstName = nameArr[0]
                                    var lastName = nameArr[1]
                                    firstName =  firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
                                    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
                                    console.log(firstName)
                                    var finalName = firstName + " " + lastName
                                    // console.log(snapshot.val())
                                    contacts.unshift(finalName)

                                    var seen = {};
                                    var out = [];
                                    var len = contacts.length;
                                    var j = 0;
                                    for(var i = 0; i < len; i++) {
                                        var item = contacts[i];
                                        if(seen[item] !== 1) {
                                            seen[item] = 1;
                                            out[j++] = item;
                                        }
                                    }
                                    contacts = out
                                    console.log(contacts)

                                    loadChatImages(snapshot.val())
                                    setTimeout(function() {
                                        newChat()
                                    }, 300)
                                }
                            })
                            setTimeout(function() {
                                newChat()
                                checkLoad = true
                                var myChatRef = myName.toLowerCase() + " Chats"
                                var chatNum = 0
                                var i2 = 0
                                var checkingNewChat = true
                                
                                for(var i=0;i<contacts.length;i++) {
                                    chatNum = 0
                                    i2 = 0 

                                    firebase.database().ref("TDSB/"+myChatRef+ "/" + myName.toLowerCase() + " + " +contacts[i].toLowerCase()).on("value", function (snapshot) {
                                        chatNum = snapshot.numChildren()
                                        console.log(chatNum)
                                        i2 += 1

                                        snapshot.forEach(function (childSnapshot) {
                                            // console.log(chatNum, i)
                                            console.log(checkingNewChat)
                                            if(checkingNewChat) {
                                                console.log(childSnapshot.val().message)
                                                checkingNewChat = false
                                            }

                                            console.log(childSnapshot.val().message, "not you")
                                        })

                                        if(i2 == chatNum) {
                                            console.log(i2)
                                            console.log(chatNum)
                                            console.log("new chat")
                                            checkingNewChat = true
                                            i2 = 0
                                            chatNum = 0
                                        }
                                    })
                                }
                            }, 300)
                        }
                    })
                    var index = users.indexOf(myName);
                    if (index > -1) {
                        users.splice(index, 1);
                    }
                } else {
                    firebase.database().ref("TDSB/Users/" + myName).set({
                        "Name": publicShowName,
                        "Email": email,
                        "imgURL": imgURL,
                        "usersChats":chats
                    })
                    console.log(myName)
                }
            }
        })

        firebase.database().ref("TDSB/groupChatMessages/").on("child_added", function (snapshot) {
            var html2 = "";
            // give each message a unique ID
            // show delete button if message is sent by me
            if(previousName == "") {
                if(snapshot.val().Name == publicShowName) {
                    html2 += '<div class="sent-Message-Container">'
                    html2 +=    '<div class="sent-Message-Name">'+snapshot.val().Name+'</div>'
                    html2 +=        '<div class="sent-Content-Img-Holder">'
                    html2 +=            '<div class="sent-Message-Content">'+snapshot.val().Message+'</div>'
                    html2 +=            '<div class="sent-Img-Holder sent-Img-Holder-Group">'
                    html2 +=                '<img class="sent-Profile-Img" src="'+snapshot.val().profileIMGURL+'">'
                    html2 +=            '</div>'
                    html2 +=        '</div>'
                    html2 +=    '</div>'
                    html2 += '</div>'
                } 
                if(snapshot.val().Name != publicShowName) {
                    html2 += '<div class="rec-Message-Container">'
                    html2 +=    '<div class="rec-Message-Name">'+snapshot.val().Name+'</div>'
                    html2 +=        '<div class="rec-Content-Img-Holder">'
                    html2 +=            '<div class="rec-Message-Content">'+snapshot.val().Message+'</div>'
                    html2 +=            '<div class="rec-Img-Holder  rec-Img-Holder-Group">'
                    html2 +=                '<img class="rec-Profile-Img" src="'+snapshot.val().profileIMGURL+'">'
                    html2 +=            '</div>'
                    html2 +=        '</div>'
                    html2 +=    '</div>'
                    html2 += '</div>'
                }
                previousName = snapshot.val().Name
            } else if(previousName != "") {
                if(snapshot.val().Name == publicShowName) {
                    if(previousName == publicShowName) {
                        html2 += '<div class="sent-Message-Container">'
                        html2 +=    '<div class="sent-Content-Img-Holder">'
                        html2 +=        '<div class="sent-Message-Content" id="sent-Message-Alr">'+snapshot.val().Message+'</div>'
                        html2 +=    '</div>'
                        html2 += '</div>'
                    } else {
                        html2 += '<div class="sent-Message-Container">'
                        html2 +=    '<div class="sent-Message-Name">'+snapshot.val().Name+'</div>'
                        html2 +=        '<div class="sent-Content-Img-Holder">'
                        html2 +=            '<div class="sent-Message-Content">'+snapshot.val().Message+'</div>'
                        html2 +=            '<div class="sent-Img-Holder sent-Img-Holder-Group">'
                        html2 +=                '<img class="sent-Profile-Img" src="'+snapshot.val().profileIMGURL+'">'
                        html2 +=            '</div>'
                        html2 +=        '</div>'
                        html2 +=    '</div>'
                        html2 += '</div>'
                    }
                } else {
                    if(previousName == snapshot.val().Name) {
                        html2 += '<div class="rec-Message-Container">'
                        html2 +=    '<div class="rec-Content-Img-Holder">'
                        html2 +=        '<div class="rec-Message-Content" id="sent-Message-Alr">'+snapshot.val().Message+'</div>'
                        html2 +=    '</div>'
                        html2 += '</div>'
                    } else {
                        html2 += '<div class="rec-Message-Container">'
                        html2 +=    '<div class="rec-Message-Name">'+snapshot.val().Name+'</div>'
                        html2 +=        '<div class="rec-Content-Img-Holder">'
                        html2 +=            '<div class="rec-Message-Content">'+snapshot.val().Message+'</div>'
                        html2 +=            '<div class="rec-Img-Holder rec-Img-Holder-Group">'
                        html2 +=                '<img class="rec-Profile-Img" src="'+snapshot.val().profileIMGURL+'">'
                        html2 +=            '</div>'
                        html2 +=        '</div>'
                        html2 +=    '</div>'
                        html2 += '</div>'
                    }
                }
                previousName = snapshot.val().Name
            }
            chatCount = 1;
            if(chatCount == 1) {
                document.getElementById("be-The-First-To-Text-It").style.display = "none"
            }
            chatMessageCount++;
            document.getElementById("messages").innerHTML += html2;
            const chatbox = document.getElementById("normal-Group-Chats")
            chatbox.scrollTo({ top: 9999999999999, behavior: 'auto' });
            const chatbox2 = document.getElementById("messages")
            chatbox2.scrollTo({ top: 9999999999999, behavior: 'auto' });
            const chatbox3 = document.getElementById("group-Chat-Holder")
            chatbox3.scrollTo({ top: 9999999999999, behavior: 'auto' });
        });
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

function options() {
    alert("click")
}

function loadChatImages(name) {
    firebase.database().ref("TDSB/Users/" + name).on("value", function(snapshot) {
        chatProfileImgURLs.unshift(snapshot.val().imgURL)
    })
}

function getLastMessage() {
    checkLoad = true
    var myChatRef = myName.toLowerCase() + " Chats"
    var chatNum = 0
    var i2 = 0
    var checkingNewChat = true
    
    for(var i=0;i<contacts.length;i++) {
        chatNum = 0
        i2 = 0 

        firebase.database().ref("TDSB/"+myChatRef+ "/" + myName.toLowerCase() + " + " +contacts[i].toLowerCase()).on("value", function (snapshot) {
            chatNum = snapshot.numChildren()
            console.log(chatNum)
            i2 += 1

            snapshot.forEach(function (childSnapshot) {
                // console.log(chatNum, i)
                console.log(checkingNewChat)
                if(checkingNewChat) {
                    console.log(childSnapshot.val().message)
                    checkingNewChat = false
                }

                console.log(childSnapshot.val().message, "not you")
            })

            if(i2 == chatNum) {
                console.log(i2)
                console.log(chatNum)
                console.log("new chat")
                checkingNewChat = true
                i2 = 0
                chatNum = 0
            }
        })
    }
}

var userChatbox = 0

for(var i=0;i<20;i++) {
    add()
}

function add() {
    var html = ""
    html += '<div class="chat-Container" onclick="otherOpenChat(contacts[0], -10)">'
    html +=   '<div class="profile-Picture-Holder">'
    html +=       '<img class="dummy-Profile-Pic" src="random gmail profile pic.jpg"/>'
    html +=   '</div>'
    html +=   '<div class="name-Message-Container">'
    html +=       '<div class="users-Name">Lily Smith</div>'
    html +=       '<div class="users-Lase-Message">dkjha lkjhdl kjhdl kjhlk jhlk jhlkj lkhlkj hlkjh lkja hlkjh lkjhsl kjhlk jhlkj h</div>'
    html +=   '</div>'
    html +=   '<div class="options" onclick="options(0)">'
    html +=       '<svg class="options-Icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">'
    html +=           '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>'
    html +=       '</svg>'
    html +=   '</div>'
    html += '</div>'

    userChatbox++;
    
    if(userChatbox > 0) {
        document.getElementById("start-Chatting-Container").style.display = "none"
    }

    document.getElementById("chats-Holder").innerHTML += html
}

function sendGroupChatMessage() {
    console.log("Message Sent");
    const groupChatTextBox = document.getElementById("send-Message-Textbox")
    console.log(groupChatTextBox.value)

    // if(previousName != "") {
    //     var html2 = ""
    //     html2 += '<div class="sent-Message-Container">'
    //     html2 +=    '<div class="sent-Content-Img-Holder">'
    //     html2 +=        '<div class="sent-Message-Content" id="sent-Message-Alr">'+groupChatTextBox.value+'</div>'
    //     html2 +=    '</div>'
    //     html2 += '</div>'
    //     document.getElementById("messages").innerHTML += html2
    // }
    // if(previousName == "") {
    //     previousName = "Lily Smith"
    //     var html2 = ""
    //     html2 += '<div class="sent-Message-Container">'
    //     html2 +=    '<div class="sent-Message-Name">'+currentName+'</div>'
    //     html2 +=        '<div class="sent-Content-Img-Holder">'
    //     html2 +=            '<div class="sent-Message-Content">'+groupChatTextBox.value+'</div>'
    //     html2 +=            '<div class="sent-Img-Holder">'
    //     html2 +=                '<img class="sent-Profile-Img" src="Profile Img.png">'
    //     html2 +=            '</div>'
    //     html2 +=        '</div>'
    //     html2 +=    '</div>'
    //     html2 += '</div>'
    //     document.getElementById("messages").innerHTML += html2
    // }

    if(groupChatTextBox.value != "") {
        firebase.database().ref("TDSB/groupChatMessages/").push().set({
            "Name": publicShowName,
            "Message": groupChatTextBox.value,
            "profileIMGURL":imgURL
        })
    }

    const chatbox = document.getElementById("normal-Group-Chats")
    chatbox.scrollTo({ top: 9999999999999, behavior: 'auto' });
    const chatbox2 = document.getElementById("messages")
    chatbox2.scrollTo({ top: 9999999999999, behavior: 'auto' });
    const chatbox3 = document.getElementById("group-Chat-Holder")
    chatbox3.scrollTo({ top: 9999999999999, behavior: 'auto' });
    groupChatTextBox.value = ""
    return false
}

document.getElementById("search-Holder").addEventListener("click", function() {
    const chatsPage = document.getElementById("search-Page-Holder").style
    chatsPage.display = "grid"
    chatsPage.flexDirection = "column"
    var navbar = document.getElementById("button-Container");
    navbar.style.display = "none"
    console.log("Search")
    users = []
    firebase.database().ref("TDSB/Users/").once('value', function(snapshot) {
        snapshot.forEach(
            function(ChildShapshot) {
                var name = ChildShapshot.val().Name
                name = name.toLowerCase()
                if(name != myName.toLowerCase()) {
                    users.push(name)
                }
            }
        )
    })
})

document.getElementById("close-Icon").addEventListener("click", function() {
    const chatsPage = document.getElementById("search-Page-Holder").style
    chatsPage.display = "none"
    chatsPage.flexDirection = "column"
    if(window.innerWidth < 750) {
        var navbar = document.getElementById("button-Container");
        navbar.style.display = "flex"
    } else {

    }
})

var chatMessageCount = 0;

var profileClick = 0;

document.getElementById("profile-Image-Holder").addEventListener("click", function() {
    if(profileClick == 0) {
        document.getElementById("profile-Page").style.display = "flex"
        profileClick = 1
    } else {

    }
})

document.getElementById("hole-Background").addEventListener("click", function() {
    if(profileClick == 1) {
        document.getElementById("profile-Page").style.display = "none"
        profileClick = 0
    } else {

    }
})

document.getElementById("close-Profile-Icon").addEventListener("click", function() {
    if(profileClick == 1) {
        document.getElementById("profile-Page").style.display = "none"
        profileClick = 0
    } else {

    }
})

function getChats() {
    if(chats.length == 0) {
        document.getElementById("start-Chatting-Container").style.display = "flex"
    } else {
        document.getElementById("start-Chatting-Container").style.display = "none"
    }
}

var priChats = 0

document.getElementById("search-Text-Box").addEventListener("keyup", function () {
    for(var i2 = 0; i2 < 1; i2++) {
        var textBoxString = document.getElementById("search-Text-Box").value;
  
        var finalName = textBoxString.toLowerCase();
        // console.log(names[0])
        document.getElementById("no-User-Found-Holder").style.display = "none";
      
        if (textBoxString != "") {
      
          myNames = users.filter((users) => users.includes(finalName));
      
          var html = "";
      
          // Output new array
          if (myNames.length != 0) {
            for (var i = 0; i < myNames.length; i++) {
                var currentMyName = myNames[i]
                var currentShownName = myNames[i].charAt(0).toUpperCase() + myNames[i].slice(1);
                document.getElementById("possible-Searches-Holder").innerHTML = " ";
        
                firebase.database().ref("TDSB/Users/" + currentMyName).on("value", function (snapshot) {
                    html += "<div class='search-Profile-Holder'>"
                    html +=     '<div class="search-Profile-Image-Holder">'
                    html +=         '<img src="' + snapshot.val().imgURL + '" class="search-Profile-Img">'
                    html +=     '</div>'
                    html +=     '<div class="search-Profile-Name">' + snapshot.val().Name + '</div>'
                    html +=     '<button class="chat-Button" onclick="otherOpenChat(myNames, '+i+');">';
                    html +=         "Chat";
                    html +=     "</button>";
                    html += "</div>"
                });

                document.getElementById("no-User-Found-Holder").style.display = "none";
                }
            } else {
                document.getElementById("possible-Searches-Holder").innerHTML = " ";
                document.getElementById("no-User-Found-Holder").style.display = "flex";
            }
            document.getElementById("possible-Searches-Holder").innerHTML += html;
        } else {
          document.getElementById("possible-Searches-Holder").innerHTML = " ";
        }
    }
});

var currentChatOpen = ""  
var currentChatOpenLowerCase = ""
var chatCount = 0;
var chatsPriviouslyOpened = []
var chatsLoaded = 0
var priChatMessageCount = 0
var checkIfNewChat = 0;

// function openChat(Name, index) {
//     chatsLoaded = 0
//     priChatMessageCount = 0
//     firebase.database().ref("TDSB/Users/" + Name[index]).on("value", function (snapshot) {
//         document.getElementById("pri-Chat-Name").textContent = snapshot.val().Name;
//         currentChatOpen = snapshot.val().Name
//         document.getElementById("pri-Chat-Img").setAttribute("src", snapshot.val().imgURL);
//         document.getElementById("pri-Chat-Container").style.display = "flex";
//     });
//     previousName2 = ""
//     currentChatOpenLowerCase = currentChatOpen.toLowerCase()
//     document.getElementById("pri-Message-Container").innerHTML = " "
//     chatsPriviouslyOpened.push(Name[index])
//     firebase.database().ref("TDSB/" + myName + " Chats/" + myName + " + " + currentChatOpenLowerCase).on("child_added", function(snapshot){
//         var html2 = "";
//         if(previousName2 == "") {
//             if(snapshot.val().Name == myName && chatsLoaded == 0) {
//                 html2 = '<div class="sent-Content-Img-Holder"><div class="sent-Message-Content">'+snapshot.val().message+'</div><div class="sent-Img-Holder"><img class="sent-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>';
//                 console.log("New Chat Message")
//                 priChats = 1
//                 priChatMessageCount++;
//             } 
//             if(snapshot.val().Name != myName && chatsLoaded == 0) {
//                 html2 = '<div class="rec-Content-Img-Holder"><div class="rec-Message-Content">'+snapshot.val().message+'</div><div class="rec-Img-Holder"><img class="rec-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>'
//                 console.log("New Chat Message")
//                 priChats = 1
//                 priChatMessageCount++;
//             }
//             previousName2 = snapshot.val().Name
//         } else if(previousName2 != "" && chatsLoaded == 0) {
//             if(snapshot.val().Name == myName && chatsLoaded == 0) {
//                 if(previousName2 == myName && chatsLoaded == 0) {
//                     html2 = '<div class="sent-Message-Container"><div class="sent-Content-Img-Holder"><div class="sent-Message-Content" id="sent-Message-Alr">'+snapshot.val().message+'</div></div></div>'
//                     console.log("New Chat Message")
//                     priChats = 1
//                     priChatMessageCount++;
//                 } else {
//                     html2 = '<div class="sent-Content-Img-Holder"><div class="sent-Message-Content">'+snapshot.val().message+'</div><div class="sent-Img-Holder"><img class="sent-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>'
//                     console.log("New Chat Message")
//                     priChats = 1
//                     priChatMessageCount++;
//                 }
//             } else {
//                 if(previousName2 == snapshot.val().Name && chatsLoaded == 0) {
//                     html2 = '<div class="rec-Message-Container"><div class="rec-Content-Img-Holder"><div class="rec-Message-Content" id="sent-Message-Alr">'+snapshot.val().message+'</div></div></div>'
//                     priChats = 1
//                 } else if(previousName2 != snapshot.val().Name && chatsLoaded == 0) {
//                     html2 = '<div class="rec-Content-Img-Holder"><div class="rec-Message-Content">'+snapshot.val().message+'</div><div class="rec-Img-Holder"><img class="rec-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>'
//                     priChats = 1
//                     priChatMessageCount++;
//                 }
//             }
//             previousName2 = snapshot.val().Name
//         }
//         // setTimeout(function() {
//         //     chatsLoaded = 1
//         //     console.log("Chats Loaded")
//         //     console.log(chatsLoaded)
//         //     console.log("chats loaded 1")
//         //     currentChatOpenLowerCase = currentChatOpen.toLowerCase()
//         //     console.log("Something")
//         //     // document.getElementById("pri-Message-Container").innerHTML = " "
//         //     chatsPriviouslyOpened.push(Name[index])
//         //     var html4 = "";
//         //     if(previousName2 == "") {
//         //         if(snapshot.val().Name == myName && chatsLoaded == 1) {
//         //             console.log("Your message")
//         //         } 
//         //         if(snapshot.val().Name != myName && chatsLoaded == 1) {
//         //             html4 = '<div class="rec-Content-Img-Holder"><div class="rec-Message-Content">'+snapshot.val().message+'</div><div class="rec-Img-Holder"><img class="rec-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>'
//         //             console.log("New Chat Message")
//         //             priChats = 1
//         //             priChatMessageCount++;
//         //             console.log("New Message Recived 1")
//         //         }
//         //         previousName2 = snapshot.val().Name
//         //     } else if(previousName2 != "") {
//         //         if(snapshot.val().Name == myName && chatsLoaded == 1) {
//         //             if(previousName2 == myName) {
//         //                 console.log("Your message")

//         //             } else {
//         //                 console.log("Your message")
//         //             }
//         //         } else {
//         //             if(previousName2 == snapshot.val().Name && chatsLoaded == 1) {
//         //                 html4 = '<div class="rec-Message-Container"><div class="rec-Content-Img-Holder"><div class="rec-Message-Content" id="sent-Message-Alr">'+snapshot.val().message+'</div></div></div>'
//         //                 priChats = 1
//         //                 priChatMessageCount++;
//         //                 console.log("New Message Recived 2")
//         //             } 
//         //             if(previousName2 != snapshot.val().Name && chatsLoaded == 1) {
//         //                 html4 = '<div class="rec-Content-Img-Holder"><div class="rec-Message-Content">'+snapshot.val().message+'</div><div class="rec-Img-Holder"><img class="rec-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>'
//         //                 priChats = 1
//         //                 priChatMessageCount++;
//         //                 console.log("New Message Recived 3")
//         //             }
//         //         }
//         //         previousName2 = snapshot.val().Name
//         //         document.getElementById("pri-Message-Container").innerHTML += html4;
//         //     }
//         // }, 200)
//         document.getElementById("pri-Message-Container").innerHTML += html2;
//         const chatbox5 = document.getElementById("pri-Message-Container")
//         chatbox5.scrollTo({ top: 9999999999999, behavior: 'auto' });
//     })
//     if(priChats == 0) {
//         // html2 = '<section id="send-A-Pri-Message"><svg id="chatbox-Icon-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"/></svg><svg id="alarm-Icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg><svg  id="phone-Icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg><p id="send-A-Pri-Message">Start a chat with'+ snapshot.val().Name +'</p></section>'
//         // document.getElementById("pri-Message-Container").innerHTML = html2;
//     } else {
        
//     }
// }

document.getElementById("pri-Send-Message-Textbox").addEventListener("keyup", function(){
    const sendTextbox = document.getElementById("pri-Send-Message-Textbox").value
    if(sendTextbox != "") {
        document.getElementById("pri-Send-Icon").style.fill = "rgb(0, 132, 255)"
    } else {
        document.getElementById("pri-Send-Icon").style.fill = "rgb(100, 100, 100)"
    }
})

document.getElementById("close-Pri-Chat-Icon").addEventListener("click", function(){
    document.getElementById("pri-Chat-Container").style.display = "none";
    const sendTextbox = document.getElementById("pri-Send-Message-Textbox")
    
    document.querySelector("body").style.overflowY = "auto"
    document.querySelector("body").style.height = "fit-content"
    document.getElementById("nav").style.display = "flex"
    sendTextbox.value = ""
    priChats = 0
    chatsLoaded = 0
    currentChatOpenLowerCase = ""
})

function checkMessage(message) {
    var curr_message = message

    if(curr_message.length >= 1) {
        if(curr_message[curr_message.length - 1] == " ") {
            const messageContent = document.getElementById("pri-Send-Message-Textbox").value = ""
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}

function sendPrivateMessage() {
    const messageContent = document.getElementById("pri-Send-Message-Textbox")
    var message = messageContent.value
    if(checkMessage(message)) {
        var lowerCaseContacts = []
        for(var i20=0;i20<contacts.length;i20++) {
            var currentIndexedName = contacts[i20].toLowerCase()
            lowerCaseContacts.push(currentIndexedName)
        }

        currentChatOpenLowerCase = currentChatOpen.toLowerCase()
        firebase.database().ref("TDSB/" + myName + " Chats/" + myName + " + " + currentChatOpenLowerCase).push().set({
            "Name": myName,
            "imgURL": imgURL,
            "message": message
        })

        firebase.database().ref("TDSB/" + currentChatOpenLowerCase + " Chats/" + currentChatOpenLowerCase + " + " + myName).push().set({
            "Name": myName,
            "imgURL": imgURL,
            "message": message
        })

        var html2 = "";
        // console.log("Previous Name: " + previousName2)
        // console.log(myName)
        // console.log(priChatMessageCount)

        if(previousName2 == "") {
            html2 = '<div class="sent-Content-Img-Holder"><div class="sent-Message-Content">'+message+'</div><div class="sent-Img-Holder"><img class="sent-Profile-Img" src="'+imgURL+'"></div></div>';
            console.log("New Chat Message")
            previousName2 = myName
        } else if(previousName2 != "") {
            if(previousName2 == myName) {
                html2 = '<div class="first-Pri-Message-Sent"><div class="sent-Message-Container"><div class="sent-Content-Img-Holder"><div class="sent-Message-Content" id="sent-Message-Alr">'+message+'</div></div></div></div>'
                // priChats = 1
                // priChatMessageCount++;
            } else {
                html2 = '<div class="sent-Content-Img-Holder"><div class="sent-Message-Content">'+message+'</div><div class="sent-Img-Holder"><img class="sent-Profile-Img" src="'+imgURL+'"></div></div>'
                // priChats = 1
                // priChatMessageCount++;
            }
            previousName2 = myName
        }
        document.getElementById("pri-Message-Container").innerHTML += html2;
        const chatbox5 = document.getElementById("pri-Message-Container")
        chatbox5.scrollTo({ top: 9999999999999, behavior: 'auto' });
        priChatMessageCount++
        // console.log(priChatMessageCount)

        if(contacts.includes(currentChatOpen)) {
            console.log(contacts)
        } else {
            currentChatOpenLowerCase = currentChatOpenLowerCase.toLowerCase()
            contacts.unshift(currentChatOpen)
            lowerCaseContacts.push(currentChatOpenLowerCase)
            // console.log(lowerCaseContacts)
            // console.log(currentChatOpenLowerCase)
            // console.log(contacts)
            firebase.database().ref("TDSB/Users/" + myName + "/usersChats/").set({
                "Contacts":lowerCaseContacts
            })
        }

        var otherChaterChats = []

        firebase.database().ref("TDSB/Users/" + currentChatOpenLowerCase + "/usersChats").on("value", function(snapshot) {
            if(snapshot.val() != "nobody") {
                firebase.database().ref("TDSB/Users/" + currentChatOpenLowerCase + "/usersChats/").once('value', function(snapshot2) {
                    snapshot2.forEach(
                        function(ChildShapshot) {
                            var name = ChildShapshot.val()
                            name = name
                            otherChaterChats.push(name)
                        }
                    )
                    var chatted = false
                    console.log("Other Chaters Chats:")
                    console.log(otherChaterChats)
                    console.log(myName)
                    
                    for(var i3=0;i3<otherChaterChats.length;i3++) {
                        if(otherChaterChats[i3] == myName) {
                            chatted = true
                            console.log(chatted)
                        }
                        console.log(chatted)
                    }

                    if(chatted == true) {
                        console.log("Haven't Chatted Before")
                    } else {
                        console.log("No your first time chatting")
                        otherChaterChats[0].splice(myName, 1);
                        console.log(otherChaterChats)
                    }



                    // if(otherChaterChats.indexOf(myName) > -1) {
                    //     console.log("not your first time chatting")
                    // } else {
                    //     console.log("first time chatting")
                    // }

                    // firebase.database().ref("TDSB/Users/" + currentChatOpenLowerCase + "/usersChats/").set({

                    // })
                })
            } else {
                var arrayOfNoContacts = [myName]
                firebase.database().ref("TDSB/Users/" + currentChatOpenLowerCase + "/usersChats/").set({
                    "Contacts": arrayOfNoContacts
                })
            }
        })

        messageContent.value = ""
    }

    return false
}

function newChat() {
    document.getElementById("chats-Profiles").innerHTML = ""
    const allChatsHolder = document.getElementById("chats-Profiles")
    var text = "Something Something Something"
    var html15 = ""
    for(var i15=0;i15<contacts.length;i15++) {
        html15 += '<div class="chat-Container" onclick="otherOpenChat(contacts['+ i15 +'], -10)">'
        html15 +=   '<div class="profile-Picture-Holder">'
        html15 +=       '<img class="dummy-Profile-Pic" src="'+ chatProfileImgURLs[i15] +'"/>'
        html15 +=   '</div>'
        // html15 +=   '<div class="users-Name">'+ contacts[i15] +'</div>'
        html15 +=   '<div class="name-Message-Container">'
        html15 +=       '<div class="users-Name">'+ contacts[i15] +'</div>'
        html15 +=       '<div class="users-Lase-Message">'+text+'</div>'
        html15 +=   '</div>'
        html15 +=   '<div class="options" onclick="options('+ contacts[i15] +')">'
        html15 +=       '<svg class="options-Icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">'
        html15 +=           '<path d="M0 0h24v24H0V0z" fill="none"/><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>'
        html15 +=       '</svg>'
        html15 +=   '</div>'
        html15 += '</div>'
    }
    allChatsHolder.innerHTML = html15
    console.log(contacts)
}

function otherOpenChat(Name, index) {

    document.querySelector("body").style.overflow = "hidden"
    document.querySelector("body").style.height = "100vh"
    document.getElementById("nav").style.display = "none"
    if(screen.innerWidth <= 750) {
        alert("Closed")
        const chatsPage = document.getElementById("search-Page-Holder").style
        chatsPage.display = "none"
        chatsPage.flexDirection = "column"
    }

    var name = ""
    if(index != -10) {    
        name = Name[index].toLowerCase()
    } else {
        name = Name.toLowerCase()
    }
    chatsLoaded = 0
    priChatMessageCount = 0
    firebase.database().ref("TDSB/Users/" + name).on("value", function (snapshot) {
        document.getElementById("pri-Chat-Name").textContent = snapshot.val().Name;
        currentChatOpen = snapshot.val().Name
        document.getElementById("pri-Chat-Img").setAttribute("src", snapshot.val().imgURL);
        document.getElementById("pri-Chat-Container").style.display = "flex";
    });

    previousName2 = ""
    currentChatOpenLowerCase = currentChatOpen.toLowerCase()
    document.getElementById("pri-Message-Container").innerHTML = " "
    // chatsPriviouslyOpened.push(name)
    firebase.database().ref("TDSB/" + myName + " Chats/" + myName + " + " + currentChatOpenLowerCase).on("child_added", function(snapshot){
        var html2 = "";
        if(previousName2 == "") {
            if(snapshot.val().Name == myName && chatsLoaded == 0) {
                html2 = '<div class="sent-Content-Img-Holder"><div class="sent-Message-Content">'+snapshot.val().message+'</div><div class="sent-Img-Holder"><img class="sent-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>';
                console.log("New Chat Message")
                priChats = 1
                priChatMessageCount++;
            } 
            if(snapshot.val().Name != myName && chatsLoaded == 0) {
                html2 = '<div class="rec-Content-Img-Holder"><div class="rec-Message-Content">'+snapshot.val().message+'</div><div class="rec-Img-Holder"><img class="rec-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>'
                priChats = 1
                priChatMessageCount++;
            }
            previousName2 = snapshot.val().Name
        } else if(previousName2 != "" && chatsLoaded == 0) {
            if(snapshot.val().Name == myName && chatsLoaded == 0) {
                if(previousName2 == myName && chatsLoaded == 0) {
                    html2 = '<div class="sent-Message-Container"><div class="sent-Content-Img-Holder"><div class="sent-Message-Content" id="sent-Message-Alr">'+snapshot.val().message+'</div></div></div>'
                    priChats = 1
                    priChatMessageCount++;
                } else {
                    html2 = '<div class="sent-Content-Img-Holder"><div class="sent-Message-Content" class="first-Pri-Message-Sent">'+snapshot.val().message+'</div><div class="sent-Img-Holder"><img class="sent-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>'
                    priChats = 1
                    priChatMessageCount++;
                }
            } else {
                if(previousName2 == snapshot.val().Name && chatsLoaded == 0) {
                    html2 = '<div class="rec-Message-Container"><div class="rec-Content-Img-Holder"><div class="rec-Message-Content" id="sent-Message-Alr">'+snapshot.val().message+'</div></div></div>'
                    priChats = 1
                } else if(previousName2 != snapshot.val().Name && chatsLoaded == 0) {
                    html2 = '<div class="rec-Content-Img-Holder"><div class="rec-Message-Content" class="first-Pri-Message-Sent">'+snapshot.val().message+'</div><div class="rec-Img-Holder"><img class="rec-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>'
                    priChats = 1
                    priChatMessageCount++;
                }
            }
            previousName2 = snapshot.val().Name
        }
        document.getElementById("pri-Message-Container").innerHTML += html2;
        const chatbox5 = document.getElementById("pri-Message-Container")
        chatbox5.scrollTo({ top: 9999999999999, behavior: 'auto' });
    })
    if(priChats == 0) {
        // html2 = '<section id="send-A-Pri-Message"><svg id="chatbox-Icon-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"/></svg><svg id="alarm-Icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg><svg  id="phone-Icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg><p id="send-A-Pri-Message">Start a chat with'+ snapshot.val().Name +'</p></section>'
        // document.getElementById("pri-Message-Container").innerHTML = html2;
    } else {
        
    }
    
    setTimeout(function() {
        chatsLoaded = 1
        console.log("Chats Loaded")
        console.log(chatsLoaded)    
        firstRun = false
    }, 200)

    firstRun = true
    numRan = 0

    currentChatOpenLowerCase = currentChatOpen.toLowerCase()
    console.log("Something")
    // document.getElementById("pri-Message-Container").innerHTML = " "
    chatsPriviouslyOpened.push(name)
    firebase.database().ref("TDSB/" + myName + " Chats/" + myName + " + " + currentChatOpenLowerCase).on("child_added", function(snapshot){
        var html2 = "";
        if(previousName2 == "" && numRan == 0 && firstRun == false) {
            if(snapshot.val().Name == myName) {

            } else if(snapshot.val().Name == currentChatOpenLowerCase) {
                html2 = '<div class="rec-Content-Img-Holder"><div class="rec-Message-Content">'+snapshot.val().message+'</div><div class="rec-Img-Holder"><img class="rec-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>'
                console.log("New Chat Message")
                priChats = 1
                priChatMessageCount++;
                console.log("New Message Recived")
            }
            previousName2 = snapshot.val().Name
            numRan = 1
            firstRun = false
        } else if(previousName2 != "" && numRan == 0 && firstRun == false) {
            if(snapshot.val().Name == myName) {
                if(previousName2 == myName) {

                } else {

                }
            } else if(snapshot.val().Name == currentChatOpenLowerCase) {
                if(previousName2 == snapshot.val().Name) {
                    html2 = '<div class="rec-Message-Container"><div class="rec-Content-Img-Holder"><div class="rec-Message-Content" id="sent-Message-Alr">'+snapshot.val().message+'</div></div></div>'
                    priChats = 1
                    priChatMessageCount++;
                    console.log("New Message Recived")
                } else {
                    html2 = '<div class="rec-Content-Img-Holder"><div class="rec-Message-Content">'+snapshot.val().message+'</div><div class="rec-Img-Holder"><img class="rec-Profile-Img" src="'+snapshot.val().imgURL+'"></div></div>'
                    priChats = 1
                    priChatMessageCount++;
                    console.log("New Message Recived")
                }
                previousName2 = snapshot.val().Name
            }
            numRan = 1
            firstRun = false
        }
        document.getElementById("pri-Message-Container").innerHTML += html2;
        const chatbox5 = document.getElementById("pri-Message-Container")
        chatbox5.scrollTo({ top: 9999999999999, behavior: 'auto' });
    })

    setInterval(function() {
        numRan = 0
    }, 1000)
    if(priChats == 0) {
        // html2 = '<section id="send-A-Pri-Message"><svg id="chatbox-Icon-3" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 4h16v12H5.17L4 17.17V4m0-2c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H4zm2 10h8v2H6v-2zm0-3h12v2H6V9zm0-3h12v2H6V6z"/></svg><svg id="alarm-Icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M12.5 8H11v6l4.75 2.85.75-1.23-4-2.37zm4.837-6.19l4.607 3.845-1.28 1.535-4.61-3.843zm-10.674 0l1.282 1.536L3.337 7.19l-1.28-1.536zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/></svg><svg  id="phone-Icon" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/></svg><p id="send-A-Pri-Message">Start a chat with'+ snapshot.val().Name +'</p></section>'
        // document.getElementById("pri-Message-Container").innerHTML = html2;
    } else {
        
    }
}

var gamesOpen = false

function openGames() {
    if(!gamesOpen) {
        document.getElementById("pri-Send-Message-Container").style.bottom = "60px"
        document.getElementById("pri-Message-Container").style.transition = ".25s"

        if(screen.innerWidth > 750) {
            // document.getElementById("pri-Message-Container").style.height = "calc(100vh - 300px)"
            // document.getElementById("pri-Message-Container").style.bottom = "120px"
        } else {
            document.documentElement.style.setProperty('--vh', `${vh}px`);
            document.getElementById("pri-Message-Container").style.height = "calc((var(--vh, 1vh) * 100) - 148px)"
            document.getElementById("pri-Message-Container").style.bottom = "120px"
        }
        gamesOpen = true
    } else {
        document.getElementById("pri-Send-Message-Container").style.bottom = "0px"
        document.documentElement.style.setProperty('--vh', `${vh}px`);
        document.getElementById("pri-Message-Container").style.height = "calc((var(--vh, 1vh) * 100) - 148px)"
        document.getElementById("pri-Message-Container").style.bottom = "60px"
        gamesOpen = false
    }
}
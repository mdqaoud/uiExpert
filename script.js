var database = [
    {
        username: "mohammed",
        password: "123"
    },
    {
        username: "ahmed",
        password: "1234"
    },
    {
        username: "watan",
        password: "12345"
    }

];

var newsfeed = [
    {
        username: "omar",
        timeline: "nice chance!!"
    },
    {
        username: "rabee",
        timeline: "great one!"
    },
    {
        username: "ghinaa",
        timeline: "how i can do this?"
    }
];


var usernamePrompt = prompt("Username");
var passwordPrompt = prompt("Password");
signIn(usernamePrompt,passwordPrompt);

function isUserValid(user,pass) {
    for (i=0 ; i<newsfeed.length ; i++){
        if(user === database[i].username && pass === database[i].password)
        return true;
    }
    return false;
}

function signIn(user,pass){
    if(isUserValid(user,pass))
        console.log(newsfeed);
    else {alert("Wrong !!!!!");}

/*     if(database[0].username === user &&
        database[0].password===pass){
        console.log(newsfeed);    
        } else {
            alert("Wrong data!!");
        } */
}


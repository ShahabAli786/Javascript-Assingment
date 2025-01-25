// TASK NO 1

let favoriteDish = prompt("Aapka pasandeeda Pakistani khaana kya hai?");
alert("Maza aayega! Aapka khaana taiyaar hai!");

// TASK NO 2

let name = prompt("Aapka naam kya hai?");
let city = prompt("Aapka sheher kya hai?");
alert(`Assalamu alaikum! ${name}, Aapka sheher kaisa hai?`);

// // TASK NO 3
let hasBike = prompt("Kya aapke paas bike hai? (haan/na)").toLowerCase();
if (hasBike === "haan") {
    alert("Aapki bike kitni purani hai? Kya aap usse rozana chalaate hain?");
}
// // TASK NO 4

let isEid = prompt("Kya aaj Eid ka din hai? (haan/na)").toLowerCase();
if (isEid === "haan") {
    alert("Eid Mubarak! Aapke ghar mein kya khana ban raha hai?");
}

// // TASK NO 5

let age = parseInt(prompt("Aapki umar kya hai?"));
let maritalStatus = prompt("Kya aap shadi-shuda hain? (haan/na)").toLowerCase();
if (age >= 25 && maritalStatus === "haan") {
    alert("Aap shadi-shuda hain aur 25 saal ke ho chuke hain!");
}

// // TASK NO 6

let favoriteCity = prompt("Aapka pasandeeda Pakistani sheher kya hai?");
if (favoriteCity.toLowerCase() === "lahore" || favoriteCity.toLowerCase() === "karachi") {
    alert("Aapka pasandeeda sheher Lahore ya Karachi hai!");
}

// // TASK 

let hasLicense = prompt("Kya aapke paas driving license hai? (haan/na)").toLowerCase();
if (hasLicense === "na") {
    alert("Aapke paas driving license nahi hai!");
}

// // TASK  

let favoriteCity = prompt("Aapka pasandeeda Pakistani sheher kya hai?");
if (favoriteCity.toLowerCase() === "lahore" || favoriteCity.toLowerCase() === "karachi" || favoriteCity.toLowerCase() === "islamabad") {
    alert("Aapke sheher ki khubsurati toh alag hi hai!");
} else {
    alert("Aapke sheher ki khubsurati toh alag hi hai!");
}

// // TASK 
let siblings = parseInt(prompt("Aapke kitne bhai-behen hain?"));
if (siblings > 5) {
    alert("Aapke bhai-behen toh bahut hain!");
} else if (siblings >= 3) {
    alert("Aapke bhai-behen toh theek hain!");
} else {
    alert("Aapke bhai-behen toh kam hain!");
}

// // TASK  

let likesPakistaniMusic = prompt("Kya aapko Pakistani music pasand hai? (haan/na)").toLowerCase();
let likesIndianMusic = prompt("Kya aapko Indian music pasand hai? (haan/na)").toLowerCase();

if (likesPakistaniMusic === "haan" && likesIndianMusic === "haan") {
    alert("Aapke music ka taste toh international hai!");
} else if (likesPakistaniMusic === "haan" || likesIndianMusic === "haan") {
    alert("Aapke music ka taste toh acha hai!");
} else {
    alert("Aapko music pasand nahi hai!");
}

// // TASK  

let languages = prompt("Aap kitni zubaanain bolte hain? (Urdu, English, Punjabi, etc.)").split(", ");
if (languages.length > 1) {
    alert("Aapke zubaan ka ilm toh bahut hai!");
} else {
    alert("Aap ek zubaan bolte hain!");
}

// // TASK 

let age = parseInt(prompt("Aapki umar kya hai?"));
let gradeLevel = parseInt(prompt("Aap kis grade mein hain? (11/12)"));
let gpa = parseFloat(prompt("Aapka GPA kya hai?"));

if (age >= 17) {
    if (gradeLevel === 11 || gradeLevel === 12) {
        if (gpa >= 3.5) {
            alert("Aap scholarship ke liye eligible hain!");
        } else {
            alert("Aap scholarship ke liye eligible nahi hain.");
        }
    } else {
        alert("Aap scholarship ke liye eligible nahi hain.");
    }
} else {
    alert("Aap scholarship ke liye eligible nahi hain.");
}


// // TASK 

let price = parseFloat(prompt("Product ki price kya hai?"));
let membershipStatus = prompt("Aapka membership status kya hai? (Gold/Platinum)").toLowerCase();

if (membershipStatus === "gold" || membershipStatus === "platinum") {
    if (price >= 1000) {
        alert("Aapko discount mil raha hai!");
    } else {
        alert("Aapko discount nahi mil raha hai.");
    }
} else {
    alert("Aapko
var firebaseConfig = {
    apiKey: "AIzaSyDxQs5p2ohPAhuWpilzyzLuy16aWu_T18I",
    authDomain: "capstne-redo.firebaseapp.com",
    databaseURL: "https://capstne-redo-default-rtdb.firebaseio.com",
    projectId: "capstne-redo",
    storageBucket: "capstne-redo.appspot.com",
    messagingSenderId: "882346528565",
    appId: "1:882346528565:web:2f93a50f405f8f434b067c",
    measurementId: "G-RGE4DPRSR5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
function login() {
    username = document.getElementById("logiName").value;
    firebase.database().ref("/").child(username).update({
        purpose: "adding person"
    });
    document.getElementById("login").style.display = "none";
    document.getElementById("orderDiv").style.display = "inline-block";
}
var orderItem = [];
function getItem(item, quantity) {
    console.log(item);
    quantitylb = document.getElementById(quantity).innerHTML;

    console.log(quantitylb);
    orderItem.push({
        itemName: item,
        quantities: quantitylb
    });
    console.log(orderItem);
}
function saveOrder() {
    var orderkey = firebase.database().ref(username).push().key;
    var orderData = {};
    orderData[orderkey] = orderItem;
    firebase.database().ref(username).push(orderItem);
}
function check() {
    getData();
}
items = [];
itemQuan = [];
finalItem = {};
function getData() {
    firebase.database().ref("/" + username).on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
                firebase_message_id = childKey;
                message_data = childData;
                //Start code
                console.log(firebase_message_id);
                console.log(firebase_message_id[0]);
                console.log(message_data);
                tableBody = document.getElementById("orderTable").getElementsByTagName("tbody")[0];
                for (var i = 0; i < message_data.length; i++) {
                    item = message_data[i]["itemName"];
                    console.log(item);
                    quantity = message_data[i]["quantities"];
                    console.log(quantity);
                    row = tableBody.insertRow(-1);
                    itemNameCell = row.insertCell(0);
                    quantityCell = row.insertCell(1);
                    itemNameCell.innerHTML = item;
                    quantityCell.innerHTML = quantity;
                    items.push(item);
                    itemQuan.push(quantity);
                    console.log(finalItem);
                }
                nameTag = "<h2>" + username + "</h2>";
                document.getElementById("name").innerHTML = nameTag;

                //End code
            }
        });
    });
}
var spinachScore = 0;
var kaleScore = 0;
var mexicanScore = 0;
var orangeScore = 0;
var strawberryScore = 0;
var pumpkinScore = 0;
var beanScore = 0;
var celleryScore = 0;
var lendlScore = 0;
var payaScore = 0;
var friedScore = 0;
var havaScore = 0;
var oatScore = 0;
var tanScore = 0;
var mutScore = 0;
var capScore = 0;
var cheeseScore = 0;
var avacScore = 0;
var vadaScore = 0;
var wingsScore = 0;
var berryScore = 0;
var beetScore = 0;
var amlaScore = 0;
var pomScore = 0;
var acaiScore = 0;
function home() {
    window.location = "index.html";
}
function contact() {
    window.location = "contact.html";
}
function faq() {
    window.location = "faq.html";
}
function health() {
    window.location = "index.html";
}
function add(item) {
    if (item === "spinach") {
        spinachScore++;
        document.getElementById("spinach_quantity").innerHTML = spinachScore;
    } else if (item === "kale") {
        kaleScore++;
        document.getElementById("kale_quantity").innerHTML = kaleScore;
    } else if (item === "mexican") {
        mexicanScore++;
        document.getElementById("mexican_quantity").innerHTML = mexicanScore;
    } else if (item === "orange") {
        orangeScore++;
        document.getElementById("orange_quantity").innerHTML = orangeScore;
    } else if (item === "strawberry") {
        strawberryScore++;
        document.getElementById("strawberry_quantity").innerHTML = strawberryScore;
    }
    else if (item === "pumpkin") {
        pumpkinScore++;
        document.getElementById("pumpkin_quantity").innerHTML = pumpkinScore;
    }
    else if (item === "bean") {
        beanScore++;
        document.getElementById("bean_quantity").innerHTML = beanScore;
    }
    else if (item === "cellery") {
        celleryScore++;
        document.getElementById("cellery_quantity").innerHTML = celleryScore;
    }
    else if (item === "lendl") {
        lendlScore++;
        document.getElementById("lendl_quantity").innerHTML = lendlScore;
    }
    else if (item === "paya") {
        payaScore++;
        document.getElementById("paya_quantity").innerHTML = payaScore;
    }
    else if (item === "fried") {
        friedScore++;
        document.getElementById("fried_quantity").innerHTML = friedScore;
    }
    else if (item === "hava") {
        havaScore++;
        document.getElementById("hava_quantity").innerHTML = havaScore;
    }
    else if (item === "oat") {
        oatScore++;
        document.getElementById("oat_quantity").innerHTML = oatScore;
    }
    else if (item === "tan") {
        tanScore++;
        document.getElementById("tan_quantity").innerHTML = tanScore;
    }
    else if (item === "mut") {
        mutScore++;
        document.getElementById("mut_quantity").innerHTML = mutScore;
    }
    else if (item === "cap") {
        capScore++;
        document.getElementById("cap_quantity").innerHTML = capScore;
    }
    else if (item === "cheese") {
        cheeseScore++;
        document.getElementById("cheese_quantity").innerHTML = cheeseScore;
    }
    else if (item === "avac") {
        avacScore++;
        document.getElementById("avac_quantity").innerHTML = avacScore;
    }
    else if (item === "vada") {
        vadaScore++;
        document.getElementById("vada_quantity").innerHTML = vadaScore;
    }
    else if (item === "wings") {
        wingsScore++;
        document.getElementById("wings_quantity").innerHTML = wingsScore;
    }
    else if (item === "berry") {
        berryScore++;
        document.getElementById("berry_quantity").innerHTML = berryScore;
    }
    else if (item === "beet") {
        beetScore++;
        document.getElementById("beet_quantity").innerHTML = beetScore;
    }
    else if (item === "amla") {
        amlaScore++;
        document.getElementById("amla_quantity").innerHTML = amlaScore;
    }
    else if (item === "pom") {
        pomScore++;
        document.getElementById("pom_quantity").innerHTML = pomScore;
    }
    else if (item === "acai") {
        acaiScore++;
        document.getElementById("acai_quantity").innerHTML = acaiScore;
    }
}
function subtract(item) {
    if (item === "spinach") {
        if (spinachScore > 0) {
            spinachScore--;
            document.getElementById("spinach_quantity").innerHTML = spinachScore;
        }
    } else if (item === "kale") {
        if (kaleScore > 0) {
            kaleScore--;
            document.getElementById("kale_quantity").innerHTML = kaleScore;
        }
    } else if (item === "mexican") {
        if (mexicanScore > 0) {
            mexicanScore--;
            document.getElementById("mexican_quantity").innerHTML = mexicanScore;
        }
    } else if (item === "orange") {
        if (orangeScore > 0) {
            orangeScore--;
            document.getElementById("orange_quantity").innerHTML = orangeScore;
        }
    } else if (item === "strawberry") {
        if (strawberryScore > 0) {
            strawberryScore--;
            document.getElementById("strawberry_quantity").innerHTML = strawberryScore;
        }
    } else if (item === "pumpkin") {
        if (pumpkinScore > 0) {
            pumpkinScore--;
            document.getElementById("pumpkin_quantity").innerHTML = pumpkinScore;
        }
    }
    else if (item === "bean") {
        if (beanScore > 0) {
            beanScore--;
            document.getElementById("bean_quantity").innerHTML = beanScore;
        }
    }
    else if (item === "cellery") {
        if (celleryScore > 0) {
            celleryScore--;
            document.getElementById("cellery_quantity").innerHTML = celleryScore;
        }
    }
    else if (item === "lendl") {
        if (lendlScore > 0) {
            lendlScore--;
            document.getElementById("lendl_quantity").innerHTML = lendlScore;
        }
    }
    else if (item === "paya") {
        if (payaScore > 0) {
            payaScore--;
            document.getElementById("paya_quantity").innerHTML = payaScore;
        }
    }
    else if (item === "fried") {
        if (friedScore > 0) {
            friedScore--;
            document.getElementById("fried_quantity").innerHTML = friedScore;
        }
    }
    else if (item === "hava") {
        if (havaScore > 0) {
            havaScore--;
            document.getElementById("hava_quantity").innerHTML = havaScore;
        }
    }
    else if (item === "oat") {
        if (oatScore > 0) {
            oatScore--;
            document.getElementById("oat_quantity").innerHTML = oatScore;
        }
    }
    else if (item === "tan") {
        if (tanScore > 0) {
            tanScore--;
            document.getElementById("tan_quantity").innerHTML = tanScore;
        }
    }
    else if (item === "mut") {
        if (mutScore > 0) {
            mutScore--;
            document.getElementById("mut_quantity").innerHTML = mutScore;
        }
    }
    else if (item === "cap") {
        if (capScore > 0) {
            capScore--;
            document.getElementById("cap_quantity").innerHTML = capScore;
        }
    }
    else if (item === "cheese") {
        if (cheeseScore > 0) {
            cheeseScore--;
            document.getElementById("cheese_quantity").innerHTML = cheeseScore;
        }
    }
    else if (item === "avac") {
        if (avacScore > 0) {
            avacScore--;
            document.getElementById("avac_quantity").innerHTML = avacScore;
        }
    }
    else if (item === "vada") {
        if (vadaScore > 0) {
            vadaScore--;
            document.getElementById("vada_quantity").innerHTML = vadaScore;
        }
    }
    else if (item === "wings") {
        if (wingsScore > 0) {
            wingsScore--;
            document.getElementById("wings_quantity").innerHTML = wingsScore;
        }
    }
    else if (item === "berry") {
        if (berryScore > 0) {
            berryScore--;
            document.getElementById("berry_quantity").innerHTML = berryScore;
        }
    }
    else if (item === "beet") {
        if (beetScore > 0) {
            beetScore--;
            document.getElementById("beet_quantity").innerHTML = beetScore;
        }
    }
    else if (item === "amla") {
        if (amlaScore > 0) {
            amlaScore--;
            document.getElementById("amla_quantity").innerHTML = amlaScore;
        }
    }
    else if (item === "pom") {
        if (pomScore > 0) {
            pomScore--;
            document.getElementById("pom_quantity").innerHTML = pomScore;
        }
    }
    else if (item === "acai") {
        if (acaiScore > 0) {
            acaiScore--;
            document.getElementById("acai_quantity").innerHTML = acaiScore;
        }
    }
}

function salad() {
    var spinach = "<div><h3 id='salad1'>Spinach Apple Salad</h3><button class = 'btnn btn btn-success' onclick='add(\"spinach\")'>+</button><label id='spinach_quantity'> 0 </label><button class = 'btnn btn btn-success' id='btn' onclick='subtract(\"spinach\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Spinach Apple Salad\", \"spinach_quantity\")'>Add Item</button></div>";
    var kale = "<div><h3 id='salad2'>Kale Salad</h3><button class = 'btnn btn btn-success' onclick='add(\"kale\")'>+</button><label id='kale_quantity'> 0 </label><button class = 'btnn btn btn-success' id='btn' onclick='subtract(\"kale\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Kale Salad\", \"kale_quantity\")'>Add Item</button></div>";
    var mexican = "<div><h3 id='salad3'>Mexican Salad</h3><button class = 'btnn btn btn-success' onclick='add(\"mexican\")'>+</button><label id='mexican_quantity'> 0 </label><button class = 'btnn btn btn-success' id='btn' onclick='subtract(\"mexican\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Mexican Salad\", \"mexican_quantity\")'>Add Item</button></div>";
    var orange = "<div><h3 id='salad4'>Fennel Orange Salad</h3><button class = 'btnn btn btn-success' onclick='add(\"orange\")'>+</button><label id='orange_quantity'> 0 </label><button class = 'btnn btn btn-success' id='btn' onclick='subtract(\"orange\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Fennel Orange Salad\", \"orange_quantity\")'>Add Item</button></div>";
    var strawberry = "<div><h3 id='salad5'>Strawberry Salad</h3><button class = 'btnn btn btn-success' onclick='add(\"strawberry\")'>+</button><label id='strawberry_quantity'> 0 </label><button class = 'btnn btn btn-success' id='btn' onclick='subtract(\"strawberry\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Strawberry Salad\", \"strawberry_quantity\")'>Add Item</button></div>";

    var salad_display = spinach + kale + mexican + orange + strawberry;
    document.getElementById("salad_name").innerHTML = salad_display;
}
function soup() {
    var pumpkin = "<div><h3 id='soup1'>Pumpkin Soup</h3><button class = 'btnn btn btn-success' onclick='add(\"pumpkin\")'>+</button><label id='pumpkin_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"pumpkin\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Pumpkin Soup\", \"pumpkin_quantity\")'>Add Item</button></div>";
    var bean = "<div><h3 id='soup2'>Spiced Black Bean Chicken Soup With Kale</h3><button class = 'btnn btn btn-success' id='btn' onclick='add(\"bean\")'>+</button><label id='bean_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"bean\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Spiced Black Bean Chicken Soup With Kale\", \"bean_quantity\")'>Add Item</button></div>";
    var cellery = "<div><h3 id='soup3'>Cellery Soup</h3><button class = 'btnn btn btn-success' onclick='add(\"cellery\")'>+</button><label id='cellery_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"cellery\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Cellery Soup\", \"cellery_quantity\")'>Add Item</button></div>";
    var lendl = "<div><h3 id='soup4'>Lendl Soup</h3><button class = 'btnn btn btn-success' onclick='add(\"lendl\")'>+</button><label id='lendl_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"lendl\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Lendl Soup\", \"lendl_quantity\")'>Add Item</button></div>";
    var paya = "<div><h3 id='soup5'>Traditional Paya Soup</h3><button class = 'btnn btn btn-success' onclick='add(\"paya\")'>+</button><label id='paya_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"paya\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Traditional Paya Soup\", \"paya_quantity\")'>Add Item</button></div>";

    var soup_display = pumpkin + bean + cellery + lendl + paya;
    document.getElementById("soup_name").innerHTML = soup_display;
}
function starters() {
    var fried = "<div><h3 id='start1'>Air Fried Egg Rolls</h3><button class = 'btnn btn btn-success' onclick='add(\"fried\")'>+</button><label id='fried_quantity'> 0 </label><button id'btn' class = 'btnn btn btn-success' onclick='subtract(\"fried\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Air Fried Egg Rolls\", \"fried_quantity\")'>Add Item</button></div>";
    var hava = "<div><h3 id='start2'>Hara Tava Paneer</h3><button class = 'btnn btn btn-success' onclick='add(\"hava\")'>+</button><label id='hava_quantity'> 0 </label><button id'btn' class = 'btnn btn btn-success' onclick='subtract(\"hava\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Hara Tava Paneer\", \"hava_quantity\")'>Add Item</button></div>";
    var oat = "<div><h3 id='start3'>Oats Mong Dal Tikki</h3><button class = 'btnn btn btn-success' onclick='add(\"oat\")'>+</button><label id='oat_quantity'> 0 </label><button id'btn' class = 'btnn btn btn-success' onclick='subtract(\"oat\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Oats Mong Dal Tikki\", \"oat_quantity\")'>Add Item</button></div>";
    var tan = "<div><h3 id='start4'>Tandori Chicken</h3><button class = 'btnn btn btn-success' onclick='add(\"tan\")'>+</button><label id='tan_quantity'> 0 </label><button id'btn' class = 'btnn btn btn-success' onclick='subtract(\"tan\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Tandori Chicken\", \"tan_quantity\")'>Add Item</button></div>";
    var mut = "<div><h3 id='start5'>Mutton Kebab</h3><button class = 'btnn btn btn-success' onclick='add(\"mut\")'>+</button><label id='mut_quantity'> 0 </label><button id'btn' class = 'btnn btn btn-success' onclick='subtract(\"mut\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Mutton Kebab\", \"mut_quantity\")'>Add Item</button></div>";

    var starters_display = fried + hava + oat + tan + mut;
    document.getElementById("starters_name").innerHTML = starters_display;
}
function snack() {
    var cap = "<div><h3 id='snack1'>Stuffed Capsicum Parcels</h3><button class = 'btnn btn btn-success' onclick='add(\"cap\")'>+</button><label id='cap_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"cap\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Stuffed Capsicum Parcels\", \"cap_quantity\")'>Add Item</button></div>";
    var cheese = "<div><h3 id='snack2'>Spinach Cheese Rolls</h3><button class = 'btnn btn btn-success' onclick='add(\"cheese\")'>+</button><label id='cheese_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"cheese\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Spinach Cheese Rolls\", \"cheese_quantity\")'>Add Item</button></div>";
    var avac = "<div><h3 id='snack3'>Avacado Sandwhich</h3><button class = 'btnn btn btn-success' onclick='add(\"avac\")'>+</button><label id='avac_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"avac\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Avacado Sandwhich\", \"avac_quantity\")'>Add Item</button></div>";
    var vada = "<div><h3 id='snack4'>Subudara Vada</h3><button class = 'btnn btn btn-success' onclick='add(\"vada\")'>+</button><label id='vada_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"vada\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Subudara Vada\", \"vada_quantity\")'>Add Item</button></div>";
    var wings = "<div><h3 id='snack5'>Baked Chicken Wings</h3><button class = 'btnn btn btn-success' onclick='add(\"wings\")'>+</button><label id='wings_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"wings\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Baked Chicken Wings\", \"wings_quantity\")'>Add Item</button></div>";

    var snack_display = cap + cheese + avac + vada + wings;
    document.getElementById("snack_name").innerHTML = snack_display;
}
function juice() {
    var berry = "<div><h3 id='juice1'>Cranberry Juice</h3><button class = 'btnn btn btn-success' onclick='add(\"berry\")'>+</button><label id='berry_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"berry\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Cranberry Juice\", \"berry_quantity\")'>Add Item</button></div>";
    var beet = "<div><h3 id='juice2'>Beet Juice</h3><button class = 'btnn btn btn-success' onclick='add(\"beet\")'>+</button><label id='beet_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"beet\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Beet Juice\", \"beet_quantity\")'>Add Item</button></div>";
    var amla = "<div><h3 id='juice3'>Amla Juice</h3><button class = 'btnn btn btn-success' onclick='add(\"amla\")'>+</button><label id='amla_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"amla\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Amla Juice\", \"amla_quantity\")'>Add Item</button></div>";
    var pom = "<div><h3 id='juice4'>Pomogranet Juice</h3><button class = 'btnn btn btn-success' onclick='add(\"pom\")'>+</button><label id='pom_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"pom\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Pomogranet Juice\", \"pom_quantity\")'>Add Item</button></div>";
    var acai = "<div><h3 id='juice5'>Acai Juice</h3><button class = 'btnn btn btn-success' onclick='add(\"acai\")'>+</button><label id='acai_quantity'> 0 </label><button id='btn' class = 'btnn btn btn-success' onclick='subtract(\"acai\")'>-</button> <br> <button class = 'btnn btn btn-success' onclick ='getItem(\"Acai Juice\", \"acai_quantity\")'>Add Item</button></div>";

    var juice_display = berry + beet + amla + pom + acai;
    document.getElementById("juice_name").innerHTML = juice_display;
}
const inputslider=document.querySelector("[datalengthSlider]");
const lengthdisplay=document.querySelector("[data-lengthNumber]");

const passworddisplay=document.querySelector("[data-passwordDisplay]");
const copybutton=document.querySelector("[data-copy]");
const copyMsg=document.querySelector("[data-copyMsg]"); 
const uppercasecheck=document.querySelector("#uppercase");
const lowercasecheck=document.querySelector("#lowercase");
const numbercheck=document.querySelector("#numbers");
const symbolcheck=document.querySelector("#symbols"); 
const indicator=document.querySelector("[data-indicator]");   
const generatebutton=document.querySelector(".generateButton"); 
const allcheckboxes=document.querySelectorAll("input[type=checkbox]");
const symbols="!@#$%^&*(){}[]=<>/,.";

let password="";
let passwordlength=10;
let checkcount=0;
//set strength circle color = grey
handleslider();

//set password length   
function handleslider(){
    inputslider.value=passwordlength;
    lengthdisplay.innerText=passwordlength;

}

function setindicator(color){
    indicator.style.backgroundColor=color;
    //shadow color
}

function getrandominteger(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

function randomnumber(){
    return getrandominteger(0,9);
}  

function generatelowercase(){
    return String.fromCharCode(getrandominteger(97,123)); 
}

function generateuppercase(){
    return String.fromCharCode(getrandominteger(65,91));
}

function generatesymbol(){ 
    const symbols="!@#$%^&*(){}[]=<>/,.";
    return symbols[getrandominteger(0,symbols.length)];
}
function calcstrength() {
    let hasupper = false; 
    let haslower = false;
    let hasnumber = false;
    let hassymbol = false;

    if (uppercasecheck.checked) {
        hasupper = true;
    }
    if (lowercasecheck.checked) {
        haslower = true;
    }
    if (numbercheck.checked) {
        hasnumber = true;
    }
    if (symbolcheck.checked) {
        hassymbol = true;
    }

    // Ensure passwordlength is defined before using it
    //let passwordlength = document.getElementById("password").value.length; 

    if (hasupper && haslower && (hasnumber || hassymbol) && passwordlength >= 8) {
        setindicator("green");
    } else if ((haslower || hasupper) && (hasnumber || hassymbol) && passwordlength >= 6) { 
        setindicator("orange");         
    } else {
        setindicator("red");
    }
}

async function copycontent(){
    try{
        await navigator.clipboard.writeText(passworddisplay.value); 
        copyMsg.innerText="Copied!";
    }
    catch(e){
        copyMsg.innerText="Failed to copy!";
    }
    // to make copy wala span visible 
    copyMsg.classList.add("active");

    setTimeout(()=>{
        copyMsg.classList.remove("active");
    },2000);
}

function shufflepassword(array) {
    // Fisher-Yates method
    for (let i = array.length - 1; i > 0; i--) {
        //random j find out using random function  
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array.join(''); // Join the array back into a string
}

function handlecheckboxchange(){
    checkcount=0;
    allcheckboxes.forEach((checkbox)=>{
        if(checkbox.checked){
            checkcount++;
        }
    });
    //special condition jab slider length=2 and checkboxcount=3 
    //  then by default length will be 3
    if(passwordlength < checkcount){
        passwordlength=checkcount;
        handleslider();
    }
}
allcheckboxes.forEach((checkbox)=>{
    checkbox.addEventListener('change',handlecheckboxchange);
})

inputslider.addEventListener('input',(e)=>{
    passwordlength=parseInt(e.target.value);
     
    handleslider();

})

copybutton.addEventListener('click',()=>{
    if(passwordlength > 0)
    copycontent();
})

generatebutton.addEventListener('click',()=>{
    //none of the checkbox are selected
    if(checkcount <=0) return ;
    if(passwordlength < checkcount){
        passwordlength=checkcount;
        handleslider();
    }
    console.log("starting the journey");

    //lets startt the journey to find new password and remove old password
    password="";
    //lets put the stuff mentioned in checkbox
    // if(uppercasecheck.checked) password+=generateuppercase();
    // if(lowercasecheck.checked) password+=generatelowercase();
    // if(numbercheck.checked) password+=randomnumber();
    // if(symbolcheck.checked) password+=generatesymbol();
    
    let functionarray=[];
    if(uppercasecheck.checked) functionarray.push(generateuppercase);
    if(lowercasecheck.checked) functionarray.push(generatelowercase);       
    if(numbercheck.checked) functionarray.push(randomnumber);
    if(symbolcheck.checked) functionarray.push(generatesymbol);

    //compulsury to have atleast one character from each checkbox
    for(let i=0; i<functionarray.length;i++){
        password+=functionarray[i]();
    }
    console.log("compulsury addituon done"); 

    //remaining addition
    for(let i=0;i<passwordlength-functionarray.length;i++){
        let randomfunction=getrandominteger(0,functionarray.length);
        console.log("random function is "+randomfunction);
        password+=functionarray[randomfunction]();
    }
    console.log("remaining addition done");
    //shuffle the password 
    password=shufflepassword(Array.from(password));
    console.log("shuffling done");
    //show in UI
    passworddisplay.value=password;
    console.log("ui done ");
    //calculate strength
    calcstrength();

});
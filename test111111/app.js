// 1 задание


const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test(str);
    
}



console.log(containsOnlyDigits("12345")); 
console.log(containsOnlyDigits("12a45")); 


//2 задание

let secondsPassed = 0;

const interval = setInterval (()=> {
    secondsPassed++
    console.log(`Прошла секунда(${secondsPassed})`);
}, 1000);

//3 задание

const count = () => {
        let i =1;
        const interval = setInterval(()=> {
            if (i< 10 ){
                console.log(i);
                i++
            }else {
                clearInterval(interval);
            }
        },1000);
}

count();

//4 задание

const block = document.querySelector(".block")

block.addEventListener("click", function(){
    if(block.classList.contains("blue")){
        block.style.backgroundColor = "";
        block.classList.remove("blue");
    }else{
        block.style.backgroundColor = "lightskyblue";
        block.classList.add("blue");
    }
});


//5 задание



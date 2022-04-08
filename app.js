let count = 0;

const value =document.querySelector("#value");
const btns =document.querySelectorAll(".btn");

console.log(btns);

btns.forEach(function (btn){
 btn.addEventListener("click", function(e){

console.log(e.currentTarget.classList)
const styles =e.currentTarget.classList;
console.log(styles)

if(styles.contains("decrease")){
    count --;
}

if(styles.contains("reset")){
    count = 0;
}

if(styles.contains("increase")){
    count ++;
}
value.textContent = count;
 });   
});
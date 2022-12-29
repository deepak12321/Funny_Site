
const btn = document.getElementById('btn1');
const para = document.getElementById('p1');
const para1 = document.getElementById('p2');
const options = document.getElementById('options');
const parentlink = 'https://v2.jokeapi.dev/joke/';
let link ="";
const initial ='Programming,Miscellaneous,Dark,Pun,Spooky,Christmas'
link = parentlink+initial;
let sec ="" ;

options.addEventListener('change',()=>{
    link = parentlink;
    sec = options.value;
    link = link+sec;
    console.log(link);
})


const generateJokes = ()=>{
    btn.innerHTML="Next Joke"

    const setHeader = ()=>{
        headers:{
            Accept:"application/jason";
        }
    }  

    fetch(link)
    .then((res)=>res.json()) 
    .then((data)=>{
        if(data.setup == undefined || data.delivery == undefined ){
            para.innerHTML=`Failed to fetch joke! Please try again ...`;
            para1.innerHTML="";
        }else{
        para.innerHTML=`${data.setup}`;
        para1.innerHTML=`${data.delivery} 🤣😂`;
        }
    })
    .catch((error)=>{
        console.log(error);
    })   
    
}

btn.addEventListener('click',generateJokes);


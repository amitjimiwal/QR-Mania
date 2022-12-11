const generatebtn=document.getElementById('generate-btn');
const input=document.getElementById('user-input');
const down=document.querySelector('#downloadbtn');
// const size=document.getElementById('qr-size').value;
function showspin(){
    document.querySelector('.loader').style.display='block';
}
function endspin(){
    document.querySelector('.loader').style.display='none';
}

function generate(url){
    const urlimg=document.querySelector('.qrcode');
    if(url.length>0)
    {   
       urlimg.setAttribute('src',`https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${url}`).
       urlimg.style.display='block';
       return;
    }
    else{
        alert('Enter Valid text or URL.');
        return;
    }
}


const mainfucn=()=>{
    const url=input.value;
    if(url.length>0){
        showspin();
        setTimeout(()=>{
            endspin();
            generate(url);
        },2000);
    }
    else{
        alert('Enter Valid Text.');
    }
}

generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    mainfucn();
});
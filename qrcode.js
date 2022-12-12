/*
This File Contains some dummy codes which is used for making QR codes with different Platforms.

KIndly IGnore this file..
Thanks 
@amitjimiwal
*/



// const generatebtn=document.getElementById('generate-btn');
// const downloadbtn=document.querySelector('.download-button');
function generateQRCode() {
    let website = document.getElementById("user-input").value;
    if (website) {
      let qrcodeContainer = document.getElementById("qrcode");
      qrcodeContainer.innerHTML = "";
      new QRious({
        element: qrcodeContainer,
        value: website
      });}   
}



// const qr =()=>{
//     var qrcode = new QRCode(document.getElementById("qrcode"), {
//         text: url,
//         width: 171,
//         height: 171,
//         colorDark : "#5868bf",
//         colorLight : "#ffffff",
//         correctLevel : QRCode.CorrectLevel.H
//     });
// }
// const showspinner=()=>{
//     document.querySelector('.loader').style.display='block';
// }
// const hidespinner=()=>{
//     document.querySelector('.loader').style.display='none';
// }
// generatebtn.addEventListener('click',()=>{
//     generateQRCode();
// })
const generatebtn=document.getElementById('generate-btn');

const showspin=()=>{
   document.querySelector('.loader').style.display='block';
}
const endspin=()=>{
    document.querySelector('.loader').style.display='none';
}


// const promise= fetch('https://api.qr-code-generator.com/v1/create?access-token=-eeijoOWfNgY3ni4h5Xr0hFtqT9IHr4V7e2ooNsDDu5o_qzBTWG0yrfryi_U1x1J');

// console.log(promise);

// console.log(promise.then((obj)=>{
//     console.log(obj);
// }))
const genenrate=()=>{
    const url=document.getElementById('user-input').value;
    console.log(url);
    const urlimg=document.querySelector('.qrcode');
    console.log(urlimg);
    if(url.length>0)
    {   
    //    urlimg.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url} `;
       urlimg.setAttribute('src','https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='+url).
       urlimg.style.display='block';
    }
    else{
        alert('Enter Valid text or URL.');
    }
}

generatebtn.addEventListener('click',(e)=>{
    e.preventDefault();
    genenrate();
})
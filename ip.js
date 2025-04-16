let cores = document.querySelectorAll(".cor")
let iphone = document.querySelector(".iphonecor")

cores.forEach ( (item)=>{
    console.log(item)
    item.addEventListener ("click",()=>{
        cores.forEach(cor => cor.classList.remove('selected'));
        item.classList.add('selected')
        iphone.classList.add('fade')

        setTimeout(() => {
            if(item.classList.contains('verde')){
              iphone.src = "./imgs/iphone_green.jpg";
            } else if(item.classList.contains('prata')){
              iphone.src = "./imgs/iphone_silver.jpg";
            } else if(item.classList.contains('golden')){
              iphone.src = "./imgs/iphone_golden.jpg";
            } else if(item.classList.contains('grafite')){
              iphone.src = "./imgs/iphone_grafite.jpg";
            } else if(item.classList.contains('azul')){
              iphone.src = "./imgs/iphone_blue.jpg";
            }
            iphone.classList.remove('fade');
        }, 200); 
      });
    });
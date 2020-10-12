main =()=>{
    let div = document.createElement('div');
    div.style.width ='100vw';
    div.style.height ='100vh';
    div.style.overflow='hidden';
    div.style.position ='absolute';
    div.style.top='0';
    div.style.left='0';
    div.style.zIndex=1;
    div.style.pointerEvents='none';
    for(let i=0;i<(window.innerHeight)/100+2;i++){
       for(j=0;j<3;j++){
        let rand = Math.random() * 50;
        let circle = document.createElement('div');
        circle.style.top=`${i*120 + rand}px`;
        rand = Math.random() *100;
        circle.style.left=`${rand}vw`;

        circle.classList.add('circle');
        div.appendChild(circle)
       }
    }
    document.body.appendChild(div);
}
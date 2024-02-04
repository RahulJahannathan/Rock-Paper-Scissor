const gameContainer=document.querySelector(".container"),
  userRes=document.querySelector(".user_res img"),
  cpuRes=document.querySelector(".cpu_res img"),
  res=document.querySelector(".res");
  optImg=document.querySelectorAll(".opt_img");

optImg.forEach((image,index) => {
    image.addEventListener("click",(e)=>{
        image.classList.add("active");
        userRes.src=cpuRes.src="determination.png";
        res.textContent="Wait...";
        optImg.forEach((image2,index2)=>{
            index!==index2&&image.classList.remove("active");
        });
        gameContainer.classList.add("start");
        let time=setTimeout(()=>{
            gameContainer.classList.remove("start");
            let imgSrc=e.target.querySelector("img").src;
        userRes.src=imgSrc;
        let randomNum=Math.floor(Math.random()*3);
        let cpuImg=["fist.png","five.png","scissor.png"];
        cpuRes.src=cpuImg[randomNum];
        let cpuval=["R","P","S"][randomNum];
        let userval=["R","P","S"][index];
        let outcomes={
            RR:"Draw",
            RP:"Cpu",
            RS:"User",
            PP:"Draw",
            PR:"User",
            PS:"Cpu",
            SS:"Draw",
            SR:"Cpu",
            SP:"User"
        };
        let outcomeval=outcomes[userval+cpuval];
        console.log(outcomeval);
        res.textContent=userval==cpuval?"Match Draw":`${outcomeval} Won!!`;
        },2500)
    });
});

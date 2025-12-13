addEventListener("scroll", (event) => { 
    let scroll = window.scrollY;
    console.log("scroll is : " + scroll);

    let what = document.getElementById("whatTitle")
    let itis = document.getElementById("itis")
    
    let buttonContainer = document.getElementById("buttonContainer")
    let downloadTitle = document.getElementById("downloadTitle")

    if (scroll > 850 && scroll < 1080) 
    {
        what.style.opacity = "1";
        
        itis.style.opacity = "1";
    }
    if (scroll > 1400) 
    {
        buttonContainer.style.opacity = "1";
        
        downloadTitle.style.opacity = "1";
    }
})
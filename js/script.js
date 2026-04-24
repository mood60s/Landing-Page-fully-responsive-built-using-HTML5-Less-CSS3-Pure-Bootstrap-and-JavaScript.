//==============================
//          Select Elements
//==============================
// Select Nav Links 
let NavLinks = document.querySelectorAll(".navbar ul li:not(:last-child) a");
// Select Toggler And Ul:
let toggler = document.querySelector(".toggler");
let ul= document.querySelector(".navbar ul")
// Select all Img Work
let allImgBox = document.querySelectorAll(".our-work .all");
// Select ALL Lis:
let allLis = document.querySelectorAll(".our-work ul li");
// Handle Class Nav Links
NavLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
        NavLinks.forEach((link) => link.classList.remove("active"));
        e.target.classList.add("active")
        if (e.target) {
            ul.classList.remove("active")
        }
    })
})

// Add event to Toggler For Class and Rotate:
toggler.addEventListener("click", (e) => {
    ul.classList.toggle("active")
   toggler.classList.toggle("rotate-toggler")
})
// Add Event to Every Li our-work,
allLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // Remove class From All Li
        allLis.forEach((li) => li.classList.remove("active"));
        // Add To Current Element Active Class
        e.target.classList.add("active")
        // Hide all Boxs  and if they Contain Class Show-work Remove it:
        allImgBox.forEach((box) => {
            box.style.display = "none" 
            box.style.transform = "translateY(100%)"
            box.style.opacity = "0"
            box.classList.remove("show-work")
        });
        // If He Click In Any Li Contain Class, ImgBox Show it<<:
        document.querySelectorAll(e.target.dataset.work).forEach((ele) => {
            // Show all Boxs Same To Class to Li:
            ele.style.display = "flex"
            // Add Class After 300mill To Chosen Boxs.
            setTimeout(() => {
                ele.classList.add("show-work")
            },300)
        })
    })
})
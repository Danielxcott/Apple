let nav = document.querySelector(".nav-links");
let btn = document.querySelector(".burger");
btn.addEventListener("click", () => {
  nav.classList.toggle("show-nav");
});
function change(x) {
  nav.classList.toggle("active");
  x.classList.toggle("active");
}

const tlIntro = gsap.timeline({
  scrollTrigger: {
    trigger: ".first-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});

// tlIntro.fromTo("nav",{backgroundColor:"white"},{backgroundColor:"black"})

const tlH = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    scrub: true,
    start: "-40%",
    end: "40%",
  },
});

const tlHRemove = gsap.timeline({
  scrollTrigger: {
    trigger: ".second-page",
    scrub: true,
    start: "-20%",
    end: "60%",
  },
});

tlH.fromTo(
  ".hightlight",
  { color: "rgba(255,255,255,0.6)" },
  { color: "rgba(255,255,255,1)", stagger: 1 }
);
tlHRemove.to(".hightlight", { color: "rgba(255,255,255,0.4)", stagger: 1 });

/*Split phone */
const tlSplit = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    scrub: true,
    start: "-20%",
    end: "30%",
  },
});

const tlSplitPin = gsap.timeline({
  scrollTrigger: {
    trigger: ".third-page",
    start: "0%",
    end: "100%",
    pin: true,
    pinSpacing: false,
  },
});
tlSplit.fromTo(".large-phone", { x: 120 }, { x: 0, duration: 2, stagger: 1 });
tlSplit.fromTo(
  ".small-phone",
  { x: -120 },
  { x: 0, duration: 2, stagger: 1 },
  "<"
);
tlSplit.fromTo(
  ".product-text-left",
  { x: -140, opacity: 1 },
  { x: 0, opacity: 0, duration: 2 },
  "<"
);
tlSplit.fromTo(
  ".product-text-right",
  { x: 140, opacity: 1 },
  { x: 0, opacity: 0, duration: 2 },
  "<"
);

/*Carousel */

const gallery = document.querySelector(".phone-gallery");
const slide = document.querySelectorAll(".phone-gallery-container");
const swatches = document.querySelectorAll(".swatches img");

let currentSwatch = "blue";
let Topindex = 2;

swatches.forEach((el, index) => {
  let coords = slide[index].getBoundingClientRect().left;

  console.log(coords);
  el.addEventListener("click", (e) => {
    let swatchName = e.target.getAttribute("swatch");
    if (currentSwatch === swatchName) return;

    let closeUp = document.querySelector("." + swatchName);
    gsap.set(closeUp, { zIndex: Topindex });
    gsap.fromTo(closeUp, { opacity: 0 }, { opacity: 1, duration: 1 });

    gsap.to(gallery, { x: -coords, duration: 1, ease: "back.out(1)" });
    Topindex++;
    currentSwatch = swatchName;
  });
});

const tlVideo = gsap.timeline({
  scrollTrigger: {
    trigger: ".fifth-page",
    scrub: true,
    start: "0%",
    end: "50%",
    pin: true,
  },
});

tlVideo.fromTo(".product-video", { currentTime: 0 }, { currentTime: 3 });

tlVideo.fromTo(
  ".product-info-container h3",
  { opacity: 0 },
  { opacity: 1, duration: 0.5, stagger: 0.25 }
);


ScrollTrigger.matchMedia({
  "(max-width: 980px)":function(){
    let tlParallexM = gsap.timeline({
      scrollTrigger:{
        trigger: ".final-page",
        start: "-20%",
        end: "100%",
        scrub:true
      }
    });
    tlParallexM.fromTo(".photo-describe", { opacity:0 }, { opacity:1 });
tlParallexM.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
tlParallexM.fromTo(".phone-video", { x: 0 }, { x: 150, duration:1,stagger:0.5 }, "<");
  }
})

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
  "(max-width: 480px)":function(){
    let tlParallexM = gsap.timeline({
      scrollTrigger:{
        trigger: ".final-page",
        start: "-20%",
        end: "100%",
        scrub:true
      }
    });
    tlParallexM.fromTo(".photo-describe", { opacity:0 }, { opacity:1 });
tlParallexM.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
tlParallexM.fromTo(".phone-video", { y: 0 }, { y: -250, duration:1,stagger:0.5 }, "<");
  }
})

  const tlParallex = gsap.timeline({
    scrollTrigger: {
      trigger: ".final-page",
      start: "0%",
      end: "100%",
      scrub: true,
    },
  });
  
  tlParallex.fromTo(".photo-describe", { x: -100 }, { x: 0, duration: 1 });
  tlParallex.fromTo(".portrait-container", { y: 0 }, { y: -80 }, "<");
  tlParallex.fromTo(".phone-video", { y: 0 }, { y: -400 }, "<");



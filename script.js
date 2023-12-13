// scroll to top functionality
const scrollUp = document.querySelector("#scroll-up");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

///////////////////////////////////////////////////////////
// SET CURRENT YEAR
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;



///////////////////////////////////////////////////////////
// MAKE MOBILE NAVIGATION WORK
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});



// //////////////////////////////////////////////////////////////
/////ANIMATED CURSOR 1 (WORKED)
var typing = new Typed(".text", {
  strings: ["", "Freelancer", "Frontend Developer", "Web Designer", "Web Developer"],
  typeSpeed: 100,
  backSpeed: 40,
  loop: true,
});


const cursor = document.querySelector("#cursor");
const cursorBorder = document.querySelector("#cursor-border");
const cursorPos = { x: 0, y: 0 };
const cursorBorderPos = { x: 0, y: 0 };

document.addEventListener("mousemove", (e) => {
  cursorPos.x = e.clientX;
  cursorPos.y = e.clientY;

  cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

requestAnimationFrame(function loop() {
  const easting = 8;
  cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;
  cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

  cursorBorder.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;
  requestAnimationFrame(loop);
});

document.querySelectorAll("[data-cursor]").forEach((item) => {
  item.addEventListener("mouseover", (e) => {
    if (item.dataset.cursor === "pointer") {
      cursorBorder.style.backgroundColor = "rgba(255, 255, 255, .6)";
      cursorBorder.style.setProperty("--size", "30px");
    }
    if (item.dataset.cursor === "pointer2") {
      cursorBorder.style.backgroundColor = "white";
      cursorBorder.style.mixBlendMode = "difference";
      cursorBorder.style.setProperty("--size", "80px");
    }
  });
  item.addEventListener("mouseout", (e) => {
    cursorBorder.style.backgroundColor = "unset";
    cursorBorder.style.mixBlendMode = "unset";
    cursorBorder.style.setProperty("--size", "50px");
  });
});




// //////////////////////////////////////////////////////////////////////////////////////
// //////////////////////////////////////////////////////////////
/////ANIMATED CURSOR 2 (WORKED)
// const queryCursor = document.querySelector(".cursor");

// var cursor = {
//   delay: 8,
//   _x: 0,
//   _y: 0,
//   endX: window.innerWidth / 2,
//   endY: window.innerHeight / 2,
//   cursorVisible: true,
//   cursorEnlarged: false,
//   $cursor: queryCursor,

//   init: function () {
//     this.outlineSize = this.$cursor.offsetWidth;
//     this.setupEventListeners();
//     this.animateDotOutline();
//   },

//   setupEventListeners: function () {
//     var self = this;

//     // On Hover Some Elements
//     document.querySelectorAll("img").forEach(function (el) {
//       el.addEventListener("mouseover", function () {
//         self.cursorEnlarged = true;
//         queryCursor.classList.add("active");
//       });
//       el.addEventListener("mouseout", function () {
//         self.cursorEnlarged = false;
//         queryCursor.classList.remove("active");
//       });
//     });

//     // On Hover Disappears
//     document.querySelectorAll("a, input, textarea").forEach(function (el) {
//       el.addEventListener("mouseover", function () {
//         self.cursorEnlarged = true;
//         queryCursor.classList.add("hidden");
//       });
//       el.addEventListener("mouseout", function () {
//         self.cursorEnlarged = false;
//         queryCursor.classList.remove("hidden");
//       });
//     });

//     document.addEventListener("mousemove", function (e) {
//       // Show the cursor
//       self.cursorVisible = true;
//       self.toggleCursorVisibility();

//       // Position the dot
//       self.endX = e.pageX;
//       self.endY = e.pageY;
//     });

//     // Hide/show cursor
//     document.addEventListener("mouseenter", function (e) {
//       self.cursorVisible = true;
//       self.toggleCursorVisibility();
//       self.$cursor.style.opacity = 1;
//     });

//     document.addEventListener("mouseleave", function (e) {
//       self.cursorVisible = true;
//       self.toggleCursorVisibility();
//       self.$cursor.style.opacity = 0;
//     });
//   },

//   animateDotOutline: function () {
//     var self = this;

//     self._x += (self.endX - self._x) / self.delay;
//     self._y += (self.endY - self._y) / self.delay;
//     self.$cursor.style.top = self._y + "px";
//     self.$cursor.style.left = self._x + "px";

//     requestAnimationFrame(this.animateDotOutline.bind(self));
//   },

//   toggleCursorVisibility: function () {
//     var self = this;

//     if (self.cursorVisible) {
//       self.$cursor.style.opacity = 1;
//     } else {
//       self.$cursor.style.opacity = 0;
//     }
//   }
// };
// cursor.init();

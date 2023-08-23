const ViewItems = () => {
  let items = document.getElementById("items");
  document.getElementById('typing-text').style.animation = `I am a ${arr[i]} `
  if (items.style.display != "grid") {
    items.style.display = "grid";
    items.style.animation = "animation 2s ease";
    items.style.width = "100%";
    items.style.gridTemplateColumns = "repeat(1,70%)";
    document.getElementById("navbar").style.flexDirection = "column";
    items.style.position = "relative";
    document.getElementById("navbar").style.animation =
      "navbar-animation 1.9s ease";
    document.querySelectorAll(".list-item").forEach((item) => {
      item.style.display = "flex";
      item.style.width = "100%";
      item.style.alignItems = "center";
      item.style.justifyContent = "center";
    });
    items.style.justifyContent = "center";
    items.style.rowGap = "1rem";
    items.style.paddingTop = ".5rem";
    items.style.paddingBottom = "2rem";
    items.style.textAlign = "center";
    setTimeout(() => {
      document.getElementById("navbar").style.height = "327px";
    }, 1890);
  } else {
    document.getElementById("navbar").style.animation =
    "navbar-reverse-animation 1.9s ease";
    items.style.animation = "reverse-animation 2s ease";
    setTimeout(() => {
      items.style.display = "none";
      document.getElementById("navbar").style.height = "80px";
      document.getElementById("navbar").style.justifyContent = "center";
    }, 1890);
  }
};
let show_blog = false
// Router
const Router = ()=>{
  if(show_blog===true){
  document.querySelector('.home').style.display = 'flex';
  document.querySelector('.About').style.display = 'flex';
  document.querySelector('.contact').style.display = 'flex';
  document.querySelector('.Blog-gesuture').style.display = 'none';
}
}
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.list-item');
  const hamburger = document.querySelector('.hamburger');
  const items = document.getElementById('items');
  // Add click event listeners to navigation links
  for (const link of navLinks) {
    link.addEventListener('click', smoothScroll);
  }
  
  // Toggle the navigation menu when clicking the hamburger icon
  hamburger.addEventListener('click', toggleMenu);
  
  // Smooth scrolling function
  function smoothScroll(e) {
    e.preventDefault();
    const targetClass = this.id; // Use class name instead of ID
    const targetSection = document.querySelector(`.${targetClass}`);
    
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      closeMenu();
    }
  }
  // Toggle navigation menu
  function toggleMenu() {
    items.classList.toggle('show');
  }
  
  // Close navigation menu
  function closeMenu() {
    items.classList.remove('show');
  }
});
// document.querySelector('.Blog-gesture').addEventListener('click', () => {
  //   change_page('Blog');});
  const change_page = (class_name) => {
    document.querySelector('.body').style.setProperty('--main-color', 'black');
    document.querySelector('.home').style.display = 'none';
    document.querySelector('.About').style.display = 'none';
    document.querySelector('.contact').style.display = 'none';
    document.querySelector(`.${class_name}`).style.display = 'block';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  show_blog = true;
};

// const delay = ms => new Promise(res => setTimeout(res, ms));
let i= 0
arr = ['Data Scientist and Analyst',"Front - End Web Developer","Python Programmer","Machine Learning Engineer"]
const change_text = ()=>{
  document.getElementById('typing-text').textContent = `${arr[i]} `
  // document.getElementById('typing-text').classList.add('wait')
  if (i===3){
    i=-1
  }
  i+=1
}
setInterval(() => {
  change_text()
}, 7010);

const video = document.querySelectorAll('video')[0];

// Call the resetAnimation function every 8 seconds
setInterval(restartVideo, 7000);
setInterval(resetAnimation, 7000);
function restartVideo() {
  video.currentTime = 0; // Reset video to the start
}

const element = document.getElementById('typing-text');
function resetAnimation() {
  element.style.display = 'hidden'; 
  element.style.animationPlayState = 'paused';

  // Set the animation to the starting position
  element.style.animation = 'none';
  element.offsetHeight; // Force a reflow to reset the animation

  // Restart the animation
  element.style.animation = 'typing-animation 7s infinite';
  element.style.animationPlayState = 'running';
  setTimeout(() => {
    element.style.display = 'flex'; 
  }, 500);
}

const image = document.querySelector('.hand-shake');
    function pauseAnimation() {
      image.style.animationPlayState = 'paused';
      setTimeout(() => {
        image.style.animationPlayState = 'running';
      }, 800);
    }

    image.addEventListener('animationiteration', pauseAnimation);

    
    document.addEventListener("DOMContentLoaded", function () {
      const classNamesArray = ['video-animation','profile','contact-details','card','gradient-border','phone-intro'];
      
      const observer = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if(entry.target.classList.value==='card'){
                entry.target.style.animation = 'zoomIn 2s forwards'
              }
              else{
                entry.target.style.transform = "translateX(0)";
                entry.target.style.transform = "translateZ(0)";}
              entry.target.style.opacity = "1";
                // document.querySelectorAll('.card').forEach(element => {
              //   element.classList.add('animate__zoomIn')
              // });
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.5 }
      );

      classNamesArray.forEach((className) => {
        const elements = document.querySelectorAll(`.${className}`);
        elements.forEach((element) => {
          observer.observe(element);
        });
      });
    });

    const copy_code = (index)=>{
      navigator.clipboard.writeText(document.querySelectorAll('.code')[index].textContent)
      document.querySelectorAll('.copy-code')[index].textContent = 'Copied !'
      setTimeout(() => {
          document.querySelectorAll('.copy-code')[index].textContent = 'Copy Code'
      }, 2500);
  }
    const copy_command = (index)=>{
      navigator.clipboard.writeText(document.querySelectorAll('.command')[index].textContent)
  }
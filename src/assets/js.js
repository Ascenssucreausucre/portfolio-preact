window.addEventListener("DOMContentLoaded", function () {
  const realgs = document.querySelectorAll(".realg");
  const banners = document.querySelectorAll(".banners");
  const nav = document.querySelector("nav");
  const next = document.querySelectorAll(".next");
  const more = document.querySelectorAll(".more");
  const navas = document.querySelectorAll("nav a");
  const menu = document.querySelector("nav>div");
  const logo = document.querySelector("#logo");
  const devmain = document.querySelectorAll(".devmain");
  const offset = nav.offsetHeight;

  window.addEventListener("scroll", () => {
    const { scrollTop } = document.documentElement;

    if (scrollTop === 0) {
      nav.classList.remove("active");
    } else {
      nav.classList.add("active");
    }
  });

  logo.addEventListener("click", () => {
    document.location.href = "./index.html";
  });

  const tablinks = document.querySelectorAll(".tab h3");
  const tabcontents = document.querySelectorAll(".tabc");

  function opentab(tabname) {
    for (const tablink of tablinks) {
      tablink.classList.remove("active");
    }

    for (const tabcontent of tabcontents) {
      tabcontent.classList.remove("active");
    }

    document.getElementById(tabname).classList.add("active");

    const clickedTabLink = document.querySelector(
      `.tab h3[data-tab="${tabname}"]`
    );
    if (clickedTabLink) {
      clickedTabLink.classList.add("active");
    }
  }

  tablinks.forEach(function (tablink) {
    tablink.addEventListener("click", function () {
      const tabname = tablink.getAttribute("data-tab");
      opentab(tabname);
    });
  });

  realgs.forEach((realg) => {
    const realds = realg.querySelector("div:nth-child(2)");
    window.addEventListener("scroll", () => {
      const { scrollTop, clientHeight } = document.documentElement;

      const topRealgVp = realg.getBoundingClientRect().top;

      if (scrollTop > (scrollTop + topRealgVp).toFixed() - clientHeight * 0.7) {
        realds.classList.add("active");
      }
    });

    // realg.addEventListener('click', function(event) {
    //     if (realds.classList.contains('active')) {
    //         realds.classList.toggle('rev');
    //     } else {
    //         realds.classList.remove('rev');
    //     }
    //     realds.classList.toggle('active');
    // });
  });

  banners.forEach((banner) => {
    window.addEventListener("scroll", () => {
      const { scrollTop, clientHeight } = document.documentElement;

      const topBannerVp = banner.getBoundingClientRect().top;
      const i = 0;

      if (
        scrollTop >
        (scrollTop + topBannerVp).toFixed() - clientHeight * 0.9
      ) {
        const animationDelay = 0.1 * i;
        banner.style.transitionDelay = `${animationDelay}s`;
        banner.classList.add("active");
        // i++;
      }
    });
  });
  next.forEach((button) => {
    button.addEventListener("click", () => {
      // Trouver l'élément parent spécifique au bouton (adapté à votre structure HTML)
      const parentElement = button.closest(".site-container");
      if (parentElement) {
        const elementWidth = parentElement.querySelector(".reald").clientWidth;

        if (button.classList.contains("active")) {
          // Scroll vers la gauche
          parentElement.scrollBy({
            left: -elementWidth,
            behavior: "smooth",
          });
        } else {
          // Scroll vers la droite
          parentElement.scrollBy({
            left: elementWidth,
            behavior: "smooth",
          });
        }

        button.classList.toggle("active");
      }
    });
  });

  // more.addEventListener('click', () =>{
  //     const carousel = document.querySelector('#mc>div>div:nth-child(2)');
  //     const del = document.querySelector('#mc>div>div:first-child');

  //     carousel.classList.toggle('active');
  //     del.classList.toggle('inactive');
  // })
  Vue.component("burger", {
    template: "#burger",
    data() {
      return {
        isOpen: false,
      };
    },
    methods: {
      toggle() {
        this.isOpen = !this.isOpen;

        if (this.isOpen) {
          menu.classList.add("active");
        } else {
          menu.classList.remove("active");
        }
      },
      scrollToSection(event) {
        event.preventDefault();

        menu.classList.remove("active");
        this.isOpen = false;

        const targetId = event.currentTarget.getAttribute("href");
        if (targetId) {
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
            const targetPosition = targetElement.offsetTop - offset;

            window.scrollTo({
              top: targetPosition,
              behavior: "smooth",
            });
          }
        }
      },
    },
    mounted() {
      navas.forEach((nava, index) => {
        if (index !== navas.length - 1 && !nava.href.endsWith(".pdf")) {
          nava.addEventListener("click", this.scrollToSection);
        }
      });
    },
  });

  new Vue({
    el: "#app",
  });

  more.forEach((moree, index) => {
    moree.addEventListener("click", function (event) {
      const currentDevMain = devmain[index];
      currentDevMain.classList.toggle("active");

      if (currentDevMain.classList.contains("active")) {
        this.textContent = "Fermer";
      } else {
        this.textContent = "En savoir plus";
      }
    });
  });
  const carouselContainers = document.querySelectorAll(
    "#totu > div > div:nth-child(2)"
  );

  carouselContainers.forEach((carouselContainer) => {
    let isDragging = false;
    let startX;
    let scrollLeft;

    carouselContainer.addEventListener("mousedown", (e) => {
      isDragging = true;
      startX = e.clientX;
      scrollLeft = carouselContainer.scrollLeft;
    });

    carouselContainer.addEventListener("mousemove", (e) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startX;
      carouselContainer.scrollLeft = scrollLeft - deltaX;
    });

    carouselContainer.addEventListener("mouseup", () => {
      isDragging = false;
    });

    carouselContainer.addEventListener("mouseleave", () => {
      isDragging = false;
    });
  });
});

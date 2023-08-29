
  const navMenu = document.getElementById("nav-menu"),
    navToogle = document.getElementById("nav-toogle"),
    navClose = document.getElementById("nav-close");
  // menushow
  if (navToogle) {
    navToogle.addEventListener("click", () => {
      navMenu.classList.add("show-menu");
    });
  }
  // hidden
  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  }
  const navLink = document.querySelectorAll(".nav__link");

  const linkaction = () => {
    const navMenu = document.getElementById("nav-menu");

    navMenu.classList.remove("show-menu");
  };
  navLink.forEach((n) => n.addEventListener("click", linkaction));

  const shadowHeader = () => {
    const header = document.getElementById("header");
    this.scrollY >= 50
      ? header.classList.add("shadow-header")
      : header.classList.remove("shadow-header");
  };
  window.addEventListener("scroll", shadowHeader);
  // email js
  const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p9y4hig",
        "template_4tbb4b9",
        "#contact-form",
        "VIaYkl6OQoPLeBi3w"
      )
      .then(
        () => {
          // show message
          contactMessage.textContent = "Message sent successfully ✅";

          // remove message
          setTimeout(() => {
            contactMessage.textContent = "";
          }, 5000);

          // kosognkan
          contactForm.reset();
        },
        () => {
          contactMessage.textContent = "Message not sent (service error)❌";
        }
      );
  };

  document.getElementById("contact-form").addEventListener("submit", sendEmail);

  // HITAAAAAM
  const themeButton = document.getElementById("theme-button");
  const darkTheme = "dark-theme";
  const iconTheme = "ri-sun-line";

  const selecetedTheme = localStorage.getItem("selected-theme");
  const selectedIcon = localStorage.getItem("selected-icon");

  const getcurretTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
  const getcurretnIcon = () =>
    themeButton.classList.contains(iconTheme)
      ? "ri-contrast-2-fill"
      : "ri-sun-line";

  if (selecetedTheme) {
    document.body.classList[selecetedTheme === "dark" ? "add" : "remove"](
      darkTheme
    );
    themeButton.classList[
      selectedIcon === "ri-contrast-2-fill" ? "add" : "remove"
    ](iconTheme);
  }
  themeButton.addEventListener("click", () => {
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);

    localStorage.setItem("selected-theme", getcurretTheme());
    localStorage.setItem("selected-icon", getcurretnIcon());
  });

  // sekerll
  const sections = document.querySelectorAll("section[id]");
  const scrollActive = () => {
    const scrollDown = window.scrollY;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 58;
      const sectionId = current.getAttribute('id');
      const sectionClass = document.querySelector('.nav__link[href="#' + sectionId + '"]');
      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
        sectionClass.classList.add('active-link');
      } else {
        sectionClass.classList.remove('active-link');
      }
    });
  };
  window.addEventListener('scroll', scrollActive)



  // sekerollup
  const scrollup = () => {
    const scrollup = document.getElementById("scroll-up");

    this.scrollY >= 350
      ? scrollup.classList.add("show-scroll")
      : scrollup.classList.remove("show-scroll");
  };
  window.addEventListener("scroll", scrollup)

  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration:2500,
    delay:400,
  })
  sr.reveal(`.home__perfil, .about__image`, {origin: 'right'})
  sr.reveal(`.home__name, .home__info, .about__container .section__title1, .about__info, .contact__data, .contact__social-arrow,.contact__social-description-1,.contact__social-description-2`, {origin: 'left'})
  sr.reveal(`.services__card, .projects__card, .contact__mail,.service,.project,.contact__social-links`, {interval: 100})



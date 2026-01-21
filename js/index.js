document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.nav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');

    const isOpen = hamburger.classList.contains('active');
    hamburger.setAttribute('aria-expanded', isOpen);
    nav.setAttribute('aria-hidden', !isOpen);
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav') && !e.target.closest('.hamburger') && nav.classList.contains('active')) {
      hamburger.classList.remove('active');
      nav.classList.remove('active');
      hamburger.setAttribute('aria-expanded', false);
      nav.setAttribute('aria-hidden', true);
    }
  });
});

window.addEventListener('load', () => {
    const checkbox1 = document.getElementById("hoge1");
    const checkbox2 = document.getElementById("hoge2");

    const label1 = document.getElementById("hoge1Label");
    const label2 = document.getElementById("hoge2Label");

    const hoge1Content = document.getElementById("left-container");
    const hoge2Content = document.getElementById("right-container");

    checkbox1.addEventListener("change", function () {
        if (this.checked) {
            label1.style.backgroundColor = "#D9FAFF";
            hoge1Content.style.backgroundColor = "#D9FAFF";
            hoge1Content.style.display = "block";

            label2.style.backgroundColor = "#BBDBF3";
            hoge2Content.style.display = "none";
            checkbox2.checked = false;
        } else {
            label1.style.backgroundColor = "white";
            hoge1Content.style.backgroundColor = "white";
        }
    });

    checkbox2.addEventListener("change", function () {
        if (this.checked) {
            label2.style.backgroundColor = "#BBDBF3";
            label1.style.padding = "10px 20px 10px 20px;";
            hoge2Content.style.backgroundColor = "#BBDBF3";
            hoge2Content.style.display = "block";

            label1.style.backgroundColor = "#D9FAFF";
            hoge1Content.style.display = "none";
            checkbox1.checked = false;
        } else {
            label2.style.backgroundColor = "white";
            hoge2Content.style.backgroundColor = "white";
        }
    });
});

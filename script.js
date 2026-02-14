function openBtn() {
    const card = document.getElementById("card");
    const letter = document.getElementById("letter");

    // Добавляем класс hide, чтобы карта медленно пропала
    card.classList.add("hide");

    // Через 1 секунду (совпадает с transition) скрываем полностью
    setTimeout(() => {
        card.style.display = "none";

        // Показываем письмо
        letter.classList.remove("hidden");
        letter.classList.add("show");
        letter.style.display = "flex";

        // Запускаем печатающий эффект
        startTyping();
    }, 1000);
}


const noButton = document.querySelector(".no-btn");

const phrases =[
    "Не-а",
    "Ну нееее",
    "Ммм.. не",
    "Попробуй ещё раз)",
    "Не догонишь)",
    "Ну-ну))",
    "))))))",
    "У тебя нет выбора)",
    "Открываааай",
    "Я жду"
];

let clickIndex=0;
let speed=200;

noButton.addEventListener("mouseenter", () => {
    const x = Math.random() * 400 - 150;
    const y = Math.random() * 400 - 150;

    speed = Math.max(50, speed - 10);
    noButton.style.transition=`transform ${speed}ms ease`;

    noButton.style.transform = `translate(${x}px, ${y}px)`;
});


noButton.addEventListener("click", () =>{
    if(clickIndex <phrases.length){
        noButton.textContent=phrases[clickIndex];
        clickIndex++;
    }
});

function createHeart(){
    const heart=document.createElement("div");
    heart.classList.add("heart");
    heart.textContent="❤️";

    heart.style.left=Math.random()*window.innerWidth+"px";

    document.getElementById("hearts-container").appendChild(heart);

    setTimeout(()=> {
        heart.remove();
    }, 4000);
}

setInterval(createHeart,500);

function startTyping() {
  const textEl = document.getElementById("letter-text");
  if (!textEl) return;

  const text = textEl.textContent;
  textEl.textContent = "";

  for (let i = 0; i < text.length; i++) {
    const span = document.createElement("span");
    span.textContent = text[i];
    span.style.opacity = 0;
    textEl.appendChild(span);

    setTimeout(() => {
      span.style.opacity = 1;
    }, i * 30);
  }
}

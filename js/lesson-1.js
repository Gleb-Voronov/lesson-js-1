                                         // Перша задача
// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().

    //let number = prompt ("Введіть число:");
   // number = Number(number);
   // if (number === 10) {
   //     alert('Вірно');
   // } else {
  //      alert('Невірно');
//  }
 

                                          //  Друга задача
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);

//const min = Math.floor(Math.random() * 60);
//if (min >= 0 && min < 15) {//
// //   alert(`${min} потрапляє у першу чверть`)
//} else if (min >= 15 && min < 30) {
//    alert(`${min} потрапляє у другу чверть`)
//} else if (min >= 30 && min < 45) {
//     alert (`${min} потрапляє у третю чверть`)
//} else if (min >= 45 && min < 59) {
//      alert (`${min} потрапляє у четверту чверть`)
//} else {
//     alert (`${min} вже не входе`)
// }
                                                // Третя задача
                                                
 // Змінна num може набувати 4 значення: '1', '2', '3' або '4' 
// (запитуй це значення у користувача через prompt). 
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач 
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
                                               
 //   let result = prompt ("Введіть число:");
 //   result = Number(result);
 //   if (result === 1) {
 //       alert('Зима');
 //   } else if  (result === 2 ){
 //       alert('Весна');
 //   } else if (result === 3) {
 //       alert('Літо');
 //   } else if (result === 4) {
 //       alert('Осінь')
 //   } else {
//        alert("Вибачте, але ви маєте ввести значення від 1 до 4 включно")
//  }
                                  // Четверта задача
 
// Отримуйте від користувача число (кількість хвилин) через prompt
// і виводьте у консоль рядок у форматі годин та хвилин.
// Приклад: користувач вводить в prompt '70' -> в консолі відобразиться '01:10'.
// Корисне посилання для відображення годин та хвилин у потрібному форматі ('01' замість '1'): 
// <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart#examples>

//const input = prompt('Введіть кількість хвилин:');
//const totalMinutes = parseInt(input, 10);
//if (isNaN(totalMinutes) || totalMinutes < 0) {//
//    console.log('Будь ласка, введіть коректне додатне число.');
//} else {
//    const hours = Math.floor(totalMinutes / 60);
//    const minutes = totalMinutes % 60;
//     const formattedHours = String(hours).padStart(2, '0');
//    const formattedMinutes = String(minutes).padStart(2, '0');
//     console.log(`${formattedHours}:${formattedMinutes}`)
//}
                                   // П'ята задача

// Напишіть код, який запитуватиме у користувача
// логін за допомогою prompt і виводить результат в консоль браузера

// Після цього додайте перевірку введеного користувачем значення:
// Якщо відвідувач вводить "Адмін",
// то prompt запитує пароль (не забудьте зберігти його у змінну для подальшої перевірки).
// Якщо нічого не ввели або натиснули Cancel,
// Вивести в alert строку "Скасовано"
// В іншому випадку вивести в alert рядок "Я вас не знаю"

// Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести в alert рядок "Добрий день!",
// в іншому випадку вивести в alert рядок "Невірний пароль!"  

const login = prompt('Введіть логін:');
console.log(`Введений логін: ${login}`);
if (login === 'Адмін') {
    const password = prompt('Введіть пароль:');
    if (password === 'Я головний') {
    alert('Добрий день!');
  } else {
    alert('Невірний пароль!');
  }
} else if (login === null || login === '') {
    alert("Скасовано");
} else {
    alert("Я вас не знаю");
 }
                                    //Задание №1

// let firstNumber = Number( prompt('Напишите число №1'));
// let secondNumber = Number (prompt('Напишите число №2'));

// if (firstNumber>secondNumber){
//     alert( ` Число ${firstNumber} больше числа ${secondNumber} `);
// } else if (firstNumber<secondNumber){
//     alert( ` Число ${firstNumber} меньше числа ${secondNumber} `);
// } else if (firstNumber===secondNumber){
//     alert('Числа равны!');
// } else {
//     alert('Такого числа нет');
// }

                                       //Задание №2

// let a = Number( prompt('Напишите число №1'));
// let action = prompt('Выберите действие (+ , - , / , *)');
// let b = Number (prompt('Напишите число №2'));
// let result;

// switch (action){
//     case '+':
//         result = a + b;
//         break;
//     case '-':
//         result = a - b; 
//         break;
//     case '/':
//         result = a + b;
//         break;
//     case '*':
//         result = a * b;
//         break;
//     default:
//         result = alert('Не коректноя операция');               
// }
// alert(result);




                                        //Задание №3

// let userAge = Number(prompt(' Укажите свой возрост')); 
// let minAge = 18 ;
// let maxAge = 60;
// let smallAge = 7;

// if (userAge > maxAge){
//     alert('Вам вход запрещен!!!')
// }else if (userAge<smallAge){
//     alert('Вы слишком малы')
// }else if(userAge > minAge){
//     alert('Добро пожаловать!')
// } else if(userAge <= minAge){
//    confirm('Вам разрешили родители?')
   
// } else if (userAge > maxAge){
//     alert('Вам вход запрещен!!!')
// }


// let userAge = Number(prompt('Возраст: '));

// if ((userAge >= 12 && userAge < 18)) ll ((userAge >= 60 && userAge < 80)){
//     const isAdults = confirm('Родители розрешили?');
//    if(isAdults){
//        alert('Проходите');
//    } else {
//        alert('Нельзя');
//    }
// } else if (' userAge<12 ll userAge>=80'){
//     alert('Нельзя')
// }

                                    //   ФУНКЦИИ
                                       //   Задание №1
//    -обычная функция                                 
//  function getSum(a,b){
//    return a + b;
// }
// getSum(10,30)
// getSum(4,9)
    //  -стрелочная 
// const getSum = (a,b) => a + b;

                                //  Задание №2
                   
// let num1 = Number(prompt('Напишите число №1'));
// let num2 = Number(prompt('Напишите число №2'));

// const sum = (num1,num2)=>num1 + num2;

// const res1 = sum(num1,num2);
// console.log(`res1`, res1 );

// function greetingsUser(){
//     let userName = prompt('Ваше имя?');
//     let userAge = Number( prompt ('Ваш возрост?'));
    

//     if(userAge>=30){
//         alert (`Здраствуйте ${userName} `);
//     } else{
//         alert(`Привет <${userName}>`);
//     }
// };

// greetingsUser()

                            //    Задание №3

// const getPow = (number, pow = 2) =>  number ** pow;

// getPow(2)
// getPow(3,3)
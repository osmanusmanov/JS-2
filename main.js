var block = +prompt('Введите свой возраст');
if( block> 0 && block <= 18) {
    alert('Вы ещё молоды, Вам нужно учиться');
}else if( block> 18 && block <= 50) {
    alert('Вам нужно работать');
}else if( block> 50 && block <=59) {
    alert('Вам скоро на пенсию');
}else if( block> 59 && block <=100) {
    alert('Вы пенсионер');
}else {
    alert('Что-то пошло не так');
}


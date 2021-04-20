/** Сложность O(n), Ω(n) */

function linearSearch(list, item){
    let answer = -1;

    for(let i = 0; i < list.length; i++){
        if(list[i] === item)
            answer = i
    }
        
    return answer;
}

/** Сложность O(n), Ω(1) */

function betterLinearSearch(list, item){
    let answer = -1;

    for(let i = 0; i < list.length; i++){
        if(list[i] === item)
            return answer;
    }
        
    return answer;
}

const nums = []

for(let i = 0; i < 100000000; i++){
    nums.push(Math.floor(Math.random()*10))
}

/** Сложность O(n), Ω(1) */

function sentinelLinearSearch(list, item){

    /** Сохраняю последний элемент массива в last. На его место ставлю item */

    const last = list[list.length - 1];
    list[list.length - 1] = item;

    /** Запускаю цикл по массиву без операции сравнения. Благодаря тому, 
     * что последний элемент это искомый элемент, то i никогда не станет 
     * равно длине массива, максимум length -1.
     * Как только что-то найдется, i перестанет расти.  */

    let i = 0;
    for(;;){
        if(list[i] !== item)
            i++;
        else 
            break;
    }

    /** Возвращаю последний элемент на место */
    list[list.length - 1] = last;
    
    /** Проверяю, если i меньше длины массива минус 1 или последний элемент равен
     * искомому, тогда элемент был найден, возвращаю индекс. */
    if(i < list.length - 1)
        return i;
    
    if(last === item)
        return list.lenght - 1;

    return -1;
}

console.time()
linearSearch(nums, 11);
console.timeEnd();
console.time()
betterLinearSearch(nums, 11);
console.timeEnd();
console.time()
sentinelLinearSearch(nums, 11);
console.timeEnd();
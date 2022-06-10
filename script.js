// Activity 5: Fizz Buzz
    let num = "17"

    if (num % 3 == 0) {
        console.log("fizz")
    } else if (num % 5 == 0) {
        console.log("buzz")
    } else if (num % 3 == 0 && 5 == 0) {
        console.log("fizz buzz")
    } else {
        console.log(`${num}`)
    }

// Activity 5: Random number, divisible by 7 or not
    for  (let i=0; i<6; i++) {
            let ranNum = Math.round((Math.random() * 30)+1)
            
            if (ranNum % 7 == 0) {
                console.log(`${ranNum} is divisible by 7`) 
            } else {
                console.log(`${ranNum} is not divisible by 7`) 
            }
        }

// Activily 2: Random numbers, console log them each
    for  (let i=0; i<6; i++) {
        console.log(Math.round((Math.random() * 50)+1));
    }

// Activity 3: Loop that counts down from 9
    let countArray = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
    for  (let i=0; i<10; i++) {
        console.log(countArray[i])
    }

// Activity 2: Object that returns if they are eating/drinking
    const pet = {
        name: "John",
        typeOfPet: "Dalmation",
        age: 7,
        colour: "White and Black",
        eat: false,
        drink: false,
        petEatOrDrink(){
            if (this.eat == true && this.drink == true){
                console.log(`${this.name} is eating and drinking`)
            } else if (this.eat == false && this.drink == true) {
                console.log(`${this.name} is drinking`)
            } else if (this.eat == true && this.drink == false) {
                console.log(`${this.name} is eating`)
            } else {
                console.log(`${this.name} is not doing anything`)
            }
        }
    }
    pet.petEatOrDrink()

// Activity 3: Password length checker
    let password = "oeijo"

    if (password.length < 8) {
        console.log("Password is too short")
    } else {
        console.log(`${password}`)
    }

// Activity 4: Checks to see if a number is divisible by 3 or 5
    let num1 = 2
    
    if (num1 % 3 == 0 || num1 % 5 == 0) {
        console.log(`The number: ${num1} is divisible by 3 or 5`) 
    } else {
        console.log(`The number: ${num1} is not divisible by 3 or 5`) 
    }
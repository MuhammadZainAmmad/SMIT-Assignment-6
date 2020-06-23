//Chapter 21-25(String Methods)

//Task#1
// var first=prompt('Enter your first name:')
// var last=prompt('Enter your last name:')
// var full=first+last
// document.write('Welcome '+first+' '+last+' to my page')

// //Task#2
// var favPhone= prompt("Enter your favourte phone")
// var str=favPhone.length
// alert('My favourite phone is '+favPhone)
// alert('string: '+str)


// //Task#3
// var str='Pakistani'
// var index=str.indexOf('n')
// alert('String is: '+str+"\n"+"Index of 'n' is: "+index)

// //Task#4
// var sentence='Hello world'
// var index=sentence.lastIndexOf('l')
// alert('String is: '+sentence+'\n'+"Index of '1' is: "+index)

// //Task#5
// var str='Pakistani'
// character=str.charAt('3')
// alert('String is: '+str+"\n"+"Character at index '3' is: "+character)

// //Task#6
// var first=prompt('Enter your first name:')
// var last=prompt('Enter your last name:')
// var full=first.concat(last)
// document.write('Welcome '+full +' to my page')

//Task#7
// var city1="Hyderabad"
// var city2=city1.replace('Hyder',"Islam")
// alert('City: '+city1+"\n"+'After Replacement: '+city2)

//Task#8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// replaced=message.replace(/and/g,'&');
// alert('Original Message: '+message+'\n'+'Replaced Message: '+replaced);

// //Task#9
// str='472'
// num=Number(str)
// alert('Value: '+str+'\n'+'Type: '+typeof(str)+'\n'+'Value: '+num+'\n'+'Type: '+typeof(num))

//Task#10
// str1=prompt('Enter a sentence:')
// str2=str1.toUpperCase()
// alert('User Input: '+str1+'\n'+'Upper Case: '+str2)

//Task#11
// str1=prompt('Enter a sentence:')
// str2=str1.toLowerCase()
// alert('User Input: '+str1+'\n'+'Lower Case: '+str2)

//Task#12
// var num=35.36
// var str=num.toString()
// wholeNo=str.slice(0,2)+str.slice(3)
// alert(wholeNo)

//Task#13 ??????
// userName=prompt('Enter your name')
// for (var i=0;i<user.length();i++){
//     if (charCodeAt(i)==="33"){
//         prompt('Enter only characters')
//     }
// }

//Task#14




//Chapter 26-30 (Maths methods)

//Task#1 and Task#2
// num=+prompt('Enter a positive integer')
// round=Math.round(num)
// ceil=Math.ceil(num)
// floor=Math.floor(num)
// alert('number: '+num+'\n'+'Rounf off value: '+round+'\n'+'Floor value: '+floor+'\n'+'Ceil value: '+ceil)



//Chapter 31-34 (Date Methods)

//Task#1
// document.write(new Date())

//Task#2
// var date=new Date()
// date=date.toString()
// currentMonth=date.slice(4,7)
// alert("Current month: "+currentMonth)

//Task#3
// var date=new Date()
// date=date.toString()
// currentDay=date.slice(0,3)
// alert("Today is "+currentDay)

//Task#4
// var date=new Date()
// date=date.toString()
// currentDay=date.slice(0,3)
// if (currentDay==='Sat' || currentDay==='Sun'){
//     alert("It's Funday")
// }

//Task#5
// var date=new Date()
// date=date.toString()
// currentDay=date.slice(8,10)
// currentDay=Number(currentDay)
// if (currentDay<16){
//     alert('First fifteen days of the month')
// }
// else{
//     alert('Last days of the month')
// }















//Chapter 35-38 (Functions)


//Task#1

// function currentDate() {
//     document.write(new Date())
// }
// currentDate()

// //Task#2
// function greeting (fName,lName){
//     alert('Welcome to my page '+fName+' '+lName)
// }
// fName=prompt('Enter your first name')
// lName=prompt('Enter your first name')
// greeting(fName,lName)

//Task#3

// function add(a,b){
//     alert(a+b)
// }
// a=+prompt('Enter your first number')
// b=+prompt('Enter your second number')
// add(a,b)

//Task#4

// function cal(num1,num2,operator){
//     if (operator==="+"){
//         document.write(num1+num2)
//     }
//     else if (operator==="-"){
//         document.write(num1-num2)
//     }
//     if (operator==="*"){
//         document.write(num1*num2)
//     }
//     if (operator==="/"){
//         document.write(num1/num2)
//     }
// }
// num1=+prompt('Enter first number')
// num2=+prompt('Enter second number')
// operator=prompt("Choose an operation '+,-,*,/' ")
// cal(num1,num2,operator)

//Task#5

// function square(num){
//     alert(num**2)
// }
// num=+prompt('Enter number to be squared')
// square(num)

//Task#6

// function factorial(num){
//     if (num===1){
//         return 1
//     }
//     return (num*factorial(num-1))   
// }
// num=+prompt('Enter number to get its factorial')
// alert(factorial(num))

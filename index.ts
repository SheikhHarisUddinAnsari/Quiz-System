#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import { type } from "os";
import Choice from "inquirer/lib/objects/choice.js";
import Choices from "inquirer/lib/objects/choices.js";

class make_Question{
  ques:string
  ans:string
  options:string[]
  constructor(ques:string,ans:string,...options:string[]){
this.ques=ques 
this.ans=ans
this.options=options
  }
}//this class is used to make ques objects in the lower code




const ques1=new make_Question(`Which city is the capital of Pakistan ?`,`Islamabad`,`Karachi`,`Lahore`,`Multan`,`Islamabad`)
const ques2=new make_Question(`Which city is the capital of India ?`,`Dehli`,`Dehli`,`Kolkatta`,`Mumbai`,`Indore`)
const ques3=new make_Question(`Which city is the capital of Afghanistan ?`,`Kabul`,`Kandahar`,`Herat`,`Kabul`,`Jalalabad`)
const ques4=new make_Question(`Which city is the capital of United States ?`,`Washington DC`,`New Work`,`Chicago`,`Washington DC`,`San Diego`)
const ques5=new make_Question(`Which city is the capital of China ?`,`Beijing`,`Chongqing`,`Shenzhen`,`Shanghai`,`Beijing`)
//these are the objects which we made using class make_Question 


let ques_Array=[ques1.ques,ques2.ques,ques3.ques,ques4.ques,ques5.ques]
//In this array we assign all the questions of our quiz  
let ans_Array=[ques1.ans,ques2.ans,ques3.ans,ques4.ans,ques5.ans]
//In this array we assign all the answers of our quiz
let options=[ques1.options,ques2.options,ques3.options,ques4.options,ques5.options]
//In this array we assign all the questions of our quiz

async function takeQuiz(){
let num=0
let result:string[]=[]


async function quiz(num:number,ques_Array:string[],ans_Array:string[],options:string[][],result:string[]) {
  await inquirer
 .prompt([
  {
    name:`ques`,
    type:`list`,
    message:`${ques_Array[num]}`,
    choices:[`${options[num][0]}`,`${options[num][3]}`,`${options[num][1]}`,`${options[num][2]}`]
  }
 ]) 
 .then((ans) => {
    if(num+3<=ques_Array.length)
{
  if (ans.ques==ans_Array[num]) {
    result.push(`${num+1} Correct`)
  } else {result.push(`${num+1} Wrong`)
    
  }
  quiz(++num,ques_Array,ans_Array,options,result)
}
else{console.log(``)
if (ans.ques==ans_Array[num]) {
  result.push(`${num+1} Correct`)
} else {result.push(`${num+1} Wrong`)
  
}
console.log(chalk.bgYellowBright.blue.underline.bold(`Result:`))
console.log(chalk.bgYellowBright.blue.underline.bold(`${result}`))
}
 })
 //this functions takes all the answers of questions from the user checks it and then tell the result at the end of quiz

 
}

quiz(num,ques_Array,ans_Array,options,result)
}
 
takeQuiz()
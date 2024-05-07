#! /usr/bin/env node
const inquirer=require('inquirer');
const chalk=require('chalk');
let marks=10
let wrong=0
let q1=inquirer.prompt([{
    name:'Q1',
    type:'checkbox',
    message:'Where is pakistan located? Mention continent.',
    choices:['Africa','Asia','Antarctica'],
},
{
    name:'Q2',
    type:'checkbox',
    message:'what is capital of sindh',
    choices:['Karachi','Lahore','Multan'],
},
{
    name:'Q3',
    type:'checkbox',
    message:'1 MB equals to : ',
    choices:['1024 B', '1024 kB', '1000'],
},
{
    name:'Q4',
    type:'checkbox',
    message:'Deep learning is inspired by',
    choices:['Human Brain', 'Microprocesssor', 'Microcontroller'],
},
{
    name:'Q5',
    type:'checkbox',
    message:'For Question/Answer type, we use ___________ in Typescript.',
    choices:['Inquirer', 'Chalk','css'],
},
{
    name:'Q6',
    type:'checkbox',
    message:'3+4-3=_____',
    choices:['1','9','4'],
},
{
    name:'Q7',
    type:'checkbox',
    message:'Calculate percentage.45/90=_____%',
    choices:['45','50','65'],

},
{
    name:'Q8',
    type:'checkbox',
    message:'Generative AI is a type of ___________',
    choices:['AI','IoT','Robotics'],
},
{
    name:'Q9',
    type:'checkbox',
    message:'cloud computing stores data using hosted devices over the _________ .',
    choices:['wire','TV','Internet'],
},
{
    name:'Q10',
    type:'checkbox',
    message:'Name the IT initiative program at governer house __________ .',
    choices:['PIAIC','GIAIC','FCPS'],
}

])
.then(answer=>{
    console.log('\n',chalk.bgGreen('Answers given by you: '), answer,'\n');
    console.log('\n', chalk.bgMagenta('RESULT OF QUIZ'),'\n')
    if(answer.Q1=='Asia'){
        console.log('Question 1 : correct!! You got ', chalk.green(marks), 'marks')}
        if(answer.Q1=='Africa'||answer.Q1=='Antarctica'){
            console.log('Q1 wrong: ',chalk.red(wrong), 'marks')
        }
        if(answer.Q2=='Karachi'){
            console.log('Question 2: correct!! You got ', chalk.green(marks), 'marks')}
            if(answer.Q2=='Lahore' || answer.Q2=='Multan'){
                console.log('Q2 wrong: ',chalk.red(wrong), 'marks')
            }
            let a=answer.Q1
            if(a=='Asia'){
                a=marks
                console.log('Marks obtained Q1:',a)}
                let b=answer.Q2
            if(b=='Karachi'){
            b=marks
        console.log('Marks obtained Q2:',b) }
        if(answer.Q3=='1024 kB'){
            console.log('Question 3: correct!! You got ', chalk.green(marks), 'marks')}
            if(answer.Q3=='1024 B' || answer.Q3=='1000'){
                 console.log('Q3 wrong: ',chalk.red(wrong), 'marks')
            }
            let c=answer.Q3
            if(c=='1024 kB'){
            c=marks
        console.log('Marks obtained Q3:',c) }
        if(answer.Q4=='Human Brain'){
            console.log('Question 4: correct!! You got ', chalk.green(marks), 'marks')}
            if(answer.Q4=='Microprocessor' || answer.Q4=='Microcontroller'){
                 console.log('Q4 wrong: ',chalk.red(wrong), 'marks')
            }
            let d=answer.Q4
            if(d=='Human Brain'){
            d=marks
        console.log('Marks obtained Q4:',d) }
        if(answer.Q5=='Inquirer'){
            console.log('Question 5: correct!! You got ', chalk.green(marks), 'marks')}
            if(answer.Q5=='chalk' || answer.Q5=='css'){
                 console.log('Q5 wrong: ',chalk.red(wrong), 'marks')
            }
            let e=answer.Q5
            if(e=='Inquirer'){
            e=marks
        console.log('Marks obtained Q5:',e) }
        if(answer.Q6=='4'){
            console.log('Question 6: correct!! You got ', chalk.green(marks), 'marks')}
            if(answer.Q6=='1' || answer.Q6=='9'){
                 console.log('Q6 wrong: ',chalk.red(wrong), 'marks')
            }
            let f=answer.Q6
            if(f=='4'){
            f=marks
        console.log('Marks obtained Q6:',f) }
        if(answer.Q7=='50'){
            console.log('Question 7: correct!! You got ', chalk.green(marks), 'marks')}
            if(answer.Q7=='45' || answer.Q7=='65'){
                 console.log('Q7 wrong: ',chalk.red(wrong), 'marks')
            }
            let g=answer.Q7
            if(g=='50'){
            g=marks
        console.log('Marks obtained Q7:',g) }
        if(answer.Q8=='AI'){
            console.log('Question 8: correct!! You got ', chalk.green(marks), 'marks')}
            if(answer.Q8=='IoT' || answer.Q8=='Robotics'){
                 console.log('Q8 wrong: ',chalk.red(wrong), 'marks')
            }
            let h=answer.Q8
            if(h=='AI'){
            h=marks
        console.log('Marks obtained Q8:',h) }
        
        if(answer.Q9=='Internet'){
            console.log('Question 9: correct!! You got ', chalk.green(marks), 'marks')}
            if(answer.Q9=='wire' || answer.Q9=='TV'){
                 console.log('Q9 wrong: ',chalk.red(wrong), 'marks')
            }
            let i=answer.Q9
            if(i=='Internet'){
            i=marks
        console.log('Marks obtained Q9:',i) }
        if(answer.Q10=='GIAIC'){
            console.log('Question 10: correct!! You got ', chalk.green(marks), 'marks')}
            if(answer.Q10=='PIAIC' || answer.Q10=='FCPS'){
                 console.log('Q10 wrong: ',chalk.red(wrong), 'marks')
            }
            let j=answer.Q10
            if(j=='GIAIC'){
            j=marks
        console.log('Marks obtained Q10:', j )}
         
            })
           

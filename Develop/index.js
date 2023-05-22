const inquirer = require('inquirer');
const generateReadMe = require('./utils/generateMarkdown');
const fs = require('fs');

const questions = () => {
    return inquirer
    .prompt([
    {
        type:'input',
        name: 'github',
        message:'Enter your GitHub username.',
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log('Please enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type:'input',
        name: 'email',
        message:'Enter your email address.',
        validate: nameInput => {
            if (nameInput){
                return true;
            } else {
                console.log('Please enter your email address.');
                return false;
            }
        }   
},
{
    type:'input',
    name: 'title',
    message:'What is your project called?',
    validate: nameInput => {
        if (nameInput){
            return true;
        } else {
            console.log('Please enter the name of your project.');
            return false;
        }
    }
},
{
    type:'input',
    name: 'description',
    message:'Write a brief description about your project.',
    validate: nameInput => {
        if (nameInput){
            return true;
        } else {
            console.log('Please enter a description of your project.');
            return false;
        }
    }
},
{
    type:'list',
    name: 'license',
    message:'What type of license will your project utilize?',
    choices: ['Apache', 'MIT', 'GNU', 'None'],
    default:["None"],
    validate: nameInput => {
        if (nameInput){
            return true;
        } else {
            console.log('Please choose a license, or enter None if not applicable.');
            return false;
        }
    }
},
{
    type:'input',
    name: 'install',
    message:'List the steps required to install your project.',
    validate: nameInput => {
        if (nameInput){
            return true;
        } else {
            console.log('Please list the steps required to install your project.');
            return false;
        }
    }
},
{
    type:'input',
    name: 'usage',
    message:'How is your project intended to be used?',
    validate: nameInput => {
        if (nameInput){
            return true;
        } else {
            console.log('Please enter the use of your project or application.');
            return false;
        }
    }
},
{
    type:'input',
    name: 'test',
    message:'What command will be used to run your project?',
    default:'Node'
},
{
    type:'input',
    name: 'contributors',
    message:'How can someone contribute to your project?',
   default:'Send a message to the email listed in the project repository.'
}
    ]);
};

const writeFile = data => {
     fs.writeFile('README.md', data, err =>  {
    if (err){
        console.log(err);
        return;
    } else {
        console.log("Your README has been successfully generated.")
    }
})

.then(questions => {
    return generateReadMe(questions);
})
.then(data => {
    return writeFile(data);
})
.catch(err => {
    console.log(err)
})
};

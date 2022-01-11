const commandsList = document.querySelector('.commands-list');
const commandsArray = ['hello', 'goodbye', 'ask', 'mute', 'kick', 'ban'];


for(let i=0; i<commandsArray.length; i++) {

    let divClassName = 'div-command-'+commandsArray[i];

    const newDiv = document.createElement('div');
    newDiv.classList.add(divClassName, 'div-command');

    newDiv.textContent = commandsArray[i];

    commandsList.appendChild(newDiv);
};
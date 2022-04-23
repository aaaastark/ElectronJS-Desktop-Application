const { ipcRenderer } = require('electron');

Close_Menu_Button.addEventListener('click',()=>{
    ipcRenderer.send('close-menu-button');
})


Maximize_Menu_Button.addEventListener('click', ()=>{
    ipcRenderer.send('maximize-menu-button');
})


Minimize_Menu_Button.addEventListener('click', ()=>{
    ipcRenderer.send('minimize-menu-button');
})

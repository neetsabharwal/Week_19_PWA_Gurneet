const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    butInstall.style.visibility = 'visible';

    // TODO: Implement a click event handler on the `butInstall` element
    butInstall.addEventListener('click', () => {
        event.prompt();        
        
        event.userChoice.then((choice) => {
            if (choice.outcome === 'accepted') {
                butInstall.setAttribute('disabled', true);
                butInstall.classList.add('disabled');
                butInstall.textContent = 'Installed';
            }
        })
    });
});


// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('Text Editor Online has been installed.', event);
});

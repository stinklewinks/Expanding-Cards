const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        if(panel.classList.contains('active')){
            removeActiveClasses();
            panel.classList.remove('active');
        }
        else {
            panel.classList.add('active');
        }
    });
});

function removeActiveClasses(){
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}
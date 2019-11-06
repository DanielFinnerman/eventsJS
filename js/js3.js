function asTabs(node) {
    let tabs = Array.from(node.querySelectorAll('div'));
    let buttons = [];
    let butdiv = document.createElement('div');
    node.insertBefore(butdiv, node.firstChild);
    for (let i = 0; i < tabs.length; i++) {
        let tab = tabs[i];
        let button = document.createElement('button');
        if (i > 0) tab.style.display = 'none';
        else button.style.color = 'green';
        button.textContent = tab.getAttribute('data-tabname');
        button.addEventListener('click', () => {
            for (let but of buttons) but.style.color = 'black';
            button.style.color = 'green';
            for (let tab of tabs) {
                if (tab.getAttribute('data-tabname') === button.textContent) tab.style.display = '';
                else tab.style.display = 'none';
            }
        });
        butdiv.appendChild(button);
        buttons.push(button);
    }
}
asTabs(document.querySelector('tab-panel'));
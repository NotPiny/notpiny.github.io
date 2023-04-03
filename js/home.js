function OnButtonPressed(button) {
    function OpenLink(link, target) {
        const a = document.createElement('a')
        a.href = link

        a.dispatchEvent(new MouseEvent('click', {
            view: window,
            ctrlKey: true
        }))

        a.remove()
    }

    if (button == 'Github') {
        OpenLink('https://github.com/NotPiny')
    }

    if (button == 'Discord') {
        navigator.clipboard.writeText('Piny#1000')
        alert('Copied to clipboard!')
    }

    if (button == 'Links') {
        OpenLink('https://bit.ly/m/Piny')
    }
}
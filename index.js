function OnButtonPressed(button) {
    if (button == 'Github') {
        window.open('https://github.com/NotPiny')
    }

    if (button == 'Discord') {
        navigator.clipboard.writeText('Piny#1000')
        alert('Copied to clipboard!')
    }

    if (button == 'Links') {
        window.open('https://bit.ly/m/Piny')
    }
}
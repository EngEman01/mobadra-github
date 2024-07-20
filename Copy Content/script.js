function copyToClipboard() {
    var content = document.getElementById("content-to-copy").textContent;
    navigator.clipboard.writeText(content)
        .then(() => {
            console.log(content);
            window.alert('Content copied to clipboard')
            // var content2 = document.getElementById("content-to-past").textContent = content;
        })
        .catch((error) => {
            console.error('Failed to copy content: ', error);
        });
}
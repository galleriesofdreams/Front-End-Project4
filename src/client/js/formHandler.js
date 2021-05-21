function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value;
    const data = {
        formText
    }
    if (Client.checkForName(formText)) {
        fetch('http://localhost:8081/addData', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                document.getElementById('results').innerHTML = res.message
                document.getElementById('error').innerHTML = 'error' + res.error;
                document.getElementById('model').innerHTML = 'model' + res.model;
                document.getElementById('score').innerHTML = 'score' + res.score;
                document.getElementById('agreement').innerHTML = 'agreement' + res.agreement;
                document.getElementById('subject').innerHTML = 'subject' + res.subject;
                document.getElementById('confidence').innerHTML = 'confidence' + res.confidence;
                document.getElementById('irony').innerHTML = 'irony' + res.irony;
            })
    };
}
export { handleSubmit }
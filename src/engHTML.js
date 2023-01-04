// Return HTML containing engineer's information

function engHTML(data) {

    return `
            <div id = "Info" class = "Info">
                <h3>${data.getName()}</h3>
                <h3>Engineer</h3>
                <div class = "test">
                    <div>ID: ${data.getId()}</div>
                    <div>Email: ${data.getEmail()}</div>
                    <div>Github: ${data.getGithub()}</div>               
                </div>
            </div>
    `
}

module.exports = engHTML;
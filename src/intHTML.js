// Return HTML containing Intern's information

function intHTML(data) {

    return `
            <div id = "Info" class = "Info">
                <h3>${data.getName()}</h3>
                <h3>Intern</h3>
                <div class = "test">
                    <div>ID: ${data.getId()}</div>
                    <div>Email: ${data.getEmail()}</div>
                    <div>School: ${data.getSchool()}</div>               
                </div>
            </div>

    `
}

module.exports = intHTML;
// Return HTML containing managers's information

function manHTML(data) {

    return `
            <div id = "Info" class = "Info">
                <h3>${data.getName()}</h3>
                <h3>Manager</h3>
                <div class = "test">
                    <div>ID: ${data.getId()}</div>
                    <div>Mail: ${data.getEmail()}</div>
                    <div>Office number: ${data.getOfficeNumber()}</div>               
                </div>
            </div>
    `
}


module.exports = manHTML;
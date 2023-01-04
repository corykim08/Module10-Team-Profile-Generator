// Base HTML including all information about employees

function baseHTML(data) {

    return `
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Profile</title>
        <link rel="stylesheet" href="./dist/css/style.css">
    </head>

    <body>
        <!-- HEADER START -->
        <header class="header-title">
            <h1 class="center-align text-uppercase">My Team</h1>
        </header>
        <!-- HEADER END -->

        <section id = "Name" class = "Name">
            ${data}
        </section>
    </body>

</html>
    `
};

module.exports = baseHTML;

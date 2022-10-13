
function createreadme(data) {
    return `
#Title
${data.name}
${data.getLicense}

# Description
${data.descr}

# Table of Contents 
* [Installation](#-install)
* [Usage](#-use)
* [License](#-License)
* [Contributing](#-Contributing)
* [Tests](#-Tests)
* [Questions](#-Contact-info)
    
# install
${data.install}

# use
${data.use}

# License 
${data.lic}
 

# Contributing 
${data.contribute}

# Tests
${data.tests}

# Contact-info 
* GitHub Username: ${data.gitname}
* Contact Email: ${data.email}

`;
}

 
module.exports = createreadme;
const { Octokit } = require('@octokit/rest');

// contains personal access token
const config = require('./config');
const octokit = new Octokit({
    auth: config.token
});


async function createPrivateRepository() {
    const orgName = 'engaged-finches'; 
    const repoName = 'delete-me-rest'; 
    const repoDescription = 'Your repository description'; 

    try {
        const response = await octokit.request('POST /orgs/:org/repos', {
            org: orgName,
            name: repoName,
            private: true,
            issues: true,
            projects: true,
            description: repoDescription,
        });

        console.log('Repository created:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to create a private repository
createPrivateRepository();

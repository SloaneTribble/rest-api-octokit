const { Octokit } = require('@octokit/rest');

// contains personal access token
const config = require('./config');
const octokit = new Octokit({
    type: 'token',
    auth: config.token,
    username: 'SloaneTribble'
});

// Within your organization create a private repository with issues and projects enabled and add a description of your choosing.
async function createPrivateRepository(repoName) {
    const orgName = 'engaged-finches'; 
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
        console.log('Id: ', response.data.node_id);
        return response.data.node_id;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

let repoName = "sloane-delete-me" + Math.random();
// Call the function to create a private repository
// let newRepoId = createPrivateRepository(repoName);

// Create a pull request and an issue with just a simple title and body inside that repository.

// create an issue
async function createIssue(repoName) {
    // owner can be individual or organization
    const owner = 'engaged-finches';  

    try {
        const response = await octokit.request('POST /repos/:owner/:repo/issues', {
            owner: owner,
            repo: repoName,
            title: "Bug detected",
        });

        console.log('Issue created:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

repoName = "delete-me-rest";

// createIssue(repoName);

// create a PR

// TODO: update to be more dynamic
async function createPR(repoName) {
    // owner can be individual or organization
    const owner = 'engaged-finches';  

    try {
        const response = await octokit.request('POST /repos/:owner/:repo/pulls', {
            owner: owner,
            repo: repoName,
            // update to use id from issue created (?)
            title: "Fix bug #1",
            head:"engaged-finches:fix",
            base:"main"
        });

        console.log('PR created:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// createPR(repoName);
// Get and display the repository you created, as well as the issue and pull request you made inside of it.

// get repo overview
async function getRepo(repoName) {
    // owner can be individual or organization
    const owner = 'engaged-finches';  

    try {
        const response = await octokit.request('GET /repos/:owner/:repo', {
            owner: owner,
            repo: repoName,
        });

        console.log('Repo retrieved:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// getRepo(repoName);

// get repo issues
async function getIssues(repoName) {
    // owner can be individual or organization
    const owner = 'engaged-finches';  

    try {
        const response = await octokit.request('GET /repos/:owner/:repo/issues', {
            owner: owner,
            repo: repoName,
        });

        console.log('Repo retrieved:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// getIssues(repoName);

// get PRs

async function getPullRequests(repoName) {
    // owner can be individual or organization
    const owner = 'engaged-finches';  

    try {
        const response = await octokit.request('GET /repos/:owner/:repo/pulls', {
            owner: owner,
            repo: repoName,
        });

        console.log('Repo retrieved:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

getPullRequests(repoName);
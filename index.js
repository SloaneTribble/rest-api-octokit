const { Octokit } = require('@octokit/core');

// contains personal access token
const config = require('./config');
const octokit = new Octokit({
    auth: config.token
});


// Example: Basic query to get information about the authenticated user
async function getUserInfo() {
    try {
        const response = await octokit.request('GET /user');
        console.log('User Info:', response.data);
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// Call the function to get user info
getUserInfo();

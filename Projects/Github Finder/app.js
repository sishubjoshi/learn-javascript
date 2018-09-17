// init
const github = new Github;
// init UI
const ui = new UI;
// Search Input
const searchUser = document.getElementById('searchUser');

// search input event listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target.value;

    if (userText !== '') {
        // Make http call
        github.getUser(userText)
            .then(data => {

                if (data.profile.message === 'Not Found') {
                    // show alert
                    ui.showAlert('User Not Found', 'alert alert-danger');

                } else {
                    // show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }

            })
    } else {
        // clear Profile
        ui.clearProfile();
    }
});
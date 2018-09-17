class UI {
    constructor() {
            this.profile = document.getElementById('profile');
        }
        // display profile
    showProfile(user) {
        console.log(user);
        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img src="${user.avatar_url}" class="img-fluid mb-2">
                        <a href="${user.html_url}" target="_blank" class="btn
                        btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge badge-primary">Public Repos:${user.public_repos}</span>
                        <span class="badge badge-secondary">Public Gists:${user.public_gists}</span>
                        <span class="badge badge-success">Followers:${user.followers}</span>
                        <span class="badge badge-info">Following:${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>
        `;

    }

    // show user repos
    showRepos(repos) {
            let output = '';

            repos.forEach((repo) => {
                output += `
                    <div class="card card-body mb-2">
                        <div class="row">
                            <div class="col-md-6">
                                <a href="${repo.html_url}" target=_blank>${repo.name}</a>
                                <p>${repo.description}</p>
                                <p><span class="badge badge-warning">${repo.language}</span></p>
                            </div>

                            <div class="col-md-6">
                                <span class="badge badge-primary">Stars: ${repo.stargazers_count}</span>
                                <span class="badge badge-secondary">Watchers: ${repo.watchers_count}</span>
                                <span class="badge badge-success">Forks:${repo.forks_count}</span>
                            
                            </div>
                        </div>
                    </div>
                `;
            });
            // output repos
            document.getElementById('repos').innerHTML = output;
        }
        // show alert message
    showAlert(message, className) {
        // clear any remaining alert
        this.clearAlert();
        // create div
        const div = document.createElement('div');
        // add className
        div.className = className;
        // add text
        div.appendChild(document.createTextNode(message));
        // get a parent
        const container = document.querySelector('.searchContainer');
        // get the search box
        const search = document.querySelector('.search');
        // insert alert
        container.insertBefore(div, search);

        // timeout after 3 seconds
        setTimeout(() => {
            this.clearAlert();
        }, 2000);
    }

    // clear alert message
    clearAlert() {
            const currentAlert = document.querySelector('.alert');

            if (currentAlert) {
                currentAlert.remove();
            }
        }
        // clear profile
    clearProfile() {
        this.profile.innerHTML = '';
    }

}
class Github {
    constructor() {
        this.client_id = 'c161673bcfe2fff05526';
        this.client_secret = 'cbd11291cd7cabed8ecc78cde30f4647d49a5120';
        this.repos_count = 2;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        // console.log(profileResponse);
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?
        per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();

        return {
            profile,
            repos
        }
    }
}
const data = [
    {
        name: 'John Doe',
        age: '44',
        gender: 'male',
        lookingfor: 'female',
        location: 'USA',
        image: 'https://randomuser.me/api/portraits/men/84.jpg'
    },
    {
        name: 'Jane Doe',
        age: '44',
        gender: 'female',
        lookingfor: 'male',
        location: 'Canada',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'John Duckett',
        age: '40',
        gender: 'male',
        lookingfor: 'female',
        location: 'Mexico',
        image: 'https://randomuser.me/api/portraits/men/85.jpg'
    },
];


const profiles = profileIterator(data);

// call 1st profile
nextProfile();
// Next event
document.getElementById('next').addEventListener('click', nextProfile);

// next profile display
function nextProfile() {
    const currentProfile = profiles.next().value;
    

    if(currentProfile!== undefined) {
    document.getElementById('profileDisplay').innerHTML = `
        <ul class="list-group">
            <li class="list-group-item">Name: ${currentProfile.name}</li>
            <li class="list-group-item">Age: ${currentProfile.age}</li>
            <li class="list-group-item">Gender: ${currentProfile.gender}</li>
            <li class="list-group-item">Looking for: ${currentProfile.lookingfor}</li>
            <li class="list-group-item">Location: ${currentProfile.location}</li>
        </ul>
    `;


    document.getElementById('imageDisplay').innerHTML = `
        <img src="${currentProfile.image}">
    `;
    } else {
        window.location.reload();
}
}
// profile iterator
function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: function() {
            return nextIndex < profiles.length ?
            { value: profiles[nextIndex++], done: false} :
            { done: true }
        }
    };
}
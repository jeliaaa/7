document.addEventListener('DOMContentLoaded', () =>{
    fetch('teamMembers.json')
    .then(response =>response.json())
    .then(data => {
        const teamMember = document.querySelector('.team-members');
        data.forEach( member => {
            teamMember.appendChild(createMembers(member));
        })
    })
    .catch(error => {
        console.error("Couldn't load team members json -> ", error);
    })
});
function createMembers(member) {
    const memberElem = document.createElement('div');
    memberElem.classList.add('member');


    const img = document.createElement('img');
    img.src = member.memberImage;
    img.alt = "Team Info";
    memberElem.appendChild(img);


    const name = document.createElement('h1');
    name.textContent = member.name;
    memberElem.appendChild(name);

    const role = document.createElement('h3');
    role.textContent=member.role;
    memberElem.appendChild(role);

    return memberElem;
}
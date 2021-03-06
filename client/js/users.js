
const tempurl = `http://localhost:${5000}`;
const herokuurl = 'https://btol-js-assignment2.herokuapp.com'



window.addEventListener('load', async (evnt) =>{
    let element = '';
    const usercontainer = document.querySelector('.user-profiles');
    const usersobj = await getUserdata(herokuurl + '/api/users'); //getUserdata(tempurl + '/api/users');

    for (var user of usersobj) 
    {
        const templatestring = `<div class="user">
                <div class="name">
                <p>User Name</p>
                <p>${user.username}</p>
                </div>
                <div class="email">
                 <p>Email</p>
                <p>${user.email}</p>
                </div>
                <div class="id">
                <p>ID#</p>
                <p>${user.ID}</p>
                </div>
                </div>`
        const element = document.createRange().createContextualFragment(templatestring).firstChild;

        //add element to dom 
    PrintElement(usercontainer, element);


    };

    
})

async function getUserdata(url){

    const request = await fetch(url).then(res => res.json())
    return request;

}
const PrintElement = (container, element) => {
    //insert element
    container.insertAdjacentElement('afterbegin', element);
    console.log('printed dom')
}
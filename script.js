// TODO: add code here

window.addEventListener("load", async function() {

    await fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
   
        response.json().then( function(json) {
            
            let container = document.getElementById("container");
            
            let arr = json;
            
            arr.sort(function(a, b) {
                return a.hoursInSpace - b.hoursInSpace;
            });
            
            container.innerHTML = `<h2>Count of Astronauts: ${arr.length}</h2>`;

            for (let i = 0; i < arr.length; i++ ) {

               container.innerHTML += `
               
                <div class="astronaut">
                    <div class="bio">
                        <h3>${arr[i].firstName} ${arr[i].lastName}</h3>
                        <ul>
                            <li>Hours in space: ${arr[i].hoursInSpace}</li>
                            <li>Active: ${arr[i].active}</li>
                            <li>Skill: ${arr[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src=${arr[i].picture}>
                </div>
                `;
            }
         });

    } );

});
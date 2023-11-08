class Controller {
    constructor() {
        this.group;
        this.view = document.getElementById('app');
    }

    async creategroup() {
        const response = await fetch('http://localhost:8080/creategroup');
        this.group = await response.json();

        console.log(this.group);

        this.showOverview();

    }

    async addpersontogroup(groupID, name) {
        console.log(groupID);
        console.log(name);
        const data = JSON.stringify({id: groupID, name: name});
        const response = await fetch(`http://localhost:8080/addpersontogroup?data=${data}`);
        const group = await response.json();
        this.group = group;
        console.log(group);
        this.showOverview();
    }

    showOverview() {
        let innerHTML = `<div><h1>Overview</h1>`;
        innerHTML = `<p>${this.group.id}</p>`;
        for (const e of this.group.users) {
            innerHTML += `<p>${e.name}</p>`;
        }
        innerHTML += `<input id="in_name" type="text" name="Enter a names">`

        innerHTML += `</div>`;

        this.view.innerHTML = innerHTML;
        let x = document.getElementById("in_name").addEventListener("keyup", (event) => {
            if (event.keyCode === 13) {
                this.addpersontogroup(this.group._id, document.getElementById("in_name").value)
            }
        });
    }

}

const c = new Controller();
// c.creategroup();
// c.addpersontogroup(2);
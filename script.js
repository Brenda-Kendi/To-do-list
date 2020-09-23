let addProjectButton = document.getElementById('add-project-btn');
//addevent listeners
addProjectButton.addEventListener('click', function(){
    var paragraph = document.createElement('p');
    paragraph.innerText = inputField.value;
    projectContainer.appendChild(paragraph);
    inputField.value = '';
});
//Project class: Represents a Project

/*class Project{
    constructor(subject,id){
        this.subject=subject;
        this.id=id;
    }
}
//Todo class: Represents a todo

//UI Class: Handles UI Tasks
class UI{
    static displayProjects(){
      
        const projects = Store.getProjects();
        projects.forEach((project)=> UI.addProjectToList(project));
    }
    static addProjectToList(project){
        const list= document.querySelector('#project-list');

        const row= document.createElement('tr');

        row.innerHTML=`
        <td>${project.subject}</td>
        <td>${project.id}</td>
        <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        list.appendChild(row);
    }
    static deleteProject(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }
    
    static clearFields(){
        document.querySelector('#subject').value='';
        document.querySelector('#id').value='';
    }
}

//Store Class: Handles Storage
class Store{
    static getProjects(){
        let projects;
        if (localStorage.getItem('projects')===null) {
            projects=[];
        } else{
            projects=JSON.parse(localStorage.getItem('projects'));
        }
        return projects; 
    }
    static addProject(project){
        const projects= Store.getProjects();
        projects.push(project);
        localStorage.setItem('projects', JSON.stringify(projects));

    }
    static removeProject(id){
        const projects= Store.getProjects();

        projects.forEach((project, index)=>{
            if(project.id===id){
                projects.splice(index, 1);
            }
        });
        localStorage.setItem('projects', JSON.stringify(projects));

    }

}

//Event: Displays Project
document.addEventListener('DOMContentLoaded', UI.displayProjects);

//Event: Displays Todos

//Event: Add a project
document.querySelector('#project-form').addEventListener('submit',(e)=> {
    //Prevent actual submit
    e.preventDefault();

    //Get form values
    const subject=document.querySelector('#subject').value;
    const id=document.querySelector('#id').value;
   
    //Validate
    if(subject===''|| id==='' ){
        alert('Please fill in all the fields');
    } else{
        //Instantiate project
        const project = new Project(subject, id);

        //Add project to UI
        UI.addProjectToList(project);

        //Add project to store
        Store.addProject(project);
    
        //Clear fields
        UI.clearFields();
    }
});

//Event: Add a todo

//Event: Remove a Project
document.querySelector('#project-list').addEventListener('click',(e)=> {
    UI.deleteProject(e.target)
});*/
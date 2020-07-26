const addProject = () => {
    const name = document.getElementById("nameProject").value;
    const resume = document.getElementById("resumeProject").value;
    const local = document.getElementById("localisationProject").value;
    const volunteers = document.getElementById("volunteersProject").value;
    const funds = document.getElementById("fundsProject").value;
    const image = "../ressources/" + document.getElementById("imageProject").files[0].name;

    project = {
        name,
        resume,
        local,
        volunteers,
        funds,
        image
    }

    fetch('http://localhost:3000/all_projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then(res => res.json())
        .then(data => window.location.replace('AllProjects.html'))
        .catch(err => console.log(err))


}
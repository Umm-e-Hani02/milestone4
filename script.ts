document.getElementById("resume-form")?.addEventListener("submit", function (event) {
    event.preventDefault();

    // Type assertions to make sure we are selecting the right elements
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const degreeElement = document.getElementById("degree") as HTMLInputElement;
    const institutionElement = document.getElementById("institution") as HTMLInputElement;
    const graduationYearElement = document.getElementById("graduationYear") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLTextAreaElement;
    const workExperienceElement = document.getElementById("workExperience") as HTMLTextAreaElement;

    if (nameElement && emailElement && degreeElement && institutionElement && graduationYearElement && skillsElement && workExperienceElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const degree = degreeElement.value;
        const institution = institutionElement.value;
        const graduationYear = graduationYearElement.value;
        const skills = skillsElement.value;
        const workExperience = workExperienceElement.value;

        // Create resume output as HTML string
        const resumeOutput = `
            <h2>Personal Information</h2>
            <p><strong>Name:</strong> <span id="edit-name" class"editable"> ${name}</p>
            <p><strong>Email:</strong>  <span id="edit-email" class"editable"> ${email}</p>
        
            <h2>Education</h2>
            <p><strong>Degree:</strong>  <span id="edit-degree" class"editable"> ${degree}</p>
            <p><strong>Institution:</strong>  <span id="edit-institution" class"editable"> ${institution}</p>
            <p><strong>Graduation Year:</strong>  <span id="edit-graduation-year" class"editable"> ${graduationYear}</p>
        
            <h2>Skills</h2>
            <p><strong>Skills:</strong>  <span id="edit-skills" class"editable"> ${skills}</p>
        
            <h2>Work Experience</h2>
            <p><strong>Work Experience:</strong>  <span id="edit-experience" class"editable"> ${workExperience}</p>`;

        // Display the resume in the output div
        const resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } makeEditable();
    } else {
        console.error("One or more form elements are missing");
    }
});

function makeEditable(){
    const editableElements = document.querySelectorAll("editable");
    editableElements.forEach(element => {
        element.addEventListener("click", function() {
            const currentElement = element as HTMLElement
            const currentValue = currentElement.textContent || "";

            // replace content
            if(currentElement.tagName === "p" || currentElement.tagName === "span"){
                const input = document.createElement("input")
                input.value = currentValue
                input.classList.add("editing-input")

                input.addEventListener("blur", function() {
                    currentElement.textContent = input.value
                    currentElement.style.display = "inline"
                    input.remove()
                })




                currentElement.style.display = "none"
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
};
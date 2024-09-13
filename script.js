"use strict";
var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    event.preventDefault();
    // Type assertions to make sure we are selecting the right elements
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    const degreeElement = document.getElementById("degree");
    const institutionElement = document.getElementById("institution");
    const graduationYearElement = document.getElementById("graduationYear");
    const skillsElement = document.getElementById("skills");
    const workExperienceElement = document.getElementById("workExperience");
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
        }
        makeEditable();
    }
    else {
        console.error("One or more form elements are missing");
    }
});
function makeEditable() {
    const editableElements = document.querySelectorAll("editable");
    editableElements.forEach(element => {
        element.addEventListener("click", function () {
            var _a;
            const currentElement = element;
            const currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "p" || currentElement.tagName === "span") {
                const input = document.createElement("input");
                input.value = currentValue;
                input.classList.add("editing-input");
                input.addEventListener("blur", function () {
                    currentElement.textContent = input.value;
                    currentElement.style.display = "inline";
                    input.remove();
                });
                currentElement.style.display = "none";
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input, currentElement);
                input.focus();
            }
        });
    });
}
;

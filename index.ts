document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();
    const profilePictureInput = document.getElementById("profilepicture") as HTMLInputElement;
//    profile picture functionality
    const profilePictureFile = profilePictureInput.files?.[0];
    const profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

    if (profilePictureFile) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const profilePictureUrl = e.target?.result as string;
            generateResume(profilePictureUrl); // Pass the base64 image URL
        };
        reader.readAsDataURL(profilePictureFile); // Convert to base64
    } else {
        generateResume('');
    }
});

function generateResume(profilePictureUrl: string) {
    const footer = document.getElementById('footer') as HTMLElement;
    const header = document.getElementById('header') as HTMLElement;
    const resumeForm = document.getElementById("resumeForm") as HTMLInputElement;
    const firstNameElement = document.getElementById("first_name") as HTMLInputElement;
    const lastNameElement = document.getElementById("last_name") as HTMLInputElement;
    const emailElement = document.getElementById("Email") as HTMLInputElement;
    const phoneElement = document.getElementById("phone") as HTMLInputElement;
    const dobElement = document.getElementById("dob") as HTMLInputElement;
    const genderElement = document.getElementById("gender") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    
    const jobTitleElement = document.getElementById("job_title") as HTMLInputElement;
    const companyNameElement = document.getElementById("company_name") as HTMLInputElement;
    const startDateElement = document.getElementById("start_date") as HTMLInputElement;
    const endDateElement = document.getElementById("end_date") as HTMLInputElement;
    const jobDescriptionElement = document.getElementById("job_description") as HTMLInputElement;

    const degreeElement = document.getElementById("degree") as HTMLInputElement;
    const institutionElement = document.getElementById("institution") as HTMLInputElement;
    const eduStartDateElement = document.getElementById("edu_start_date") as HTMLInputElement;
    const eduEndDateElement = document.getElementById("edu_end_date") as HTMLInputElement;
    const gradeElement = document.getElementById("grade") as HTMLInputElement;

    // Collect all checked skills, languages, and hobbies
const skills = Array.from(document.querySelectorAll('input[name="skills"]:checked')).map((el) => (el as HTMLInputElement).value);
const languages = Array.from(document.querySelectorAll('input[name="languages"]:checked')).map((el) => (el as HTMLInputElement).value);
const hobbies = Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map((el) => (el as HTMLInputElement).value);


    const referenceNameElement = document.getElementById("reference_name") as HTMLInputElement;
    const referenceContactElement = document.getElementById("reference_contact") as HTMLInputElement;
    const coverLetterElement = document.getElementById("cover_letter") as HTMLTextAreaElement;
    const cvPathUrlElement = document.getElementById("username") as HTMLInputElement;

    const firstName = firstNameElement.value;
    const lastName = lastNameElement.value;
    const email = emailElement.value;
    const phone = phoneElement.value;
    const dob = dobElement.value;
    const gender = genderElement.value;
    const address = addressElement.value;
    const jobTitle = jobTitleElement.value;
    const companyName = companyNameElement.value;
    const startDate = startDateElement.value;
    const endDate = endDateElement.value;
    const jobDescription = jobDescriptionElement.value;
    const degree = degreeElement.value;
    const institution = institutionElement.value;
    const eduStartDate = eduStartDateElement.value;
    const eduEndDate = eduEndDateElement.value;
    const grade = gradeElement.value;
    const referenceName = referenceNameElement.value;
    const referenceContact = referenceContactElement.value;
    const coverLetter = coverLetterElement.value;
    const cvPath = cvPathUrlElement.value;
    const uniquePath = `resume/${cvPath.replace(/\s+/g, '_')}_cv.html`;
// cv output
    const resumeOutput = `
        <h1>Your Generated CV</h1>
        ${profilePictureUrl ? `<img src="${profilePictureUrl}" alt="profile picture" class="profile-picture" style="width: 150px; height: 150px; border-radius: 50%;">` : ""}
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Last Name:</strong> ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Address:</strong> ${address}</p>

        <h2>Work Experience</h2>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Start Date:</strong> ${startDate}</p>
        <p><strong>End Date:</strong> ${endDate}</p>
        <p><strong>Job Description:</strong> ${jobDescription}</p>

        <h2>Education</h2>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Start Date:</strong> ${eduStartDate}</p>
        <p><strong>End Date:</strong> ${eduEndDate}</p>
        <p><strong>Grade:</strong> ${grade}</p>

        <h2>Skills</h2>
        <p>${skills.join(", ")}</p>

        <h2>Languages</h2>
        <p>${languages.join(", ")}</p>

        <h2>Hobbies</h2>
        <p>${hobbies.join(", ")}</p>

        <h2>References</h2>
        <p><strong>Reference Name:</strong> ${referenceName}</p>
        <p><strong>Reference Contact:</strong> ${referenceContact}</p>

        <h2>Cover Letter</h2>
        <p>${coverLetter}</p>
    `;

    // Download link creation
    const downloadLink = document.createElement('a');
    downloadLink.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(resumeOutput);
    downloadLink.download = uniquePath;
    downloadLink.textContent = 'Download your 2024 CV';

    // Display the output resume
    const resumeOutputElement = document.getElementById('resumeOutput');

if (resumeOutputElement) {
    resumeOutputElement.classList.remove('hidden');
    resumeOutputElement.innerHTML = resumeOutput; // Insert the generated resume HTML content
        resumeForm.style.display = 'none';
        header.style.display = 'none';
        footer.style.display = 'none';
        

        resumeOutputElement.appendChild(downloadLink);
        makeEditable();
    } else {
        console.error('Failed to display the generated resume');
    }
}
// editability function
function makeEditable() {
    const editableElements = document.querySelectorAll('.editable');
    editableElements.forEach(element => {
        element.addEventListener('click', function () {
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "";

            const input = document.createElement('input');
            input.type = 'text';
            input.value = currentValue;
            input.classList.add('editing-input');

            input.addEventListener('blur', function () {
                currentElement.textContent = input.value;
                input.remove();
            });

            currentElement.style.display = 'none';
            currentElement.parentNode?.insertBefore(input, currentElement);
            input.focus();
        });
    });
}

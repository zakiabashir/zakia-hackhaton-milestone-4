document.getElementById('resumeForm')?.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const profilepictureinput = document.getElementById("profilepicture") as HTMLInputElement;
    const first_nameelement = document.getElementById("first_name") as HTMLInputElement;
    const last_nameElement = document.getElementById("last_name") as HTMLInputElement;
    const emailElement = document.getElementById("Email") as HTMLInputElement;
    const phoneelement = document.getElementById("phone") as HTMLInputElement;
    const dobElement = document.getElementById("dob") as HTMLInputElement;
    const genderElement = document.getElementById("gender") as HTMLInputElement;
    const addressElement = document.getElementById("address") as HTMLInputElement;
    
    const job_titleElement = document.getElementById("job_title") as HTMLInputElement;
    const company_nameElement = document.getElementById("company_name") as HTMLInputElement;
    const start_dateElement = document.getElementById("start_date") as HTMLInputElement;
    const end_dateElement = document.getElementById("end_date") as HTMLInputElement;
    const job_descriptionElement = document.getElementById("job_description") as HTMLInputElement;
    const degreeElement = document.getElementById("degree") as HTMLInputElement;
    const institutionElement = document.getElementById("institution") as HTMLInputElement;
    const edu_start_dateElement = document.getElementById("edu_start_date") as HTMLInputElement;
    const edu_end_dateElement = document.getElementById("edu_end_date") as HTMLInputElement;
    const gradeElement = document.getElementById("grade") as HTMLInputElement;
    const skillsElement = document.getElementById("skills") as HTMLInputElement;
    const languagesElement = document.getElementById("languages") as HTMLInputElement;
    const hobbiesElement = document.getElementById("hobbies") as HTMLInputElement;
    const reference_nameElement = document.getElementById("reference_name") as HTMLInputElement;
    const reference_contactElement = document.getElementById("reference_contact") as HTMLInputElement;
    const cover_letterelement = document.getElementById("cover_letter") as HTMLTextAreaElement;
const cvpathurlelement = document.getElementById("username") as HTMLInputElement;
    if( profilepictureinput &&first_nameelement && last_nameElement && emailElement && phoneelement && dobElement && genderElement && addressElement && job_titleElement && company_nameElement && start_dateElement && end_dateElement && job_descriptionElement && degreeElement &&institutionElement && edu_start_dateElement &&edu_end_dateElement && gradeElement && skillsElement && languagesElement && hobbiesElement && reference_nameElement &&reference_contactElement &&cover_letterelement && cvpathurlelement) {
const first_name = first_nameelement.value;
const last_name = last_nameElement.value;
const Email = emailElement.value;
const phone = phoneelement.value;
const dob = dobElement.value;
const gender = genderElement.value;
const address = addressElement.value;
// profile picture
const profilepicturefile = profilepictureinput.files?.[0]
const profilepictureurl = profilepicturefile ? URL.createObjectURL(profilepicturefile) :'';
const job_title = job_titleElement.value;
const company_name = company_nameElement.value;
const start_date = start_dateElement.value;
const end_date = end_dateElement.value;
const  job_description =  job_descriptionElement.value ;
const degree = degreeElement.value;
const institution = institutionElement.value;
const edu_start_date = edu_start_dateElement.value;
const edu_end_date = edu_end_dateElement.value;
const grade = gradeElement.value;
const skills = skillsElement.value;
const languages = languagesElement.value;
 const hobbies = hobbiesElement.value;
 const reference_name = reference_nameElement.value;
const reference_contact = reference_contactElement.value;
const cover_letter = cover_letterelement.value;
// cv-path url
const cv_path = cvpathurlelement.value
const uniquepath = `resume/${cv_path.replace(/\s+/g, '_')}_cv.html`



        const resumeOutput = `
            <h1>Your Generated CV</h1>

            
        <h2>Personal Info  </h2>
        ${profilepictureurl ? `<img src="${profilepictureurl} alt="profile picture" class='profilepicture>' `: ""}
        <p><strong>First Name:</strong><span id="edit-first_name" class="editable">  ${first_name} </span></p>
        <p><strong>Last Name:</strong><span id="edit-last_name" class="editable">  ${last_name}</span></p
       <p><strong> Email: </strong><span id="edit-Email" class="editable"> ${emailElement.value}</span></p>
        <p><strong>Phone: </strong><span id="edit-phone" class="editable"> ${phoneelement.value}</span></p>
        <p><strong>Date of Birth:</strong><span id="edit-dob" class="editable"> ${dob}</span></p>
        <p><strong>Gender: </strong><span id="edit-gender" class="editable"> ${gender}</span></p>
       <p><strong> Address: </strong><span id="edit-address" class="editable"> ${address}</span></p>
        
        <h2>Work Experience</h2>
       <p><strong> Job Title: </strong><span id="edit-job_title" class="editable"> ${job_title}</span></p>
       <p><strong> Company Name: </strong><span id="edit-company_name" class="editable"> ${company_name}</span></p>
       <p><strong> Start Date: </strong><span id="edit-start_date" class="editable"> ${start_date}</span></p>
        <p><strong>End Date::</strong><span id="edit-end_date" class="editable"> ${end_date}</span></p>
        <p><strong>Job Description: </strong><span id="edit-job_description" class="editable"> ${job_description} </span></p>
        <h2>Education </h2>
        <p><strong>Degree: </strong><span id="edit-degree" class="editable">${degree}  </span></p>
       <p><strong>  Institution: </strong><span id="edit-institution" class="editable"> ${institution} </span></p>
        <p><strong>Start Date: </strong><span id="edit-edu_start_date" class="editable"> ${edu_start_date} </span></p>
       <p><strong> End Date: </strong><span id="edit-edu_end_date" class="editable"> ${edu_end_date} </span></p>
       <p><strong> Grade: </strong><span id="edit-grade" class="editable"> ${grade} </span></p>
        <h2>Skills:</h2> 
       <p><strong> Skills:</strong><span id="edit-skils" class="editable"> ${skillsElement.value} </span></p>
       <h2> Languages:</h2> 
        <p><strong>Languages: </strong><span id="edit-languages" class="editable"> ${languages} </span></p><br>
        <h2>Hobbies:</h2>
       <p><strong> Hobbies: </strong><span id="edit-hobbies" class="editable"> ${hobbies} </span></p>
        <h2>References:</h2>
       <p><strong> Reference Name: </strong><span id="edit-refrence_name" class="editable"> ${reference_name} </span></p>
       <p><strong> Reference Contact: </strong><span id="edit-refrence_contact" class="editable"> ${reference_contact} </span></p>
        <h2>Cover Letter:</h2>
       <p><strong> Cover Letter: </strong><span id="edit-cover_letter" class="editable"> ${cover_letter} </span></p>
        
    `;
// download link creation
    const downloadlink = document.createElement('a')
  downloadlink.href = 'data:text/html;charset-utf-8,' + encodeURIComponent(resumeOutput)
  downloadlink.download = uniquepath;
  downloadlink.textContent = 'download your 2024 resume';

// display the output resume
        const resumeOutputElement = document.getElementById('resumeOutput');
        if(resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            
            // download functionality
            resumeOutputElement.appendChild(downloadlink)
            // editable
        makeEditable();
        }
    } else {
        console.error('Some form fields are missing');
    }
});
function makeEditable(){
    const editableelements = document.querySelectorAll('.editable');
    editableelements.forEach(element => {
        element.addEventListener('click',function(){
            const currentElement = element as HTMLElement;
            const currentValue = currentElement.textContent || "" ;
            // replace content
            if(currentElement.tagName === "P" || 'SPAN' ){
                const input = document.createElement('input')
                input.type = 'text'
                input.value = currentValue
                input.classList.add('editing-input')


                input.addEventListener('blur', function(){
                    currentElement.textContent = input.value;
                    currentElement.style.display = 'inline'
                    input.remove()
                })

                currentElement.style.display = 'none'
                currentElement.parentNode?.insertBefore(input, currentElement)
                input.focus()
            }
        })
    })
}
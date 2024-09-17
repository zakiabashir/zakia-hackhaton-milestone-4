var _a;
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    var profilepictureinput = document.getElementById("profilepicture");
    var first_nameelement = document.getElementById("first_name");
    var last_nameElement = document.getElementById("last_name");
    var emailElement = document.getElementById("Email");
    var phoneelement = document.getElementById("phone");
    var dobElement = document.getElementById("dob");
    var genderElement = document.getElementById("gender");
    var addressElement = document.getElementById("address");
    var job_titleElement = document.getElementById("job_title");
    var company_nameElement = document.getElementById("company_name");
    var start_dateElement = document.getElementById("start_date");
    var end_dateElement = document.getElementById("end_date");
    var job_descriptionElement = document.getElementById("job_description");
    var degreeElement = document.getElementById("degree");
    var institutionElement = document.getElementById("institution");
    var edu_start_dateElement = document.getElementById("edu_start_date");
    var edu_end_dateElement = document.getElementById("edu_end_date");
    var gradeElement = document.getElementById("grade");
    var skillsElement = document.getElementById("skills");
    var languagesElement = document.getElementById("languages");
    var hobbiesElement = document.getElementById("hobbies");
    var reference_nameElement = document.getElementById("reference_name");
    var reference_contactElement = document.getElementById("reference_contact");
    var cover_letterelement = document.getElementById("cover_letter");
    var cvpathurlelement = document.getElementById("username");
    if (profilepictureinput && first_nameelement && last_nameElement && emailElement && phoneelement && dobElement && genderElement && addressElement && job_titleElement && company_nameElement && start_dateElement && end_dateElement && job_descriptionElement && degreeElement && institutionElement && edu_start_dateElement && edu_end_dateElement && gradeElement && skillsElement && languagesElement && hobbiesElement && reference_nameElement && reference_contactElement && cover_letterelement && cvpathurlelement) {
        var first_name = first_nameelement.value;
        var last_name = last_nameElement.value;
        var Email = emailElement.value;
        var phone = phoneelement.value;
        var dob = dobElement.value;
        var gender = genderElement.value;
        var address = addressElement.value;
        // profile picture
        var profilepicturefile = (_a = profilepictureinput.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilepictureurl = profilepicturefile ? URL.createObjectURL(profilepicturefile) : '';
        var job_title = job_titleElement.value;
        var company_name = company_nameElement.value;
        var start_date = start_dateElement.value;
        var end_date = end_dateElement.value;
        var job_description = job_descriptionElement.value;
        var degree = degreeElement.value;
        var institution = institutionElement.value;
        var edu_start_date = edu_start_dateElement.value;
        var edu_end_date = edu_end_dateElement.value;
        var grade = gradeElement.value;
        var skills = skillsElement.value;
        var languages = languagesElement.value;
        var hobbies = hobbiesElement.value;
        var reference_name = reference_nameElement.value;
        var reference_contact = reference_contactElement.value;
        var cover_letter = cover_letterelement.value;
        // cv-path url
        var cv_path = cvpathurlelement.value;
        var uniquepath = "resume/".concat(cv_path.replace(/\s+/g, '_'), "_cv.html");
        var resumeOutput = "\n            <h1>Your Generated CV</h1>\n\n            \n        <h2>Personal Info  </h2>\n        ".concat(profilepictureurl ? "<img src=\"".concat(profilepictureurl, " alt=\"profile picture\" class='profilepicture>' ") : "", "\n        <p><strong>First Name:</strong><span id=\"edit-first_name\" class=\"editable\">  ").concat(first_name, " </span></p>\n        <p><strong>Last Name:</strong><span id=\"edit-last_name\" class=\"editable\">  ").concat(last_name, "</span></p\n       <p><strong> Email: </strong><span id=\"edit-Email\" class=\"editable\"> ").concat(emailElement.value, "</span></p>\n        <p><strong>Phone: </strong><span id=\"edit-phone\" class=\"editable\"> ").concat(phoneelement.value, "</span></p>\n        <p><strong>Date of Birth:</strong><span id=\"edit-dob\" class=\"editable\"> ").concat(dob, "</span></p>\n        <p><strong>Gender: </strong><span id=\"edit-gender\" class=\"editable\"> ").concat(gender, "</span></p>\n       <p><strong> Address: </strong><span id=\"edit-address\" class=\"editable\"> ").concat(address, "</span></p>\n        \n        <h2>Work Experience</h2>\n       <p><strong> Job Title: </strong><span id=\"edit-job_title\" class=\"editable\"> ").concat(job_title, "</span></p>\n       <p><strong> Company Name: </strong><span id=\"edit-company_name\" class=\"editable\"> ").concat(company_name, "</span></p>\n       <p><strong> Start Date: </strong><span id=\"edit-start_date\" class=\"editable\"> ").concat(start_date, "</span></p>\n        <p><strong>End Date::</strong><span id=\"edit-end_date\" class=\"editable\"> ").concat(end_date, "</span></p>\n        <p><strong>Job Description: </strong><span id=\"edit-job_description\" class=\"editable\"> ").concat(job_description, " </span></p>\n        <h2>Education </h2>\n        <p><strong>Degree: </strong><span id=\"edit-degree\" class=\"editable\">").concat(degree, "  </span></p>\n       <p><strong>  Institution: </strong><span id=\"edit-institution\" class=\"editable\"> ").concat(institution, " </span></p>\n        <p><strong>Start Date: </strong><span id=\"edit-edu_start_date\" class=\"editable\"> ").concat(edu_start_date, " </span></p>\n       <p><strong> End Date: </strong><span id=\"edit-edu_end_date\" class=\"editable\"> ").concat(edu_end_date, " </span></p>\n       <p><strong> Grade: </strong><span id=\"edit-grade\" class=\"editable\"> ").concat(grade, " </span></p>\n        <h2>Skills:</h2> \n       <p><strong> Skills:</strong><span id=\"edit-skils\" class=\"editable\"> ").concat(skillsElement.value, " </span></p>\n       <h2> Languages:</h2> \n        <p><strong>Languages: </strong><span id=\"edit-languages\" class=\"editable\"> ").concat(languages, " </span></p><br>\n        <h2>Hobbies:</h2>\n       <p><strong> Hobbies: </strong><span id=\"edit-hobbies\" class=\"editable\"> ").concat(hobbies, " </span></p>\n        <h2>References:</h2>\n       <p><strong> Reference Name: </strong><span id=\"edit-refrence_name\" class=\"editable\"> ").concat(reference_name, " </span></p>\n       <p><strong> Reference Contact: </strong><span id=\"edit-refrence_contact\" class=\"editable\"> ").concat(reference_contact, " </span></p>\n        <h2>Cover Letter:</h2>\n       <p><strong> Cover Letter: </strong><span id=\"edit-cover_letter\" class=\"editable\"> ").concat(cover_letter, " </span></p>\n        \n    ");
        // download link creation
        var downloadlink = document.createElement('a');
        downloadlink.href = 'data:text/html;charset-utf-8,' + encodeURIComponent(resumeOutput);
        downloadlink.download = uniquepath;
        downloadlink.textContent = 'download your 2024 resume';
        // display the output resume
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // download functionality
            resumeOutputElement.appendChild(downloadlink);
            // editable
            makeEditable();
        }
    }
    else {
        console.error('Some form fields are missing');
    }
});
function makeEditable() {
    var editableelements = document.querySelectorAll('.editable');
    editableelements.forEach(function (element) {
        element.addEventListener('click', function () {
            var _a;
            var currentElement = element;
            var currentValue = currentElement.textContent || "";
            // replace content
            if (currentElement.tagName === "P" || 'SPAN') {
                var input_1 = document.createElement('input');
                input_1.type = 'text';
                input_1.value = currentValue;
                input_1.classList.add('editing-input');
                input_1.addEventListener('blur', function () {
                    currentElement.textContent = input_1.value;
                    currentElement.style.display = 'inline';
                    input_1.remove();
                });
                currentElement.style.display = 'none';
                (_a = currentElement.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(input_1, currentElement);
                input_1.focus();
            }
        });
    });
}

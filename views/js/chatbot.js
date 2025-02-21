// const { render } = require("ejs");

let currentQuestion = 1;
const totalQuestions = 8;
let userResponses = {
    education_level: '',
    field_of_education: '',
    strongest_skill: '',
    technical_expertise: '',
    learning_interests: '',
    career_goal: '',
    study_preferences: ''
};

function frame_cover() {
    if (currentQuestion === 1) {
        document.getElementById('frame').style.backgroundImage = "url('../title.jpg')";
    } else if (currentQuestion === 2) {
        document.getElementById('frame').style.backgroundImage = "url('../sf2.jpg')";
    } else if (currentQuestion === 3) {
        document.getElementById('frame').style.backgroundImage = "url('../sdf.jpg')";
    } else if (currentQuestion === 4) {
        document.getElementById('frame').style.backgroundImage = "url('../sf2.jpg')";
    } else if (currentQuestion === 5) {
        document.getElementById('frame').style.backgroundImage = "url('../sdf.jpg')";
    } else if (currentQuestion === 6) {
        document.getElementById('frame').style.backgroundImage = "url('../title.jpg')";
    } else if (currentQuestion === 7) {
        document.getElementById('frame').style.backgroundImage = "url('../sf2.jpg')";
    } else if (currentQuestion === 8) {
        document.getElementById('frame').style.backgroundImage = "url('../sdf.jpg')";
    } else {
        document.getElementById('frame').style.backgroundImage = "url('../sdf.jpg')";
    }
}
//frame_cover();
function submitForm() {
    // Hide the current question
    // setTimeout(()=>{
    //     document.getElementById(`question${currentQuestion}`).style.display = 'none';
    // // Move to the next question
    // currentQuestion++;
    // document.getElementById(`question${currentQuestion}`).style.display = 'block';
    // updateProgressBar();
    //frame_cover();
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('progress-bar').style.display = 'none';
    document.getElementById('css-loader').style.display = 'block';
    // },1000)
    const prompt = `
    User Profile:
        - Education Level: ${userResponses.education_level}
        - Major/Field of Education: ${userResponses.field_of_education}
        - Strongest Skill: ${userResponses.strongest_skill}
        - Area of Technical Expertise: ${userResponses.technical_expertise}
        - Current Learning Interests: ${userResponses.learning_interests}
        - Future Career Goal: ${userResponses.career_goal}
        - Study Preferences: ${userResponses.study_preferences}

        Based on the user's profile above,
        1. Recommended courses and resources for each area of interest from user's profile from top online platforms such as edX, NPTEL, Coursera, Youtube etc.. and provide a link to redirect the course page.
        2. Suggested projects or practical experiences to enhance skills in their particular goals.
        3. A detailed timeline with points or attractive way of present for achieving the future career goal and their interests.
        4. Opportunities and benefits which they will acquire through this journey.
        if user opt for other option in all fields then take career goal as a art master such as dance, singing or drawing or photography etc..
        Generate the above information in html web page very attractive design and please don't give any other information outside the html page and also include (© Careerwise 2024 All Rights Reserved) at the bottom and include (Careerwise AI Generated personalised Learning Path) as title and heading of the html page.
        please take the below html code for reference in generating the content in attractive way:
        "<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Careerwise AI Generated personalised Learning Path</title>
            <style>
                body {
                    background-color: #121212;
                    color: #e0e0e0;
                    font-family: Arial, sans-serif;
                    line-height: 1.6;
                }
                h1, h2, h3 {
                    color: #bb86fc;
                }
                .container {
                    width: 80%;
                    margin: auto;
                    padding: 20px;
                    border-radius: 10px;
                    background-color: #1e1e1e;
                }
                .section {
                    margin-bottom: 30px;
                    padding: 15px;
                    border: 1px solid #bb86fc;
                    border-radius: 8px;
                }
                .timeline {
                    list-style-type: none;
                    padding: 0;
                }
                .timeline li {
                    margin: 10px 0;
                    padding: 10px;
                    background-color: #303030;
                    border-left: 4px solid #bb86fc;
                }
                footer {
                    text-align: center;
                    margin-top: 20px;
                    font-size: 12px;
                    color: #999;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Careerwise AI Generated personalised Learning Path</h1>
                
                <div class="section">
                    <h2>Recommended Courses and Resources</h2>
                    <h3>AI/ML and Data Science</h3>
                    <ul>
                        <li><strong>Coursera:</strong> "Machine Learning by Andrew Ng"</li>
                        <li><strong>edX:</strong> "Data Science MicroMasters" from UC San Diego</li>
                        <li><strong>NPTEL:</strong> "Introduction to Machine Learning"</li>
                        <li><strong>YouTube:</strong> "StatQuest with Josh Starmer" for intuitive explanations</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Suggested Projects</h2>
                    <ul>
                        <li>Analyze a public health dataset to identify trends and insights.</li>
                        <li>Develop a machine learning model to predict disease outbreaks.</li>
                        <li>Create a data visualization project to communicate your findings.</li>
                        <li>Collaborate on a research paper with peers on a relevant topic.</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Timeline to Achieve Career Goals</h2>
                    <ul class="timeline">
                        <li><strong>Year 1:</strong> Complete online courses in AI/ML; Join data science study groups.</li>
                        <li><strong>Year 2:</strong> Work on individual projects; Participate in hackathons.</li>
                        <li><strong>Year 3:</strong> Start a research project; Seek internships in relevant fields.</li>
                        <li><strong>Year 4:</strong> Publish research findings; Apply for graduate programs.</li>
                    </ul>
                </div>

                <div class="section">
                    <h2>Opportunities and Benefits</h2>
                    <ul>
                        <li>Develop in-demand skills in AI and Data Science.</li>
                        <li>Build a strong portfolio of projects.</li>
                        <li>Network with professionals in your field through group studies.</li>
                        <li>Enhance your analytical skills through hands-on experience.</li>
                    </ul>
                </div>
            </div>
            
            <footer>
                <p>© Careerwise 2024 All Rights Reserved</p>
            </footer>
        </body>
        </html>"
        Don't include '''html '''.
    `;
    fetch('http://localhost:9000/result', {
            method: 'POST', // Specify the request method
            headers: {
                'Content-Type': 'text/plain', // Set content type to JSON
            },
            body: prompt, // Send the string directly in the body
        })
        .then(response => response.text())
        .then(prompt => {
            console.log('Success:', prompt);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    fetch('http://localhost:9000/pythonresult')
        .then(response => response.text()) // Assuming the response is text
        .then(data => {
            console.log('Python script response:', data);
            alert('Python script finished with response: ' + data);

        })
        .catch(error => {
            console.error('Error calling Python script:', error);
        });
    setTimeout(() => {
        redirect_generation();
    }, 30000);

    // Replace with your API call
}

function redirect_generation() {
    window.location.href = "http://localhost:9000/myresult";
}
// Handle option selection and button background change
function selectOption(questionNumber, value, btn) {
    // Enable the continue button once an option is selected
    const continueBtn = document.getElementById('continue-btn');
    continueBtn.disabled = false;

    // Remove 'active' class from all buttons in the current question
    const currentOptions = document.querySelectorAll(`#question${questionNumber}.option-btn`);
    currentOptions.forEach(option => option.classList.remove('active'));
    // Add 'active' class to the clicked button
    btn.classList.add('active');

    switch (questionNumber) {
        case 1:
            userResponses.education_level = value;
            nextQuestion();
            break;
        case 2:
            userResponses.field_of_education = value;
            nextQuestion();
            break;
        case 3:
            userResponses.strongest_skill = value;
            nextQuestion();
            break;
        case 4:
            userResponses.technical_expertise = value;
            nextQuestion();
            break;
        case 5:
            userResponses.learning_interests = value;
            nextQuestion();
            break;
        case 6:
            userResponses.career_goal = value;
            nextQuestion();
            break;
        case 7:
            userResponses.study_preferences = value;
            nextQuestion();
            document.getElementById('back-btn').style.display = 'none';
            // submitForm();
            break;
    }

    // Save the selected answer (this could be sent to a server or saved in local storage)
    // console.log(`Question ${questionNumber} answer: ${answer}`);
}

// Go to the next question
function nextQuestion() {
    // Hide the current question
    setTimeout(() => {
        document.getElementById(`question${currentQuestion}`).style.display = 'none';


        // Move to the next question
        currentQuestion++;
        //frame_cover();
        document.getElementById(`question${currentQuestion}`).style.display = 'block';
        updateProgressBar();
        // Update the progress bar

        // Disable the continue button until an option is selected for the new question
        const continueBtn = document.getElementById('continue-btn');
        continueBtn.disabled = true;

        // Enable the back button since we are moving forward
        const backBtn = document.getElementById('back-btn');
        backBtn.disabled = false;

        // If it's the last question, change the Continue button to "Submit"
        if (currentQuestion === (totalQuestions - 1)) {
            // continueBtn.textContent = 'SUBMIT';
            // document.getElementById('continue-btn').style.display = 'none';
            // document.getElementById('submit-btn').style.display = 'block';
            // currentQuestion++;
            // updateProgressBar();


        }
    }, 1000);

}

// Go to the previous question
function prevQuestion() {
    // Hide the current question

    document.getElementById(`question${currentQuestion}`).style.display = 'none';
    currentQuestion--;
    //frame_cover();
    // Move to the previous question

    document.getElementById(`question${currentQuestion}`).style.display = 'block';
    updateProgressBar();

    // Update the progress bar


    // If it's the first question, disable the back button
    const backBtn = document.getElementById('back-btn');
    if (currentQuestion === 1) {
        backBtn.disabled = true;
    }

    // Always change the Continue button back from "Submit" to "Continue" if not on the last question
    const continueBtn = document.getElementById('continue-btn');
    continueBtn.textContent = 'CONTINUE';
    continueBtn.disabled = true;
}

// Update progress bar width based on the current question
function updateProgressBar() {
    const progress = document.getElementById('progress');
    const progressPercent = (currentQuestion / (totalQuestions)) * 100;
    progress.style.width = `${progressPercent}%`;
    // const currentOptions = document.querySelectorAll('.option-btn');
    // currentOptions.classList.remove('active');
}
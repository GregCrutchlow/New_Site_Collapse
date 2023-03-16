const typedTextSpan = document.querySelector('.typed_text');

const textArray = ['front end web developer.', 'student.', 'photographer.', 'dad.', 'nerd.'];
const typingDelay = 100;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay)
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay)
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 100);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    setTimeout(type, typingDelay);
})

document.querySelectorAll('.accordion_btn').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.classList.toggle('accordion_btn_active');

        if (button.classList.contains('accordion_btn_active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;
        }
    })
})

const myProjects = [
	{
		asset: './assets/guess-my-number-game-dev.png',
		title: 'Guess My Number',
		tools: '<li><i class="fa-brands fa-html5" aria-hidden="true" title="HTML"></i></li><li><i class="fa-brands fa-css3-alt" aria-hidden="true" title="CSS"></i></li><li><i class="fa-brands fa-js" aria-hidden="true" title="JavaScript"></i></li>',
		desc: 'Built using vanilla JavaScript, Guess My Number is a number guessing game between 1-20. Simple code to test my skills manipulating the DOM as well as some game coding and error handling skills.',
		liveURL: 'https://guess-my-number-game-dev.netlify.app',
		repoURL: 'https://github.com/GregCrutchlow/Guess-My-Number',
	},
	{
		asset: './assets/pig-game.png',
		title: 'Pig Game',
		tools: '<li><i class="fa-brands fa-html5" aria-hidden="true"></i></li><li><i class="fa-brands fa-css3-alt" aria-hidden="true"></i></li><li><i class="fa-brands fa-js" aria-hidden="true" title="JavaScript"></i></li>',
		desc: 'Built using vanilla JavaScript, Pig is a dice rolling game where the goal is to bank 100 points before your opponent. Players can score big but lose even bigger in this game of risk/reward. Built using simple JavaScript for game functionality.',
		liveURL: 'https://pig-game-gc-dev.netlify.app',
		repoURL: 'https://github.com/GregCrutchlow/pig-game',
	},
	{
		asset: './assets/isthebookbetter44.png',
		title: 'Is The Book Better',
		tools: '<li><i class="devicon-react-original" aria-hidden="true"></i></li><li><i class="devicon-nodejs-plain" aria-hidden="true"></i></li><li><i class="devicon-sass-original" aria-hidden="true"></i></li><li><i class="fa-brands fa-js" aria-hidden="true" title="JavaScript"></i></li><li><i class="fa-solid fa-people-group" aria-hidden="true"></i></li>',
		desc: 'Built during bootcamp at Juno College cohort 44. Group project with other members Paco, Louis and Matt. Compare a book and its movie and find out which one you should spend your time on!',
		liveURL: 'https://isthebookbetter44.netlify.app',
		repoURL: 'https://github.com/book-or-movie/is-the-book-better/tree/production',
	},
	{
		asset: './assets/tasty44.png',
		title: 'The Tasty Website',
		tools: '<li><i class="devicon-html5-plain" aria-hidden="true"></i></li><li><i class="devicon-css3-plain" aria-hidden="true"></i></li><li><i class="fa-brands fa-js" aria-hidden="true"></i></li><li><i class="fa-solid fa-universal-access" aria-hidden="true"></i></li>',
		desc: 'Built during bootcamp at Juno College cohort 44. First project building a website. Built to learn and test skills pertaining to HTML, CSS as well as Accessibility and ease of use for the user.',
		liveURL: 'https://tasty44.netlify.app',
		repoURL: 'https://github.com/GregCrutchlow/gregCrutchlowAssignmentOne',
	},
];

const populateProjects = () => {
    const projectSectionEl = document.querySelector('.projects');

    myProjects.forEach(project => {
        const projectContainer = document.createElement('article');
        projectContainer.classList.add('project_style');
        projectContainer.innerHTML = `
            <div class="project_img">
                <a href="${project.liveURL}"><img title="${project.title}" src="${project.asset}" alt="${project.title}"/></a>
            </div>
            <div class="project_desc">
                <h3>${project.title}</h3>
                <p>${project.desc}</p>
                <div class="skills_used">
                    <ul>
                        ${project.tools}
                    </ul>
                    <ul>
                        <li><a href="${project.liveURL}" target="_blank" rel="noopener noreferrer"><button>Live Site</button></a></li>
                        <li><a href="${project.repoURL}" target="_blank" rel="noopener noreferrer"><button>GitHub</button></a></li>
                    </ul>
                </div>
            </div>`;
        projectSectionEl.appendChild(projectContainer);
    })
}

populateProjects();

import port1 from '../Images/portImages/tech.it.png';
import port2 from '../Images/portImages/git.interview.png';
import port3 from '../Images/portImages/passwordGenerator.png';


const portfolio = [
    {
        id: 1,
        category: 'Front End',
        link1: 'https://studygroup2021.github.io/tech.it/',
        link2: 'https://github.com/StudyGroup2021/tech.it',
        icon1: 'GHP',
        icon2: 'GH',
        image: port1,
        title: 'Tech.IT',
        description: 'Displays the top 5 technology articles and Entry Level technology jobs to help new Developers stay up to date and find a job. Utilized HTML5, CSS3, AJAX, HTTP Requests and Server Side APIS'
    },
    {
        id: 2,
        category: 'Back End',
        link1: 'https://github.com/MSU-developmentTeam/Git.Interview',
        link2: 'https://git-interview21.herokuapp.com/',
        icon1: 'GH',
        icon2: 'H',
        image: port2,
        title: 'Git.Interview',
        description: 'Git.Interview is a web-application that helps developers prepare for interview questions. The user can search topic of interest, create an account in our website and post new questions and answers. This is an application that utilizes Passport authentication, Express and Sequelize.'
    },
    {
        id: 3,
        category: 'JavaScript',
        link1: 'https://github.com/progg1992/passwordGenerator/',
        link2: 'https://progg1992.github.io/passwordGenerator/',
        icon1: 'GH',
        icon2: 'GHP',
        image: port3,
        title: 'Password Generator',
        description: 'Generate secure passwords at a push of a button. Utilized HTML5, CSS3, JavaScript and jQuery'
    }
]

export default portfolio;
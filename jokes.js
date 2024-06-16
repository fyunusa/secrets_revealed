const jokes = [
    {
        question: "Why did the scarecrow become a successful motivational speaker?",
        answer: "Because he was outstanding in his field."
    },
    {
        question: "Why shouldn't you trust stairs?",
        answer: "Because they're always up to something."
    },
    {
        question: "Why did the math book look sad?",
        answer: "Because it had too many problems."
    },
    {
        question: "Why don't scientists trust atoms?",
        answer: "Because they make up everything."
    },
    {
        question: "Why did the bicycle fall over?",
        answer: "Because it was two-tired."
    },
    {
        question: "Why do cows have hooves instead of feet?",
        answer: "Because they lactose."
    },
    {
        question: "Why can't you hear a pterodactyl go to the bathroom?",
        answer: "Because the 'P' is silent."
    },
    {
        question: "Why don't skeletons fight each other?",
        answer: "They don't have the guts."
    },
    {
        question: "Why did the coffee file a police report?",
        answer: "It got mugged."
    },
    {
        question: "Why don't programmers like nature?",
        answer: "It has too many bugs."
    },
    {
        question: "Why do seagulls fly over the sea?",
        answer: "Because if they flew over the bay, they’d be bagels."
    },
    {
        question: "Why did the computer go to the doctor?",
        answer: "Because it had a virus."
    },
    {
        question: "Why did the tomato turn red?",
        answer: "Because it saw the salad dressing."
    },
    {
        question: "Why don't you ever see elephants hiding in trees?",
        answer: "Because they're so good at it."
    },
    {
        question: "Why did the golfer bring two pairs of pants?",
        answer: "In case he got a hole in one."
    },
    {
        question: "Why can't your nose be 12 inches long?",
        answer: "Because then it would be a foot."
    },
    {
        question: "Why did the scarecrow win an award?",
        answer: "Because he was outstanding in his field."
    },
    {
        question: "Why don't some couples go to the gym?",
        answer: "Because some relationships don't work out."
    },
    {
        question: "Why did the bicycle stand up by itself?",
        answer: "It was two-tired."
    },
    {
        question: "Why did the math book look sad?",
        answer: "Because it had too many problems."
    },
    {
        question: "Why was the math book sad?",
        answer: "It had too many problems."
    },
    {
        question: "Why did the gym close down?",
        answer: "It just didn't work out."
    },
    {
        question: "Why did the scarecrow become a successful motivational speaker?",
        answer: "Because he was outstanding in his field."
    },
    {
        question: "Why shouldn't you trust stairs?",
        answer: "Because they're always up to something."
    },
    {
        question: "Why did the math book look sad?",
        answer: "Because it had too many problems."
    },
    {
        question: "Why don't scientists trust atoms?",
        answer: "Because they make up everything."
    },
    {
        question: "Why did the bicycle fall over?",
        answer: "Because it was two-tired."
    },
    {
        question: "Why was the big cat disqualified from the race?",
        answer: "Because it was a cheetah."
    },
    {
        question: "Why did the scarecrow become a successful motivational speaker?",
        answer: "Because he was outstanding in his field."
    },
    {
        question: "Why don't scientists trust atoms?",
        answer: "Because they make up everything."
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const jokesContainer = document.getElementById('jokes-container');
    
    jokes.forEach(joke => {
        const box = document.createElement('div');
        box.classList.add('box');

        const body = document.createElement('div');
        body.classList.add('body');

        const imgContainer = document.createElement('div');
        imgContainer.classList.add('imgContainer');

        const h3 = document.createElement('h3');
        h3.classList.add('text-white', 'fs-5');
        h3.textContent = joke.question;

        imgContainer.appendChild(h3);

        const content = document.createElement('div');
        content.classList.add('content', 'd-flex', 'flex-column', 'align-items-center', 'justify-content-center');

        const contentDiv = document.createElement('div');
        contentDiv.style.transform = 'translateZ(100px)';
        contentDiv.style.background = 'linear-gradient(45deg, #FE0061,#FFEB3B)';
        contentDiv.style.padding = '20px';

        const p = document.createElement('p');
        p.classList.add('fs-6', 'text-white');
        p.textContent = joke.answer;

        contentDiv.appendChild(p);
        content.appendChild(contentDiv);
        
        body.appendChild(imgContainer);
        body.appendChild(content);
        box.appendChild(body);
        jokesContainer.appendChild(box);
    });
});
const quotes = {
    happy: [
        "“For indeed, with hardship [will be] ease.” (94:6)",
        "“And whoever relies upon Allah – then He is sufficient for him.” (65:3)"
    ],
    sad: [
        "“Indeed, Allah is with the patient.” (2:153)",
        "“So verily, with the hardship, there is relief.” (94:6)"
    ],
    motivated: [
        "“Indeed, Allah will not change the condition of a people until they change what is in themselves.” (13:11)",
        "“So do not weaken and do not grieve, and you will be superior if you are [true] believers.” (3:139)"
    ],
    stressed: [
        "“And whoever puts all his trust in Allah, He will be enough for him.” (65:3)",
        "“Indeed, with hardship [will be] ease.” (94:6)"
    ]
};

function getQuote() {
    const mood = document.getElementById("mood").value;
    const moodQuotes = quotes[mood];
    const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
    document.getElementById("quote").innerText = randomQuote;
}

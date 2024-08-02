const quotes = {
    happy: [
        "“For indeed, with hardship [will be] ease.” (94:6)",
        "“And whoever relies upon Allah – then He is sufficient for him.” (65:3)",
        "“So remember Me; I will remember you.” (2:152)",
        "“And seek help through patience and prayer.” (2:45)",
        "“And it is He who created the night and day.” (21:33)",
        "“Say, 'In the bounty of Allah and in His mercy – in that let them rejoice.'” (10:58)",
        "“Indeed, Allah is with the doers of good.” (29:69)",
        "“And whoever fears Allah – He will make for him a way out.” (65:2)",
        "“He is the First and the Last.” (57:3)",
        "“So be patient. Indeed, the promise of Allah is truth.” (30:60)"
    ],
    sad: [
        "“Indeed, Allah is with the patient.” (2:153)",
        "“So verily, with the hardship, there is relief.” (94:6)",
        "“And We have certainly made the Quran easy for remembrance.” (54:17)",
        "“Do not grieve; indeed Allah is with us.” (9:40)",
        "“So lose not heart, nor fall into despair.” (3:139)",
        "“And whoever puts all his trust in Allah, He will be enough for him.” (65:3)",
        "“Your ally is none but Allah.” (5:55)",
        "“And rely upon Allah; and sufficient is Allah as Disposer of affairs.” (33:3)",
        "“And He found you lost and guided [you].” (93:7)",
        "“And Allah is the best of providers.” (62:11)"
    ],
    motivated: [
        "“Indeed, Allah will not change the condition of a people until they change what is in themselves.” (13:11)",
        "“So do not weaken and do not grieve, and you will be superior if you are [true] believers.” (3:139)",
        "“And those who strive for Us – We will surely guide them to Our ways.” (29:69)",
        "“And whoever fears Allah – He will make for him a way out.” (65:2)",
        "“And seek help through patience and prayer.” (2:45)",
        "“And whoever holds firmly to Allah has [indeed] been guided to a straight path.” (3:101)",
        "“So be patient. Indeed, the promise of Allah is truth.” (30:60)",
        "“And whoever relies upon Allah – then He is sufficient for him.” (65:3)",
        "“So remember Me; I will remember you.” (2:152)",
        "“He is with you wherever you are.” (57:4)"
    ],
    stressed: [
        "“And whoever puts all his trust in Allah, He will be enough for him.” (65:3)",
        "“Indeed, with hardship [will be] ease.” (94:6)",
        "“And We have certainly made the Quran easy for remembrance.” (54:17)",
        "“So verily, with the hardship, there is relief.” (94:6)",
        "“And whoever fears Allah – He will make for him a way out.” (65:2)",
        "“And whoever is grateful – his gratitude is only for the benefit of himself.” (31:12)",
        "“Do not lose hope, nor be sad.” (3:139)",
        "“Your ally is none but Allah.” (5:55)",
        "“And rely upon Allah; and sufficient is Allah as Disposer of affairs.” (33:3)",
        "“And be patient, for indeed, Allah does not allow to be lost the reward of those who do good.” (11:115)"
    ]
};

function getQuote(mood) {
    const moodBoxes = document.querySelectorAll('.mood-box');
    moodBoxes.forEach(box => {
        box.classList.remove('hidden', 'expanded');
        if (!box.classList.contains(mood)) {
            box.classList.add('hidden');
        } else {
            box.classList.add('expanded');
            const moodQuotes = quotes[mood];
            const randomQuote = moodQuotes[Math.floor(Math.random() * moodQuotes.length)];
            box.innerText = randomQuote; // Erstat boksteksten med citatet
        }
    });
}

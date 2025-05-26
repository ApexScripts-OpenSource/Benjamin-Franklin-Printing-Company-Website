const quotes = [
    "An investment in knowledge pays the best interest.",
    "Well done is better than well said.",
    "By failing to prepare, you are preparing to fail.",
    "Energy and persistence conquer all things.",
    "Early to bed and early to rise makes a man healthy, wealthy, and wise.",
    "Never leave that till tomorrow which you can do today.",
    "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
    "Beware of little expenses; a small leak will sink a great ship.",
    "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight.",
    "Diligence is the mother of good luck.",
    "Three may keep a secret, if two of them are dead.",
    "Instead of cursing the darkness, light a candle",
    "If all printers were determined not to print anything till' they were sure it would not offend nobody, there would be very little printed.",
    "I am for doing good to the poor, but...I think the best way of doing good to the poor, is not making them easy in poverty, but leading or driving them out of it. I observed...that the more public provisions were made for the poor, the less they provided for themselves, and of course became poorer. And, on the contrary, the less was done for them, the more they did for themselves, and became richer.",
    "The Constitution only guarantees the American people the right to pursue happiness. You have to catch it yourself.",
    "Be at war with your vices, at peace with your neighbors, and let every year find you a better man.",
    "Remember not only to say the right thing at the right place, but far more difficult still, to leave the unsaid the wrong thing at the tempting moment.",
    "Tis a great confidence in a friend to tell him your faults; greater to tell him his.",
    "The person who deserves most pity is a lonesome one on a rainy day who doesn't know how to read.",
    "Does thou love life? Then do not squander time, for that's the stuff life is made of."
];

function generateQuote() {
    const quoteText = document.getElementById("quoteText");
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = `"${quotes[randomIndex]}"`;
}

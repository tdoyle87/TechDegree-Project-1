// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
    document.getElementById('loadQuote').addEventListener("click", printQuote, true);

//quotes array
var quotes = [
    {
        quote: 'Stay focused, go after you dreams and keep moving toward your goals.' ,
        source: 'LL Cool J',
        tag: 'inspirational'
    },
    {
        quote: 'Whenever you find yourself on the sid of the majority, it is time to pause and reflect.',
        source: 'Mark Twain',
        tag: 'political'
    },
    {
        quote: 'Obstacles are those frightful things you see when you take your eyes off your goal.',
        source: 'Henry Ford',
        tag: 'inspirational'
    },
    {
        quote: 'Life is 10% what happens to you and 90% how you react to it.',
        source: 'Charles R. Swindoll',
        tag: 'inspirational'
    },
    {
        quote: 'Love yourself. It is important to stay positive because beauty comes from the inside out.',
        source: 'Jenn Proske',
        tag: 'inspirational'
    },
    {
        quote: 'Smile in the mirror. Do that every morning and you\'ll start to see a big difference in your life.',
        source: 'Yoko Ono',
        tag: 'inspirational'
    },
    {
        quote: 'Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.',
        source: 'Helen Keller',
        tag: 'inspirational'
    },
    {
        quote: 'I can\'t change the direction of the wind, but I can adjust my sails to always reach my destination',
        source: 'Jimmy Dean',
        tag: 'inspirational'

    },
    {
        quote: 'Our greatest glory is not in never falling, but in rising every time we fall.',
        source: 'Confucus',
        tag: 'inspirational'

    },
    {
        quote: 'If you find it puzzling, your brain is working correctly',
        source: 'Charles Munger',
        citation: 'Berkshire Hathaway',
        year: 2015,
        tag: 'politics'
    }
];


// variables used throught the program
var getObjectByIndex;
var source;
var citation;
var year;
var rgbColor;
var timeoutId;
var colorPicked;
var timeoutInterval;

//changes quote once 20 seconds after button click
function newRandomQuote() {
    timeoutInterval = window.setTimeout(printQuote, 20000);
}
//generates and random index number based on array size and stores it
// into a variable.
//arr.length
function getRandomQuote(arr){
    getObjectByIndex = Math.floor(Math.random() * arr) + 1;
    return quotes[getObjectByIndex];
}

//makes random RGB color for background
function getRandomColor() {
    red = Math.floor(Math.random() * 256) + 1;
    blue = Math.floor(Math.random() * 256) + 1;
    green = Math.floor(Math.random() * 256) + 1;
    rgbColor = 'RGB(' + red +', ' + blue +', ' + green +')';
    return rgbColor;
}

function printQuote(){

    //keeps pickquote from not being defined
    do {
        var pickQuote = getRandomQuote(quotes.length);
    }   while (pickQuote === undefined);

    var output = '<p class="quote">' + pickQuote.quote + '</p>';
    output += '<p class="source">' + pickQuote.source;
    if (pickQuote.citation !== undefined){
        output += '<span class="citation">' + pickQuote.citation + ' - </span>';
    }
    if (pickQuote.year !== undefined) {
        output += '<span class="year">' + pickQuote.year + '</span>';
    }
    //optional code to add tags to the page if desired
    //if tag is undefined it will not display anything
/*    if (pickQuote.tag !== undefined) {
        output += '<span class="tag"> <i><small>' + '   ' + pickQuote.tag + '</small></i></span>';
    }
*/
    output += '</p>';
    //displayes printQuote to the page
    document.getElementById('quote-box').innerHTML = output;
    //makes random color background each time printQuote is called
    document.body.style.background = getRandomColor();
}

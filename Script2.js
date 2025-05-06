document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".LOL").forEach(game => {
        game.style.display = "block"; // Ensure all elements are shown
        game.style.visibility = "visible"; // Make sure they are not hidden
        game.style.opacity = "1"; // Fully visible
    });
});



console.log("you shouldn't be seeing this");

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOMContentLoaded event fired");
});

document.addEventListener("contextmenu", (event) => event.preventDefault());

document.addEventListener("keydown", (event) => {
    if (
        event.key === "F12" ||
        (event.ctrlKey && event.shiftKey && (event.key === "I" || event.key === "J" || event.key === "C")) ||
        (event.ctrlKey && event.key === "U")
    ) {
        event.preventDefault();
    }
});

if (window.location.href.startsWith("view-source:")) {
    window.location.replace("https://www.google.com");
 
}

let devtoolsOpen = false;
const checkDevTools = () => {
    const threshold = 160;
    const widthThreshold = window.outerWidth - window.innerWidth > threshold;
    const heightThreshold = window.outerHeight - window.innerHeight > threshold;
    if (widthThreshold || heightThreshold) {
        devtoolsOpen = true;
        window.open('', '_self').close();
        window.location.replace("https://www.google.com");
    } else {
        devtoolsOpen = false;
    }
};
setInterval(checkDevTools, 1000);

setInterval(() => {
    console.clear();
    console.log = function () {};
    console.warn = function () {};
    console.error = function () {};
}, 100);

if (window.location.href.startsWith("view-source:")) {
        document.write(" < h1 > 500 Internal Server Error < /h1>");
            document.write(" < p > The server encountered an internal error. < /p>");
              throw new Error("Fake Server Error to Block Source Code Viewing");
            }
















document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.querySelector(".game-container");
    let games = Array.from(document.querySelectorAll(".LOL"));
    const searchInput = document.getElementById("searchBar");

    if (!gameContainer || games.length === 0 || !searchInput) {
        console.error("Game container, games, or search bar not found!");
        return;
    }

    // Function to position games in a grid
    function positionGames(gameList) {
        let startTop = 35;
        let startLeft = 10;
        let rowSpacing = 25;
        let colSpacing = 12;
        let maxColumns = 6;
        let currentLeft = startLeft;
        let currentTop = startTop;
        let columnCount = 0;

        gameList.forEach((game) => {
            game.style.position = "absolute";
            game.style.display = "block"; // Make sure elements are shown
            game.style.top = `${currentTop}%`;
            game.style.left = `${currentLeft}%`;

            columnCount++;
            currentLeft += colSpacing;

            if (columnCount >= maxColumns) {
                columnCount = 0;
                currentLeft = startLeft;
                currentTop += rowSpacing;
            }
        });
    }

    // Sort games alphabetically on page load
    games.sort((a, b) => {
        let nameA = a.getAttribute("data-name").toLowerCase();
        let nameB = b.getAttribute("data-name").toLowerCase();
        return nameA.localeCompare(nameB);
    });

    // Function to update the game display
    function renderGames(gameList) {
        gameContainer.innerHTML = "";
        gameList.forEach(game => gameContainer.appendChild(game));
        positionGames(gameList);
    }

    // Initial rendering (sorted alphabetically)
    renderGames(games);

    // Search Functionality
    searchInput.addEventListener("input", function () {
        const searchValue = searchInput.value.toLowerCase().trim();

        if (searchValue === "") {
            renderGames(games); // Restore alphabetical order when search is cleared
            return;
        }

        let exactMatches = [];
        let partialMatches = [];

        games.forEach(game => {
            const gameName = game.getAttribute("data-name").toLowerCase();
            if (gameName.startsWith(searchValue)) {
                exactMatches.push(game); // Prioritize exact matches
            } else if (gameName.includes(searchValue)) {
                partialMatches.push(game); // Secondary matches
            }
        });

        // Combine lists with exact matches first
        let orderedGames = [...exactMatches, ...partialMatches];

        // Render only the matching games
        renderGames(orderedGames);
    });
});









document.addEventListener("DOMContentLoaded", function () {
    const searchBar = document.getElementById("searchBar");
    const searchBarOriginalTop = searchBar.offsetTop; // Get original top position

    window.addEventListener("scroll", function () {
        if (window.scrollY >= searchBarOriginalTop) {
            searchBar.style.position = "fixed";
            searchBar.style.top = "0"; // Stick to the top of the screen
            searchBar.style.left = "18%"; // Keep original left position
            searchBar.style.width = "800px"; // Maintain width
            searchBar.style.zIndex = "1000"; // Ensure it's above other elements
            if (hidesearchbar) {
                  searchBar.style.display = "none";
            }
                else {
                searchBar.style.display = "block";
            }

        } else {
            searchBar.style.position = "absolute";
            searchBar.style.top = "27%"; // Restore original position
            searchBar.style.left = "18%";
              
            if (hidesearchbar) {
                  searchBar.style.display = "none";
            }
                else {
                searchBar.style.display = "block";
            }
            
        }
    });
});
 const siteVersion = "v3.5 [Password: msgisback]";

// Wait for the DOM to load
window.addEventListener("DOMContentLoaded", () => {
  const titleEl = document.querySelector(".site-title"); // or whatever your H1 has as a class

  if (titleEl) {
    titleEl.innerHTML += ` <span style="font-size: 1rem; color: #aaa;">${siteVersion}</span>`;
  }
});







document.addEventListener("keydown", function (e) {
  // If Shift is held and the key pressed is "=" (which becomes "+" when shifted)
  if (e.shiftKey && e.code === "Equal") {
    window.location.href = "https://launchpad.classlink.com/lwsd";
  }
});








document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById('background-music');
    
    // Ensure the music plays automatically but doesn't play on the index page
    if (window.location.pathname.includes("index.html")) {
        audio.pause();
    } else {
        audio.play();
    }

    // Functionality to mute audio when opening a game
    const gameContainer = document.getElementById("game-container");
    const gameFrame = document.getElementById("game-frame");
    const backArrow = document.querySelector(".back-arrow");

    // Open game and mute audio
    window.openpage = function(gameUrl) {
        gameFrame.src = gameUrl;
        gameContainer.style.display = "flex";
        backArrow.style.display = "block";

        // Mute background music
        audio.muted = true;
    };

    // Return to main page and unmute audio
    backArrow.addEventListener("click", (event) => {
        event.preventDefault();
        gameContainer.style.display = "none";
        backArrow.style.display = "none";
        gameFrame.src = "";

        // Unmute background music
        audio.muted = false;
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");
    
    // Set the volume to 50% (0.5)
    if (audio) {
        audio.volume = 1;
    }

    // Restore the music state from local storage
    if (localStorage.getItem("musicPaused") === "false") {
        audio.currentTime = localStorage.getItem("musicTime") || 0;
        audio.play();
    }

    // Save the music state before the user navigates away
    window.addEventListener("beforeunload", function () {
        if (audio) {
            localStorage.setItem("musicTime", audio.currentTime);
            localStorage.setItem("musicPaused", audio.paused);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let audio;

    // Check if the audio element already exists in the parent window (for multi-page persistence)
    if (window.parent && window.parent.document.getElementById("background-music")) {
        audio = window.parent.document.getElementById("background-music"); // Use the existing audio element
    } else {
        // If this is the main page, create the audio element
        audio = document.createElement("audio");
        audio.id = "background-music";
        audio.loop = true;
        audio.innerHTML = '<source src="CS.mp3" type="audio/mpeg">';
        document.body.appendChild(audio);
    }

    // Restore the last state of the music
    let savedTime = parseFloat(localStorage.getItem("musicTime")) || 0;
    let isPaused = localStorage.getItem("musicPaused") === "true";

    // Set the playback position and play/pause state
    audio.currentTime = savedTime;
    if (!isPaused) {
        audio.play();
    }

    // Save the music state before leaving the page
    window.addEventListener("beforeunload", function () {
        localStorage.setItem("musicTime", audio.currentTime);
        localStorage.setItem("musicPaused", audio.paused);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const audioId = "background-music";
    let audio;

    // Check if an audio element already exists in localStorage or another tab
    if (window.parent && window.parent.document.getElementById(audioId)) {
        audio = window.parent.document.getElementById(audioId);
    } else if (document.getElementById(audioId)) {
        audio = document.getElementById(audioId);
    } else {
        // Create the audio element if it doesn't exist
        audio = document.createElement("audio");
        audio.id = audioId;
        audio.loop = true;
        audio.innerHTML = '<source src="CS.mp3" type="audio/mpeg">';
        document.body.appendChild(audio);
    }

    // Restore playback position and state
    const savedTime = parseFloat(localStorage.getItem("musicTime")) || 0;
    const isPaused = localStorage.getItem("musicPaused") === "true";

    // Set the audio's current time and play/pause state
    audio.currentTime = savedTime;
    if (!isPaused) {
        audio.play();
    }

    // Periodically save the playback state to localStorage
    setInterval(() => {
        localStorage.setItem("musicTime", audio.currentTime);
        localStorage.setItem("musicPaused", audio.paused);
    }, 1000);

    // Listen for changes in localStorage to sync across tabs
    window.addEventListener("storage", (event) => {
        if (event.key === "musicTime" && audio) {
            audio.currentTime = parseFloat(event.newValue) || 0;
        } else if (event.key === "musicPaused" && audio) {
            if (event.newValue === "true") {
                audio.pause();
            } else {
                audio.play();
            }
        }
    });

    // Save the music state when the user leaves the page
    window.addEventListener("beforeunload", () => {
        localStorage.setItem("musicTime", audio.currentTime);
        localStorage.setItem("musicPaused", audio.paused);
    });
});

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
        } else {
            searchBar.style.position = "absolute";
            searchBar.style.top = "27%"; // Restore original position
            searchBar.style.left = "18%";
            
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("background-music");

    // Restore the music state from local storage
    if (localStorage.getItem("musicPaused") === "false") {
        audio.currentTime = localStorage.getItem("musicTime") || 0;
        audio.play();
    }

    // Save the music state before the user navigates away
    window.addEventListener("beforeunload", function () {
        localStorage.setItem("musicTime", audio.currentTime);
        localStorage.setItem("musicPaused", audio.paused);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let audio;

    // Check if audio already exists in another page
    if (window.parent && window.parent.document.getElementById("background-music")) {
        audio = window.parent.document.getElementById("background-music"); // Get the main audio element from index.html
    } else {
        // If this is the main page, create the audio element
        audio = document.createElement("audio");
        audio.id = "background-music";
        audio.loop = true;
        audio.innerHTML = '<source src="CS.mp3" type="audio/mpeg">';
        document.body.appendChild(audio);
    }

    // Restore the last state of music
    if (localStorage.getItem("musicPaused") === "false") {
        audio.currentTime = localStorage.getItem("musicTime") || 0;
        audio.play();
    }

    // Save the music state before leaving the page
    window.addEventListener("beforeunload", function () {
        localStorage.setItem("musicTime", audio.currentTime);
        localStorage.setItem("musicPaused", audio.paused);
    });

    // Add event listeners for play/pause buttons if they exist
    document.querySelectorAll(".play-music").forEach(btn => btn.addEventListener("click", () => audio.play()));
    document.querySelectorAll(".pause-music").forEach(btn => btn.addEventListener("click", () => audio.pause()));
});

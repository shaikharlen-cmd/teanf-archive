const records = [

    // Archive
    {
        image: "/assets/archive/standing-nameplate-back.jpg",
        path: "/assets/archive/standing-nameplate-back.jpg",
        page: "/archive/2023/archive-004.html"
    },

    {
        image: "/assets/archive/standing-nameplate-front.jpg",
        path: "/assets/archive/standing-nameplate-front.jpg",
        page: "/archive/2023/archive-004.html"
    },

    // Radio

    {
        image: "/assets/radio/apr-2023-tracklist_cmp.jpg",
        path: "/assets/radio/apr-2023-tracklist_cmp.jpg",
        page: "/radio/apr-2023.html"
    },

    {
        image: "/assets/radio/aug-2022-tracklist_cmp.jpg",
        path: "/assets/radio/aug-2022-tracklist_cmp.jpg",
        page: "/radio/aug-2022.html"
    },

    {
        image: "/assets/radio/dec-2022-tracklist_cmp.jpg",
        path: "/assets/radio/dec-2022-tracklist_cmp.jpg",
        page: "/radio/dec-2022.html"
    },

    {
        image: "/assets/radio/jun-2026-tracklist_cmp.jpg",
        path: "/assets/radio/jun-2026-tracklist_cmp.jpg",
        page: "/radio/jun-2026.html"
    },

    // Releases

    {
        image: "/assets/releases/i-remember-everything-now-cover_cmp.jpg",
        path: "/assets/releases/i-remember-everything-now-cover_cmp.jpg",
        page: "/releases/i-remember-everything-now.html"
    },

    {
        image: "/assets/releases/leaves-cover.jpg",
        path: "/assets/releases/leaves-cover.jpg",
        page: "/releases/leaves.html"
    },

    {
        image: "/assets/releases/north-america-cover_cmp.jpg",
        path: "/assets/releases/north-america-cover_cmp.jpg",
        page: "/releases/north-america.html"
    },

    {
        image: "/assets/releases/turn-off-the-engine-and-walk-away-cover.jpg",
        path: "/assets/releases/turn-off-the-engine-and-walk-away-cover.jpg",
        page: "/releases/turn-off-the-engine-and-walk-away.html"
    },

    {
        image: "/assets/releases/whendidthisend-cover.jpg",
        path: "/assets/releases/whendidthisend-cover.jpg",
        page: "/releases/whendidthisend.html"
    },

    {
        image: "/assets/releases/white-nothing-cover_cmp.jpg",
        path: "/assets/releases/white-nothing-cover_cmp.jpg",
        page: "/releases/white-nothing.html"
    }

];

// Pick a random record
const randomRecord = records[Math.floor(Math.random() * records.length)];

// Fill the homepage
document.getElementById("random-link").href = randomRecord.page;
document.getElementById("random-image").src = randomRecord.image;
document.getElementById("random-image").alt = randomRecord.path;
document.getElementById("random-path").textContent = randomRecord.path;
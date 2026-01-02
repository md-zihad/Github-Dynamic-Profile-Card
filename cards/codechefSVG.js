export function codechefSVG(profileName, username, rating, highestRating, totalContests) {
    return `<svg width="500" height="180" viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">

    <!-- Gradient background -->
    <defs>
        <linearGradient id="cc-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#42275a"/>
            <stop offset="100%" stop-color="#734b6d"/>
        </linearGradient>

        <!-- Star icon -->
        <g id="star">
            <polygon
                points="10,1 12.6,7.5 19.7,7.5 14,11.9 16.2,18.5 10,14.5 3.8,18.5 6,11.9 0.3,7.5 7.4,7.5"
                fill="#1E7D22"/>
        </g>

        <!-- CodeChef Hat Logo -->
        <g id="chef-hat">
            <ellipse cx="0" cy="-8" rx="18" ry="10" fill="#ffffff"/>
            <ellipse cx="-12" cy="-12" rx="8" ry="6" fill="#ffffff"/>
            <ellipse cx="12" cy="-12" rx="8" ry="6" fill="#ffffff"/>
            <rect x="-18" y="-6" width="36" height="20" rx="4" fill="#ffffff"/>
        </g>
    </defs>

    <!-- Card background -->
    <rect x="0" y="0" width="500" height="180" rx="20" fill="url(#cc-grad)" />

    <!-- Username -->
    <text x="20" y="38" font-size="22" fill="white" font-weight="bold">
        ${username}
    </text>

    <!-- Two stars beside username -->
    <g transform="translate(155,22) scale(0.9)">
        <use href="#star"/>
        <use href="#star" transform="translate(22,0)"/>
    </g>

    <!-- Profile Name -->
    <text x="20" y="60" font-size="14" fill="#e0e0e0">
        ${profileName}
    </text>

    <!-- Rating -->
    <text x="20" y="90" font-size="18" fill="white">
        Rating: ${rating}
    </text>

    <!-- Highest Rating -->
    <text x="20" y="115" font-size="16" fill="white">
       Highest Rating: ${highestRating}
    </text>

    <!-- Total Contests -->
    <text x="20" y="140" font-size="16" fill="white">
        Total Contest: ${totalContests}
    </text>

    <!-- Animated CodeChef Logo -->
    <g transform="translate(410,95)">
        <use href="#chef-hat">
            <animateTransform
                attributeName="transform"
                type="scale"
                values="1;1.1;1"
                dur="1.8s"
                repeatCount="indefinite"/>
        </use>
    </g>

</svg>`;
}

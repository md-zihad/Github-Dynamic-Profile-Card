export function atcoderSVG(userName, rating, rank, ratedMatches, highestRating) {
    return `<svg width="500" height="180" viewBox="0 0 500 180" xmlns="http://www.w3.org/2000/svg">

        <!-- Gradient background -->
        <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1f4037" />
                <stop offset="100%" stop-color="#99f2c8" />
            </linearGradient>

            <!-- Animated 3D cube for AtCoder logo -->
            <g id="cube">
                <rect x="-15" y="-15" width="30" height="30" fill="#f0ad4e" stroke="#fff" stroke-width="2" />
                <rect x="-15" y="-15" width="30" height="30" fill="none" stroke="#fff" stroke-width="2" />
            </g>
        </defs>

        <!-- Rounded card background -->
        <rect x="0" y="0" width="500" height="180" rx="20" fill="url(#grad)" />

        <!-- Username -->
        <text x="20" y="40" font-size="24" fill="white" font-weight="bold">
            ${userName}
        </text>

        <!-- Current Rating -->
        <text x="20" y="75" font-size="18" fill="white">
            Rating: ${rating}
        </text>

        <!-- Highest Rating -->
        <text x="20" y="105" font-size="18" fill="white">
            Highest Rating: ${highestRating}
        </text>

        <!-- Rated Matches -->
        <text x="20" y="135" font-size="16" fill="white">
            Rated Matches: ${ratedMatches}
        </text>

        <!-- Rank -->
        <text x="20" y="155" font-size="16" fill="white">
            Rank: ${rank}
        </text>

        <!-- AtCoder 3D Cube Logo on the right -->
        <g transform="translate(400,90)">
            <use href="#cube">
                <animateTransform attributeName="transform"
                    type="rotate"
                    from="0 0 0"
                    to="360 0 0"
                    dur="3s"
                    repeatCount="indefinite" />
            </use>
        </g>

    </svg>`;
}

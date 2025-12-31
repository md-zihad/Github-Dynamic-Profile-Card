import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import dotenv from "dotenv";
import { generateSVG } from "../cards/generateSVG.js";

dotenv.config({ path: "../.env.dev" });

const url = process.env.Codeforces_API;
const nodeEnv = process.env.NODE_ENV;

if (!url) throw new Error(`API Url is missing in .env.${nodeEnv}`);

async function codeforces() {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`Failed to fetch API: ${res.status}`);
        }
        const data = await res.json();
        const user = data.result[0];
        console.log(user);
        const { handle, rating, rank, maxRating } = user;

        const svg = generateSVG(handle, rating, rank, maxRating);

        console.log(svg);

        const svgPath = path.resolve("../cards/codeforces.svg");

        fs.writeFileSync(svgPath, svg);
    } catch (error) {
        console.error("Error fetching Codeforces API:", error);
        throw error;
    }
}

codeforces();

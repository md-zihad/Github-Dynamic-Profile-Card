import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import * as cheerio from "cheerio";

dotenv.config({ path: "../.env.dev" });

const url = process.env.AtCoder_API;
const nodeEnv = process.env.NODE_ENV;

console.log(url);

if (!url) {
    throw new Error(`API Url is missing in .env.${nodeEnv}`);
}

async function atcoder() {
    try {
        const responsne = await fetch(url);

        const html = await responsne.text();

        const $ = cheerio.load(html);

        const container = $("#main-container .row").first();

        const userName = container
            .find(".col-md-3.col-sm-12 .username span")
            .first()
            .text()
            .trim();

        console.log(userName);

        if (!userName) {
            throw new Error(
                `User '${userId}' not found or profile page has changed structure`
            );
        }

        const rank = container.find("h3 b").first().text().trim();

        const ratingTable = container.find("table").last();

        const rating = ratingTable
            .find("tr")
            .eq(0)
            .find("td")
            .text()
            .replace(/\s+/g, "")
            .trim();

        const highestRating = ratingTable
            .find("tr")
            .eq(1)
            .find("td")
            .text()
            .replace(/\s+/g, "")
            .trim();

        const ratingMatches = ratingTable
            .find("tr")
            .eq(2)
            .find("td")
            .text()
            .replace(/\s+/g, "")
            .trim();

        const ratedMatches = ratingTable
            .find("tr")
            .filter((i, el) => {
                return $(el).find("th").text().includes("Rated Matches");
            })
            .find("td")
            .text()
            .replace(/\s+/g, "")
            .trim();

        console.log(rank);
        console.log(rating);
        console.log(highestRating);
        console.log(ratingMatches);
        console.log(ratedMatches);
    } catch (error) {
        console.log(error);
    }
}

atcoder();

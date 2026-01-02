import dotenv from "dotenv";
import fs from "fs";
import path from "path";
import fetch from "node-fetch";
import * as cheerio from "cheerio";
import { codechefSVG } from "../cards/codechefSVG.js";

dotenv.config({ path: "../.env.dev" });

const url = process.env.Codechef_API;
const nodeEnv = process.env.NODE_ENV;

console.log(url);

if (!url) {
    throw new Error(`API Url is missing in .env.${nodeEnv}`);
}

async function codechef() {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        const container = $(".user-profile-container");

        const profileName = container.find("h1.h2-style").first().text().trim();


        const userName = container.find(".m-username--link").first().text().trim();

        if (!userName) {
            throw new Error("User not found or page structure changed");
        }

        const totalContests = container
            .find(".contest-participated-count b")
            .first()
            .text()
            .trim();

        const rating = container
            .find(".rating-number")
            .first()
            .text()
            .replace(/\s+/g, "")
            .trim();

        const highestRating =
            container
                .find(".rating-header small")
                .text()
                .match(/Highest Rating\s+(\d+)/)?.[1] || "";

        const result = {
            profileName,
            userName,
            totalContests,
            rating,
            highestRating,
        };

        console.log(result);

        const svg = codechefSVG(
            profileName,
            userName,
            rating,
            highestRating,
            totalContests
        );
        fs.writeFileSync(path.resolve("../cards/codechef.svg"), svg);

        return result;
    } catch (error) {
        console.error("Error fetching CodeChef profile:", error);
        throw error;
    }
}

codechef();

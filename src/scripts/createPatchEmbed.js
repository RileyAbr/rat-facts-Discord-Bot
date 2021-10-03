const Discord = require("discord.js");

const fs = require("fs");
const version = require("../../package.json").version;
const releaseUrl = require("../scripts/mostRecentRelease").releaseLink;

const currentPatchNotes = fs
    .readFileSync(`./release_notes/v${version}.md`, "utf8")
    // These replaces filter out the markdown headings and change them bold. They are down individually so different styles can be applied to different levels
    .replace(/^# (.*$)/gim, "**$1**")
    .replace(/^## (.*$)/gim, "**$1**")
    .replace(/^### (.*$)/gim, "**$1**")
    .replace(/^#### (.*$)/gim, "**$1**");

const patchEmbed = new Discord.MessageEmbed()
    .setColor("#66757f")
    .setTitle(`${version} Release Notes`)
    .setURL(releaseUrl)
    .setDescription(currentPatchNotes)
    .setThumbnail(
        "https://raw.githubusercontent.com/RileyAbr/rat-facts-Discord-Bot/master/rat_logo.png"
    )
    .setFooter(
        "rat facts created by Riley Abrahamson",
        "https://avatars3.githubusercontent.com/u/32375220?s=460&u=a375968682555bb66226556bf7ee33d6d35b7961&v=4"
    );

exports.patchEmbed = patchEmbed;

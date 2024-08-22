const getSubstringFromNInstance = (str, char, N=3) => {
    // Initialize the position for searching and the count of occurrences
    let position = -1;

    // Loop to find the index of the third occurrence of the character
    for (let i = 0; i < N; i++) {
        position = str.indexOf(char, position + 1);
        if (position === -1) break; // If the character is not found, exit the loop
    }

    // If the third occurrence is found, return the substring starting from it
    if (position !== -1) {
        return str.substring(position + 1);
    } else {
        // Return an empty string or null if the third occurrence is not found
        return '';
    }
};

const convertTableToTemplate = (tableText) => {
    tableText = tableText.replace(`{| class="mw-collapsible mw-collapsed wikitable" style="background-color:#f4f2e8;"
! colspan="2" style="background-color:#c5bb9a; width: 300px;" | [[file:red notification bubble.png|link=|left|25px]]<big>Rotation</big>&nbsp;&nbsp;[[file:djeeta gbvs chibi crop.png|40px|link=]]
|-`, "").replace(`|}`, "");
    // Split the input into rows based on the MediaWiki table row delimiter "|-"
    const rows = tableText.split("|-");

    // Initialize an array to store each "Turn" section of the output
    let outputSections = [];

    // Regular expressions to match table cell patterns
    const leftColumnRegex = /\|\s*style="[^"]*"\s*\|\s*'''?([^']+)'''?/;

    // Iterate over each row
    rows.forEach((row, index) => {
        // Match the left column content
        const leftColumnMatch = row.match(leftColumnRegex);
        if (!leftColumnMatch) return; // Skip rows that don't match the expected format

        // Extract the title (left column content) and clean it
        let title = leftColumnMatch[1].trim();
        let content = getSubstringFromNInstance(row,'|').trim();
        title = title.replace(/'''/g, ''); // Remove bolding apostrophes

        content = content.split("\n").map(r=>{
            if (r.includes("[[file:Raid_parts_attack.png|60px|link=]]")) return "{{RaidPart|attack|pad=t}}<br>";
            if (r.includes("[[file:Hold_C.A._icon.png|link=|80px]]")) return "{{RaidPart|caoff|pad=t}}<br>";
            if (r.includes("[[file:Auto_C.A._icon.png|link=|80px]]")) return "{{RaidPart|caon|pad=t}}<br>";
            if (r.includes("* Fated Chain")) return "{{RaidPart|fc|pad=t}}";
            else if (r.includes("{{CharacterSkill")) {
                const skills = [];
                const alts = [];
                let character = "";
                r.split("{{CharacterSkill").forEach((s,i) => {
                    if (i==0)  {
                        return;
                    }
                    let skill;
                    s.split("|").forEach(p=>{
                        if (p.includes("page=")) character = p.replace("page=", "");
                        if (p.includes("no=")) skill = p.replace("no=", "");
                        if (p.includes("alt=")) alts.push(skill);
                    });
                    skills.push(skill);
                });
                return `* {{SkillRotation|${character}|${skills.join(",")}${alts.length>0? `|alt=${alts.join(",")}`: ""}}}`;
            }
            else if (r.includes("{{ClassSkill")) {
                const skills = [];
                r.split("{{ClassSkill").forEach((s,i) => {
                    if (i==0) return;
                    skills.push(r.split("|")[1]);
                });
                return `* {{SkillRotation|MC|${skills.join(",")}}}`
            }
            else {
                return r;
            }
        }).join("\n");

        let section = `|title${outputSections.length + 1}=${title}\n|\n${content}`;

        // Add the section to the output
        outputSections.push(section);
    });

    // Join all sections into the final output
    return `{{Rotation\n${outputSections.join("\n")}\n}}`;
};

window.onload = e => {
    document.querySelector("#convert-button").onclick = (e) =>{
        document.querySelector("#output-textarea").value =
            convertTableToTemplate(document.querySelector("#input-textarea").value)
    }
}
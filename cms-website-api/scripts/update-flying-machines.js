require("dotenv").config();

function getRandomScore () {
    return Math.floor(Math.random() * 5) + 1;
}

async function main() {
    const res = await fetch("http://127.0.0.1:1337/api/flying-machines", {
        method: "GET",
        headers: {
            Authorization: "bearer "+ process.env.STRAPI_API_TOKEN,
            "Content-Type": "application/json"
        }
    })

    if (!res.ok) {
        const json = await res.json();
        console.error(json);
        return;
    }

        const json = await res.json();
        const data = json.data;
        let imgId = 1;
        for (let machine of data) {
            const res = await fetch("http://127.0.0.1:1337/api/flying-machines/" + machine.documentId, {
                method: "PUT",
                body: JSON.stringify({
                    data: {
                        Name: machine.Name,
                        Description: machine.Description,
                        Image: imgId,
                        Attack: getRandomScore(),
                        Defense: getRandomScore(),
                        Agility: getRandomScore(),
                        Speed: getRandomScore(),
                        Capacity: getRandomScore()
                    }
                }),
                headers : {
                    Authorization: "bearer " + process.env.STRAPI_API_TOKEN,
                    "Content-Type" : "application/json"
                }

            })
            if (!res.ok) {
                const json = await res.json();
                console.error(json);
                continue
            }
            imgId++
        }
}

main();
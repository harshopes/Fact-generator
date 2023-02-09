const btn = document.getElementById("button");
const apikey = "Ni+pxiza6JV2eBBmxqH6uA==ApXKnXYv1i4a0HeC";
const factEl = document.getElementById("fact1");
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey
    }
};
const facturl = "https://api.api-ninjas.com/v1/facts?limit=1";

let isLoading = false;

async function getfact() {
    if (isLoading) {
        return;
    }

    try {
        isLoading = true;
        factEl.innerText = "Updating...";
        btn.disabled = true;
        btn.classList.add("disabled");
        btn.innerText = "Loading...";
        const response = await fetch(facturl, options);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        factEl.innerText = data[0].fact;
    } catch (error) {
        console.error(error);
    } finally {
        isLoading = false;
        btn.innerText = "Get Fact";
        btn.disabled = false;
        btn.classList.remove("disabled");
    }
}

btn.addEventListener("click", getfact);

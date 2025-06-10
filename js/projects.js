const username = "JWILSON0867";
const container = document.getElementById("projects-container");

async function fetchRepos() {
    const endpoint = `https://api.github.com/users/${username}/repos`;
    try {
        const response = await fetch(endpoint);
        if (!response.ok) throw new Error(`GitHub API error: ${response.status}`);
        const repos = await response.json();

        repos.forEach(repo => {
            const section = document.createElement("section");
            section.classList.add("project");

            section.innerHTML = `
                <h2><a href="${repo.html_url}" target="_blank">${repo.name}</a></h2>
                <p>${repo.description || "No description provided."}</p>
            `;

            container.appendChild(section);
        });
    } catch (err) {
        container.innerHTML = `<p>Error loading projects: ${err.message}</p>`;
        console.error(err);
    }
}

fetchRepos();

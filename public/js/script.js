const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResults = document.getElementById("searchResults");

async function performSearch() {
    const query = searchInput.value.trim().toLowerCase();

    if (!query) {
        searchResults.innerHTML = "";
        return;
    }

    try {
        const response = await fetch("/api/services");
        const services = await response.json();

        const results = services.filter(service =>
            service.name.toLowerCase().includes(query) ||
            service.category.toLowerCase().includes(query) ||
            service.level.toLowerCase().includes(query)
        );

        if (results.length === 0) {
            searchResults.innerHTML = `
                <div class="no-results">
                    <h3>No service found</h3>
                    <p>We couldn't find a service matching "${searchInput.value}".</p>
                </div>
            `;
            return;
        }

        searchResults.innerHTML = results.map(service => `
            <div class="result-card">
                <div class="result-icon">🪪</div>
                <div class="result-content">
                    <div class="result-top">
                        <span class="result-category">${service.category}</span>
                        <span class="result-level">${service.level}</span>
                    </div>
                    <h3>${service.name}</h3>
                    <p>${service.description}</p>
                    ${service.verified ? `<span class="verified">✓ Official source</span>` : ""}
                    <div>
                        <a href="/services/${service.id}" class="details-btn">View Details →</a>
                        <a href="${service.officialUrl}" target="_blank" rel="noopener noreferrer" class="official-btn">
                            Official Website ↗
                        </a>
                    </div>
                </div>
            </div>
        `).join("");

    } catch (error) {
        console.error("Search error:", error);
        searchResults.innerHTML = `
            <div class="no-results">
                <h3>Something went wrong</h3>
                <p>Please try again.</p>
            </div>
        `;
    }
}

searchBtn.addEventListener("click", performSearch);

searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        performSearch();
    }
});

document.querySelectorAll("[data-search]").forEach(button => {
    button.addEventListener("click", () => {
        searchInput.value = button.dataset.search;
        performSearch();
    });
});

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000/api';
const API_KEY = import.meta.env.VITE_BACKEND_API_KEY;

async function apiFetch(endpoint, options = {}) {
    const url = `${API_BASE_URL}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

    const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
        ...(options.headers || {}),
    };

    try {
        const response = await fetch(url, { ...options, headers });

        if (response.status === 401) {
            console.error("Unauthorized: Invalid or missing API key.");
            throw new Error("Unauthorized request");
        }

        if (!response.ok) {
            const errText = await response.text();
            throw new Error(`Error ${response.status}: ${errText}`);
        }

        const contentType = response.headers.get("content-type") || "";
            if (contentType.includes("application/json")) {
            return await response.json();
        }

        return await response.text();

    } catch (error) {
        console.error(`API fetch failed (${url}):`, error);
        throw error;
    }
}


export const api = {

    get: (endpoint) => apiFetch(endpoint),

    post: (endpoint, data) =>
        apiFetch(endpoint, {
            method: "POST",
            body: JSON.stringify(data),
        }),

    put: (endpoint, data) =>
        apiFetch(endpoint, {
            method: "PUT",
            body: JSON.stringify(data),
        }),
        
    delete: (endpoint) =>
        apiFetch(endpoint, {
            method: "DELETE",
        })

};

export default api;

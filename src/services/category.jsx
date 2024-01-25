// services/CategoryService.js

const getAllCategories = async () => {
    try {
        const response = await fetch("/api/category/get-all-categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.categories;
        } else {
            throw new Error("Failed to fetch categories");
        }
    } catch (error) {
        console.error("Error during categories:", error);
        throw error;
    }
};

export default {
    getAllCategories,
};

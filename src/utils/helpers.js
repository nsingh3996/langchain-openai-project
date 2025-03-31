export const formatResponse = (response) => {
    return response.data ? response.data : null;
};

export const handleError = (error) => {
    console.error("API Error:", error);
    return { success: false, message: error.message };
};

export const isValidResponse = (response) => {
    return response && response.status === 200;
};
const getPublicIdFromUrl = (url) => {

    // Example URL: https://res.cloudinary.com/demo/image/upload/v1234567890/folder/image_name.jpg

    if (!url) return null;

    // Remove any query parameters
    const cleanUrl = url.split("?")[0];

    // Split the URL into parts
    const parts = cleanUrl.split("/");

    // Find the index of "upload"
    const uploadIndex = parts.indexOf("upload");

    if (uploadIndex === -1) return null;

    // Get everything after "upload/"
    const pathParts = parts.slice(uploadIndex + 1); // e.g. [ "v1234567890", "folder", "image.jpg" ]

    // Remove version if it exists
    if (pathParts[0].startsWith("v")) {
        pathParts.shift(); // remove "v1234567890"
    }

    // Remove extension from filename
    const fileName = pathParts.pop(); // e.g. "image.jpg"
    const fileNameWithoutExt = fileName.substring(0, fileName.lastIndexOf(".")); // "image"

    // Rebuild path to form the public_id

    if (pathParts.length > 0) {
        return `${pathParts.join("/")}/${fileNameWithoutExt}`; // e.g. "folder/image"
    }
    
    return `${fileNameWithoutExt}`;
};

export { getPublicIdFromUrl };


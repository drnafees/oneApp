async function uploadFiles(formData: FormData) {
    try {
        const response = await fetch(`${import.meta.env.VITE_HOST}/api/users/upload`, {
            method: "POST",
            body: formData,
        });

        if (!response.ok) {
            const errorText = await response.text();
            return {
                status: false,
                title: "Failed to upload file(s)",
                message: errorText,
            }
        }

        const result = await response.json();
        return {
            status: true,
            title: "File(s) uploaded successfully",
            message: result.message,
        }

    } catch (error: any) {
        return {
            status: false,
            title: "Failed to upload file(s)",
            message: error.message,
        }
    }
}

export default uploadFiles;
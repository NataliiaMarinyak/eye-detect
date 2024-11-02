export const getImageForYoutubePreload = (url) => {

    const embedIndex = url.indexOf("/embed/");
    if (embedIndex === -1) {
        return "/images/defaultYoutubeImg.webp";
    }

    const videoIdName = url.slice(embedIndex + 7);

    return `https://img.youtube.com/vi/${videoIdName}/hqdefault.jpg`;
}
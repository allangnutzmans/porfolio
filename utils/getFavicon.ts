export const getFavicon = async (url: string) => await fetch('')
    .then(res => res.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const iconLink = doc.querySelector('link[rel~="icon"]')?.getAttribute('href');
        if (!iconLink) throw new Error('Favicon not found');
        const faviconUrl = `https://www.google.com/s2/favicons?domain=${new URL(url).hostname}`
        return faviconUrl
    })
    .catch(err => console.error(err));
    
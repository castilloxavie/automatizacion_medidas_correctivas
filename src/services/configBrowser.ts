export const brwserComfig = {
    headless: false,
    defaultViewport: null,
    args: [
        "--start-maximized" ,
        "--disable-notifications",
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--disable-accelerated-2d-canvas",
        "--no-first-run",
        "--no-zygote",
        "--disable-gpu",
        "--window-size=1920,1080"
        
    ],
    ignoreHTTPSErrors: true
}
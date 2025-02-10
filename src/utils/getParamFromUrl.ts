export function getParamFromUrl(url: string, param: string): string | undefined {
    const parsedUrl: URL = new URL(url)
    const searchParams: URLSearchParams = new URLSearchParams(parsedUrl.search)
    return searchParams.get(param) ?? undefined
}

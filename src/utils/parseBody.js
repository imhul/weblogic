export default async function parseResponseBody(response) {
    const reader = await response.body.getReader();
    const decoder = new TextDecoder('utf-8');
    let result = '';
    while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value);
        result += chunk;
    }

    if (result.startsWith('{')) {
        return JSON.parse(result);
    } else return false;
}

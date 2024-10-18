// your code here
document.getElementById('button').addEventListener('click', function() {
    const name = document.getElementById('name').value.trim();
    const year = document.getElementById('year').value.trim();
    let baseUrl = 'https://localhost:8080/';

    // Create query parameters based on input
    const params = [];
    if (name) {
        params.push(`name=${encodeURIComponent(name)}`);
    }
    if (year) {
        params.push(`year=${encodeURIComponent(year)}`);
    }

    // Update the URL with the query string
    const queryString = params.length ? '?' + params.join('&') : '';
    document.getElementById('url').textContent = baseUrl + queryString;
});

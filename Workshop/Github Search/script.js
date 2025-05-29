async function handleSearch() {
	const user = document.getElementById('username').value.trim();
	const output = document.getElementById('output');

	if (!user) {
		output.innerHTML = `<p style="color:red;">Please enter a GitHub username.</p>`;
		return;
	}

	const url = `https://github-profiles-trending-developers-repositories-scrapping.p.rapidapi.com/profiles?profileUrl=https://github.com/${user}`;
	const options = {
		method: 'GET',
		headers: {
			'x-rapidapi-key': '346d57df26mshe38743c4c9794f5p1fa1a2jsn1aa10150e71c',
			'x-rapidapi-host': 'github-profiles-trending-developers-repositories-scrapping.p.rapidapi.com'
		}
	};

	try {
		const response = await fetch(url, options);
		const data = await response.json();

		console.log(data);
		const profile = data;
		output.innerHTML = `
                
                <h2>${profile.data.profileName}</h2>
                <h2></h2>Commits:</strong> ${profile.data.totalCommits}</h2>`;
	} catch (error) {
		output.innerHTML = `<h2 style="color:red;">Error fetching data: ${error.message}</h2>`;
		console.error(error);
	}
}
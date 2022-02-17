const TOKEN = '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';
export const fetchUsers = async (text) => {
	const res = await fetch(`https://api.github.com/search/users?q=${text}`, {
		headers: {
			Authorization: `token ${TOKEN}`,
		},
	});
	const data = await res.json();
	return data.items;
};

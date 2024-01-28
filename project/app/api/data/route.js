export async function GET(request) {
	const data = {
		name: "Tanya",
		age: 18,
		bio: "Some info"
	}

	return new Response(JSON.stringify(data))
}

export async function POST(request) {
	return new Response(request.body)
}
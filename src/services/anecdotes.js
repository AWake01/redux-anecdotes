const baseUrl = 'http://localhost:3001/anecdotes'

//GET
const getAnecdotes = async () => {
    const response = await fetch(baseUrl)

    if(!response.ok) {
        throw new Error('Failed to fech anecdotes')
    }

    return await response.json()
}

export default { getAnecdotes }
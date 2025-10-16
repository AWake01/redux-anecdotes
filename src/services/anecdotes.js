const baseUrl = 'http://localhost:3001/anecdotes'

const getId = () => (100000 * Math.random()).toFixed(0)

//GET
const getAnecdotes = async () => {
    const response = await fetch(baseUrl)

    if(!response.ok) {
        throw new Error('Failed to fetch anecdotes')
    }

    return await response.json()
}

//POST
const createAnecdote = async (content) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content, important: false, votes: 0 })
    }

    const response = await fetch(baseUrl, options)

    if(!response.ok) {
        throw new Error('Failed to create anecdote')
    }

    return await response.json()
}

export default { getAnecdotes, createAnecdote }
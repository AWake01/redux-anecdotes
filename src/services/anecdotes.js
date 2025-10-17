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

//PUT
const vote = async (id) => {
    const getAnecdote = await fetch(`${baseUrl}/${id}`)
    console.log(getAnecdote)
    if(!getAnecdote.ok) {
        throw new Error('Failed to find anecdote')
    }

    const currentAnecdote = await getAnecdote.json()
    console.log(currentAnecdote)
    const newAnecdote = {...currentAnecdote, votes: currentAnecdote.votes + 1}
    console.log(newAnecdote)

    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAnecdote)
    }

    const updateAnecdote = await fetch(`${baseUrl}/${id}`, options)

    if(!updateAnecdote.ok) {
        throw new Error('Failed to vote for anecdote')
    }

    return await updateAnecdote.json()
}

export default { getAnecdotes, createAnecdote, vote }
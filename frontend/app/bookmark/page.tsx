import React, { useEffect } from 'react'
import BookmarkedMovies from './book-marked-movies'

import { useBookMark } from '../hooks/useBookMark'

const BookMarkPage = () =>
{
    const { data } = useBookMark()
    console.log(data)
    return (
        <BookmarkedMovies />
    )
}

export default BookMarkPage
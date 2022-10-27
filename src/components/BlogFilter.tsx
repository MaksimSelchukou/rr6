import React, {FormEvent} from 'react';

type BlogFilterType = {
    setSearchParams: (searchParams: string) => void
    latest: boolean
    postQuery: string
}

export const BlogFilter = ({latest, postQuery, setSearchParams}: BlogFilterType) => {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const form: any = event.currentTarget.elements as any
        console.log(form)
        const query = form.inputSearch.value
        const isLatest = form.latest.checked
        const objParams: any = {}
        if (query.length) objParams.post = query
        if (isLatest) objParams.latest = true
        setSearchParams(objParams)

    }
    return (
        <form autoComplete="off" onSubmit={handleSubmit}>
            <input type="search" name="inputSearch"/>
            <label style={{padding: '10px'}}>
                <input type="checkbox" name='latest'/> New only
            </label>
            <input type="submit" value='search' name="search"/>
        </form>
    );
};

export default BlogFilter;
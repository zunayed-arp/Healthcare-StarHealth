import { useEffect, useState } from "react"

const useBlog = () => {
	const [blogs, setBlogs] = useState([]);


	useEffect(() => {
		fetch('/blog.json')
			.then(res => res.json())
			.then(data => setBlogs(data))
	}, [])


	return {
		blogs
	}
}

export default useBlog;
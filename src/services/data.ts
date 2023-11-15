export type Blog = {
  id: number
  title: string
  image: string
  content: string
  category: 'Latest' | 'Tech' | 'Dev' | 'IA'
  date: string
  author: string
}

const blogs : Blog[] = [
  {
    id: 1,
    title: "Blog 1",
    image: 'https://picsum.photos/500',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, aliquam odio quis, porttitor nisl. Sed euismod, leo quis aliquet ultricies, nisl urna aliquam nisl, quis lacinia ligula nunc sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sed nunc quis orci consequat lacinia. Sed euismod, leo quis aliquet ultricies, nisl urna aliquam nisl, quis lacinia ligula nunc sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sed nunc quis orci consequat lacinia.",
    category: 'Latest',
    date: '12/12/2020',
    author: 'Luis Sanchez'
  },
  {
    id:2,
    title: "Blog 2",
    image: 'https://picsum.photos/500',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, aliquam odio quis, porttitor nisl. Sed euismod, leo quis aliquet ultricies, nisl urna aliquam nisl, quis lacinia ligula nunc sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sed nunc quis orci consequat lacinia. Sed euismod, leo quis aliquet ultricies, nisl urna aliquam nisl, quis lacinia ligula nunc sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sed nunc quis orci consequat lacinia.",
    category: 'Tech',
    date: '12/12/2020',
    author: 'Luis Sanchez'
  },
  {
    id:3,
    title: "Blog 3",
    image: 'https://picsum.photos/500',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, aliquam odio quis, porttitor nisl. Sed euismod, leo quis aliquet ultricies, nisl urna aliquam nisl, quis lacinia ligula nunc sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sed nunc quis orci consequat lacinia. Sed euismod, leo quis aliquet ultricies, nisl urna aliquam nisl, quis lacinia ligula nunc sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sed nunc quis orci consequat lacinia.",
    category: 'IA',
    date: '12/12/2020',
    author: 'Luis Sanchez'
  },
  {
    id:4,
    title: "Blog 4",
    image: 'https://picsum.photos/500',
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae diam euismod, aliquam odio quis, porttitor nisl. Sed euismod, leo quis aliquet ultricies, nisl urna aliquam nisl, quis lacinia ligula nunc sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sed nunc quis orci consequat lacinia. Sed euismod, leo quis aliquet ultricies, nisl urna aliquam nisl, quis lacinia ligula nunc sit amet est. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nulla facilisi. Sed sed nunc quis orci consequat lacinia.",
    category: 'Dev',
    date: '12/12/2020',
    author: 'Luis Sanchez'
  }
]

const getBlogs = () => {
  return blogs
}

const getBlog = (id : number) => {
  return blogs.find(blog => blog.id === id)
}

export {
  getBlogs,
  getBlog
}
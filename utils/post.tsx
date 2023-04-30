import fs from "fs"
import matter from "gray-matter"
export const  getPostMetadata = async ()=>{
    const path  = process.cwd()+"/blogs"
    const files = fs.readdirSync(path)
    const metadatas = files.map((file) => {
        const filePath = `${path}/${file}`
        const rawContent = fs.readFileSync(filePath, {
            encoding: "utf-8",
        })
        const { data } = matter(rawContent)
        return {
            title: data.title,
            date: data.date,
            subtitle: data.subtitle,
            slug: file.replace(".md", ""),
        }
    })

    return metadatas

}

export const  getPostContent = async (filePath:string)=>{
        const rawContent = fs.readFileSync(filePath, {
            encoding: "utf-8",
        })
        const {content,data} = matter(rawContent)
        return {
            content: content,
            data:data
        }

}


import { supabase } from "@/utils/superbase"
export async function POST(request: Request) {
  const { url } = await request.json()

  // check if url is valid through regex
    const urlRegex = new RegExp(
        /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i
    )
    if (!urlRegex.test(url)) {
        return new Response('Invalid URL', { status: 400 })
    }

  const {data, error } = await supabase
    .from('submision')
    .insert([{ "url":url }])

  if (error) {
    console.log(error)
    return new Response("It's us not You!", { status: 500 })
  }
  return new Response('Message sent!', { status: 200 })
}
import { createClient } from '@supabase/supabase-js'
export const supabase = createClient(process.env.SUPERBASE_API_URL!, process.env.SUPERBASE_API_KEY!)
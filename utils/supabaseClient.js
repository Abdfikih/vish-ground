import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://gpfvofpepokdbpzkrpoe.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdwZnZvZnBlcG9rZGJwemtycG9lIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ1OTkwMjcsImV4cCI6MjAwMDE3NTAyN30.pRUW0KNTdqZ7W8UEl1wemK0wOGxMH8Vxfe6BzZMpbOo";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

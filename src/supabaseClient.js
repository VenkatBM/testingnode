import { createClient } from "@supabase/supabase-js";

// To be more secure: .env file.
const supabaseURL = "https://qqzwgcayqyabxqupmweo.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFxendnY2F5cXlhYnhxdXBtd2VvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE1MTcxODgsImV4cCI6MjAwNzA5MzE4OH0.LlGBMbwI4vhudaI2pjDl-uPWguLxSPCwUVORmQqMdD8";

export const supabase = createClient(supabaseURL, supabaseAnonKey);

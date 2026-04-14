import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://nmrzefqzvodzrpomhulo.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tcnplZnF6dm9kenJwb21odWxvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxNTY2MDQsImV4cCI6MjA5MTczMjYwNH0.qBCVEIV0wNdSPb-pNjTZLWpH5kA2BvTbb-zes-Bxxco'


export const supabase = createClient(supabaseUrl, supabaseAnonKey)
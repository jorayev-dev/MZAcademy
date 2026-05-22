import { createClient } from '@supabase/supabase-js';

// Supabase panelidan olgan URL manzilingiz
const supabaseUrl = 'https://dnqoauipmdcfdocihyut.supabase.co'; 

// "Publishable key" (oxirgi rasmingizdagi 'sb_publishable...' bilan boshlanadigan kod)
const supabaseKey = 'sb_publishable_d7HWRhIy79uS2x_9Hyab6g_DzQu_...'; 

export const supabase = createClient(supabaseUrl, supabaseKey);
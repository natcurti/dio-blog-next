import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://xlpxqgtshnwyipiqwgjs.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscHhxZ3RzaG53eWlwaXF3Z2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzNzc0MzEsImV4cCI6MjAxOTk1MzQzMX0.XNCaAVU7hnlTbl_BdxPY0-NLLmU9EKIqCFUhlehHMog",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhscHhxZ3RzaG53eWlwaXF3Z2pzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQzNzc0MzEsImV4cCI6MjAxOTk1MzQzMX0.XNCaAVU7hnlTbl_BdxPY0-NLLmU9EKIqCFUhlehHMog"
    }
})
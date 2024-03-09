import { env } from "@/lib/env"
import axios from "axios"

const api = axios.create({
  baseURL: env.BASE_URL,
})

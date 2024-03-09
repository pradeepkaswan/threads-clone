import { User } from "../types"
import { env } from "process"

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await fetch(`${env.BASE_URL}/users`)
    if (!response.ok) {
      throw new Error("Failed to fetch users")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching users: ", error)
    throw error
  }
}

export const getUserById = async (id: string): Promise<User> => {
  try {
    const response = await fetch(`${env.BASE_URL}/users/${id}`)
    if (!response.ok) {
      throw new Error("Failed to fetch user")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching user: ", error)
    throw error
  }
}

export const createUser = async (user: User): Promise<User> => {
  try {
    const response = await fetch(`${env.BASE_URL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    if (!response.ok) {
      throw new Error("Failed to create user")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error creating user: ", error)
    throw error
  }
}

export const updateUser = async (user: User): Promise<User> => {
  try {
    const response = await fetch(`${env.BASE_URL}/users/${user.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
    if (!response.ok) {
      throw new Error("Failed to update user")
    }
    const data = await response.json()
    return data
  } catch (error) {
    console.error("Error updating user: ", error)
    throw error
  }
}

export const deleteUser = async (id: string): Promise<void> => {
  try {
    const response = await fetch(`${env.BASE_URL}/users/${id}`, {
      method: "DELETE",
    })
    if (!response.ok) {
      throw new Error("Failed to delete user")
    }
  } catch (error) {
    console.error("Error deleting user: ", error)
    throw error
  }
}

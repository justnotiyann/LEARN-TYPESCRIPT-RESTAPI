import { User, UserDocument } from "../../../models/users.model"
import { createHashPassword } from '../../utils/bcryptjs'

export async function getAllUsers(): Promise<UserDocument[]> {
    try {
        const data: UserDocument[] = await User.find()

        return data
    } catch (e: any) {
        throw new Error("Data")
    }
}

async function getUserByEmail(email: string): Promise<UserDocument> {
    return new Promise(async function (resolve, reject) {
        try {
            const check = await User.findOne({
                email
            })
            resolve(check)
        } catch (error) {
            reject(error)
        }
    })
}

export async function createUser(username: string, email: string, password: string): Promise<UserDocument> {
    return new Promise(async function (resolve, reject) {
        try {
            const check = await getUserByEmail(email)
            if (check) reject("Email already in used")

            const result: UserDocument = await User.create({
                username,
                email,
                password: await createHashPassword(password)
            })
            await result.save()
            resolve(result)
        } catch (error: any) {
            reject(error)
        }
    })
}
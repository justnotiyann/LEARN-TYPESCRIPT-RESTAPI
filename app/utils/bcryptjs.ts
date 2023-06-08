import * as bcryptjs from 'bcryptjs'


export async function createHashPassword(password: string) {
    try {
        const salt = await bcryptjs.genSalt(10)
        const hash = await bcryptjs.hash(password, salt)
        return hash
    } catch (error: any) {
        console.log(error)

    }
}
class contactsDAO {
    static async getUsers(client){
        const cursor = await client
        .find()
        .project({_id : 0})
        .sort({nome: 1})
        .limit(10)
        try {
            const result = await cursor.toArray()
            return result
        }
        catch(e){
            console.log(e)
        }
    }

    static async insertUser(client,doc){
        const ok = await client.insertOne(doc)
        try{
            return ok
        }catch(e){
            console.log(e)
        }
    }

    static async updateTelefoneByEmail(client,email,tel){
        const docs = await client.updateOne(email,tel)
        try{
            return docs
        } catch(e){
            console.log(e)
        }
    }

    static async deleteUserByNome(client,nome){
        const ok = await client.deleteOne(nome)
        try {
            return ok
        }catch(e){
            console.log(e)
        }
    }
}

module.exports = contactsDAO
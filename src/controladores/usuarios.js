const { knex } = require('../conexao')
const { verificarCamposObrigatorios } = require('../util')
const bcrypt = require('bcrypt')

const cadastrarUsuario = async (req, res) => {
    let msg = ''
    const { username, senha } = req.body

    verificarCamposObrigatorios({ username, senha }, res)

    try {
        const usernameCheck = await knex('usuarios')
            .where('username', username)
            .first()

        if (usernameCheck) {
            msg = 'O userName está sendo usado por outro usuário.'
        } else {
            const senhaCriptografada = await bcrypt.hash(senha, 10)

            const novoUsuario = await knex('usuarios').insert({
                username,
                senha: senhaCriptografada,
            })
            if (novoUsuario) {
                msg = 'O usuário foi adicionado com sucesso.'
            } else {
                msg = 'Não foi possível cadastrar o usuário'
            }
        }

        return res.json(msg)
    } catch (error) {
        return res.json(error.message)
    }
}

module.exports = {
    cadastrarUsuario,
}

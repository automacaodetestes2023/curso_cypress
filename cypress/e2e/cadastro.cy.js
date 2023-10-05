/// <reference types="cypress" />
import Home from "../support/pages/home/index"
import Deliver from "../support/pages/deliver/index"
import Utilidades from "../support/utilidades"


describe('Cadastro de usuários', () => {

    beforeEach(() => {
        Home.acessarHomeBugerEats(`${Cypress.env('urlBase')}`)
        Home.acessarCadastro()
    })

    it('Deve efetuar cadastro inserindo CNH com método de entrega Moto', () => {

        const dadosUsuario = Utilidades.gerarDadosFakerUsuario()
        const dadosEndereco = Utilidades.gerarDadosFakerEndereco()

        Deliver.preencherDadosDoUsuario({
            nomeCompleto: dadosUsuario.nomeCompleto,
            cpf: dadosUsuario.cpf,
            email: dadosUsuario.email,
            telefone: dadosUsuario.telefone
        })

        Deliver.preencherEnderecoUsuario({
            cep: dadosEndereco.cep,
            numero: dadosEndereco.numero,
            complemento: dadosEndereco.complemento
        })

        Deliver.selecionarMetodoEntrega('Moto')

        Deliver.efetuarUploadCnh({
            caminhoArquivo: 'cypress/support/imagem/cnh.jpg',
            nomeArquivo: 'cnh.jpg'
        })

        Deliver.validarCadastroSucesso()
    })
    it('Deve efetuar cadastro inserindo CNH com método de entrega Bicicleta', () => {

        const dadosUsuario = Utilidades.gerarDadosFakerUsuario()
        const dadosEndereco = Utilidades.gerarDadosFakerEndereco()

        Deliver.preencherDadosDoUsuario({
            nomeCompleto: dadosUsuario.nomeCompleto,
            cpf: dadosUsuario.cpf,
            email: dadosUsuario.email,
            telefone: dadosUsuario.telefone
        })

        Deliver.preencherEnderecoUsuario({
            cep: dadosEndereco.cep,
            numero: dadosEndereco.numero,
            complemento: dadosEndereco.complemento
        })

        Deliver.selecionarMetodoEntrega('Bicicleta')

        Deliver.efetuarUploadCnh({
            caminhoArquivo: 'cypress/support/imagem/cnh.jpg',
            nomeArquivo: 'cnh.jpg'
        })

        Deliver.validarCadastroSucesso()
    })
    it('Deve efetuar cadastro inserindo CNH com método de entrega Van/Carro', () => {

        const dadosUsuario = Utilidades.gerarDadosFakerUsuario()
        const dadosEndereco = Utilidades.gerarDadosFakerEndereco()

        Deliver.preencherDadosDoUsuario({
            nomeCompleto: dadosUsuario.nomeCompleto,
            cpf: dadosUsuario.cpf,
            email: dadosUsuario.email,
            telefone: dadosUsuario.telefone
        })

        Deliver.preencherEnderecoUsuario({
            cep: dadosEndereco.cep,
            numero: dadosEndereco.numero,
            complemento: dadosEndereco.complemento
        })

        Deliver.selecionarMetodoEntrega('Van/Carro')

        Deliver.efetuarUploadCnh({
            caminhoArquivo: 'cypress/support/imagem/cnh.jpg',
            nomeArquivo: 'cnh.jpg'
        })

        Deliver.validarCadastroSucesso()
    })
})
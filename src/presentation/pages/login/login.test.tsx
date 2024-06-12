import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('Login Page', () => {
  test('Não deve exibir Spinner ou Mensagem de Erro ao iniciar a página', () => {
    const { getByTestId } = render(<Login/>)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })

  test('O botão de submit deve estar desabilitado até o preenchimento correto dos campos do form', () => {
    const { getByTestId } = render(<Login/>)
    // as HTMLButtonElement cria um cache do elemento e com isso temos acessa ao .disabled
    const submitButton = getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)
  })

  test('Deve validar o estado inicial dos Spans dos Inputs Email e Senha', () => {
    const { getByTestId } = render(<Login/>)
    const emailStatus = getByTestId('email-status')
    expect(emailStatus.title).toBe('Campo obrigatório')
    expect(emailStatus.textContent).toBe('🔴')
    const passwordStatus = getByTestId('password-status')
    expect(passwordStatus.title).toBe('Campo obrigatório')
    expect(passwordStatus.textContent).toBe('🔴')
  })
})

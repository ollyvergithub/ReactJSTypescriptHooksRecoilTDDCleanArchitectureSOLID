import React from 'react'
import { render } from '@testing-library/react'
import Login from './login'

describe('Login Page', () => {
  test('Não deve exibir Spinner ou Mensagem de Erro ao iniciar a página', () => {
    const { getByTestId } = render(<Login/>)
    const errorWrap = getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)
  })
})

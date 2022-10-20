import { ApolloError } from '@apollo/client'
import { Warning } from 'phosphor-react'

interface ErrorGProps {
  error: ApolloError
}

export const ErrorG = ({ error }: ErrorGProps) => {
  return (
    <div>
      {error.networkError ? (
        <span>
          <Warning weight="bold" /> Erro de conexão
        </span>
      ) : (
        <span>
          <Warning weight="bold" /> Usuário não encontrado
        </span>
      )}
    </div>
  )
}

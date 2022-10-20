import { ApolloError } from '@apollo/client'
import { Warning } from 'phosphor-react'

import style from './ErrorG.module.scss'
import { motion } from 'framer-motion'

interface ErrorGProps {
  error: ApolloError
}

export const ErrorG = ({ error }: ErrorGProps) => {
  return (
    <motion.div
      className={style.errorg}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.5
        }
      }}
    >
      {error.networkError ? (
        <span>
          <Warning weight="bold" /> Erro de conexão
        </span>
      ) : (
        <span>
          <Warning weight="bold" /> Usuário não encontrado
        </span>
      )}
    </motion.div>
  )
}

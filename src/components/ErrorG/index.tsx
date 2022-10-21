import { ApolloError } from '@apollo/client'
import { Warning } from 'phosphor-react'

import style from './ErrorG.module.scss'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useGetTheme } from 'hooks/useGetTheme'
import { useState } from 'react'

interface ErrorGProps {
  error: ApolloError
}

export const ErrorG = ({ error }: ErrorGProps) => {
  const theme = useGetTheme()

  return (
    <motion.div
      className={style.error}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 0.5,
          duration: 0.5
        }
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.5
        }
      }}
    >
      <div className={style.error__container} data-theme={theme}>
        <Warning weight="bold" />

        {error.networkError ? (
          <span>Erro de conexão</span>
        ) : (
          <>
            <span>Usuário não encontrado</span>
          </>
        )}
      </div>
    </motion.div>
  )
}

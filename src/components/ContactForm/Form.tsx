import { useState } from 'react'
import toast from 'react-hot-toast'
// import { sendContactMail } from '../../services/sendMail';
import { theme } from '../../styles/theme'
import { FormContainer, Input, TextArea } from './styles'

export default function Form() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mensage, setMensage] = useState('')

  const [loading, setLoading] = useState(false)

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    if (!name || !email || !mensage) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      })
      return
    }

    try {
      setLoading(true)
      // await sendContactMail({
      //   name,
      //   senderMail: email,
      //   content: mensage
      // })

      toast('Mensagem enviada com sucesso!', {
        style: {
          background: theme.secondary,
          color: '#fff'
        }
      })
    } catch (error) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      })
    } finally {
      setLoading(false)
      setName('')
      setEmail('')
      setMensage('')
    }
  }

  return (
    <FormContainer data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="Nome"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
      />
      <TextArea
        placeholder="Mensagem"
        value={mensage}
        onChange={({ target }) => setMensage(target.value)}
      />
      <button type="submit" disabled={loading}>
        ENVIAR
      </button>
    </FormContainer>
  )
}

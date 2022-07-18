import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  type HTMLChakraProps,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC, ReactNode, useEffect, useState } from 'react'

export const Modal: FC<
  { targetModalType: string; children: ReactNode } & HTMLChakraProps<'div'>
> = ({ targetModalType, children, ...chakraProps }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  useEffect(() => {
    const { modalType } = router.query
    if (modalType === targetModalType) {
      setOpen(true)
      return
    }
    setOpen(false)
  }, [router, targetModalType])
  return (
    <ChakraModal isOpen={open} onClose={() => router.push(router.pathname)}>
      <ModalOverlay>
        <ModalContent p='20' w='80%' {...chakraProps}>
          {children}
        </ModalContent>
      </ModalOverlay>
    </ChakraModal>
  )
}

import { chakra, Button, Image } from '@chakra-ui/react'
import { GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { ComponentProps, FC, useEffect, useReducer } from 'react'

// @ts-ignore
const DynamicModal = dynamic(() => import('@/src/components/Modal').then((res) => res.Modal))

type Props = {}
export const getServerSideProps = (
  context: GetServerSidePropsContext,
): GetServerSidePropsResult<Props> => {
  return {
    props: {},
  }
}

const ModalSample: FC<Props> = () => {
  const [currentDate, mountCurrentDate] = useReducer(() => new Date().toLocaleTimeString(), '')
  const router = useRouter()
  useEffect(() => {
    mountCurrentDate()
  }, [])
  return (
    <chakra.div display='grid' gap='8'>
      <chakra.h1>モーダルをSPAで操作するサンプルです</chakra.h1>
      <chakra.p>ページマウント時の時刻：{currentDate}</chakra.p>
      <chakra.div display='flex' gap='12'>
        <Button
          onClick={() =>
            router.push({
              pathname: router.pathname,
              query: { modalType: 'sample' },
            })
          }
        >
          ここを押すとサンプルモーダルが開きます
        </Button>
        <Button
          onClick={() =>
            router.push({
              pathname: router.pathname,
              query: { modalType: 'image' },
            })
          }
        >
          ここを押すとimageモーダルが開きます
        </Button>
      </chakra.div>
      <DynamicModal targetModalType='sample'>サンプルモーダルです</DynamicModal>
      <DynamicModal targetModalType='image'>
        <Image
          src='https://pbs.twimg.com/media/Dkt3fnqUcAAVaUN.jpg'
          alt='よくわからんが、まあ動いているからヨシ！'
        />
      </DynamicModal>
    </chakra.div>
  )
}
export default ModalSample

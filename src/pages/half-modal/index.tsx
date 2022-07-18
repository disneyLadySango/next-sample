import { chakra, Button, Image } from '@chakra-ui/react'
import { GetServerSidePropsResult } from 'next'
import NextLink from 'next/link'
import { FC, useState, useEffect } from 'react'

type Props = {}
export const getServerSideProps = (): GetServerSidePropsResult<Props> => {
  return {
    props: {},
  }
}

const LinkTestPage: FC<Props> = ({}) => {
  return (
    <chakra.div position='relative' maxWidth='500px' width='60%' height='100vh' mx='auto'>
      <chakra.div position='fixed' top='0' left='auto' maxWidth='500px' width='60%'>
        <Image
          width='100%'
          height='auto'
          src='https://s3-ap-northeast-1.amazonaws.com/storage.withnews.jp/2022/06/02/1/38/1388e327-ml.jpg'
          alt='しっかり体調管理 こまめに水分＋塩分'
        />
      </chakra.div>
      <chakra.div
        p='8'
        height='120vh'
        position='relative'
        mt='70vh'
        borderTopLeftRadius='20px'
        borderTopRightRadius='20px'
        backgroundColor='#fff'
        border='1px solid black'
      >
        ここにコンテンツが入ります、スライドすると画像の上にかぶさります
      </chakra.div>
    </chakra.div>
  )
}

export default LinkTestPage

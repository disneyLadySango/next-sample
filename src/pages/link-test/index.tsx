import { chakra, Button } from '@chakra-ui/react'
import { GetServerSidePropsResult } from 'next'
import NextLink from 'next/link'
import { FC, useState, useEffect } from 'react'

type Props = {
  randomNum: number
}
export const getServerSideProps = (): GetServerSidePropsResult<Props> => {
  console.log('CALL____SERVERSIDE')
  const randomNum = Math.random()
  return {
    props: {
      randomNum,
    },
  }
}

const LinkTestPage: FC<Props> = ({ randomNum }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('EFFECT_________')
  }, [])

  return (
    <chakra.div>
      <chakra.p>サーバで生成した乱数の値は{randomNum}（リンク遷移時は常に変動します）</chakra.p>
      <chakra.p>現在のカウントは・・・{count}</chakra.p>
      <chakra.div display='flex' gap='8'>
        <Button onClick={() => setCount((prev) => ++prev)}>カウントアップ</Button>
        <Button onClick={() => setCount((prev) => --prev)}>カウントダウン</Button>
      </chakra.div>
      <chakra.div>リンクの動作を確認します</chakra.div>
      <chakra.div display='gird' gap='8'>
        <chakra.table border='1px solid black'>
          <thead>
            <tr>
              <th>リンク</th>
              <th>クリック次のカウントの状態</th>
              <th>Networkタブで確認できる内容</th>
              <th>useEffect（依存配列空）</th>
            </tr>
          </thead>
          <tbody>
            <chakra.tr border='1px solid black'>
              <th>
                <chakra.a display='block' href='/link-test'>
                  通常のリンク
                </chakra.a>
              </th>
              <td>0に戻る</td>
              <td>htmlが返ってきている</td>
              <td>毎回実行される</td>
            </chakra.tr>
            <chakra.tr border='1px solid black'>
              <th>
                <NextLink href='/link-test' passHref>
                  <chakra.a display='block' href='dummy'>
                    next/link
                  </chakra.a>
                </NextLink>
              </th>
              <td>カウントは変わらない</td>
              <td>JSONが返ってきてCSRされている</td>
              <td>初回アクセス時のみ実行される</td>
            </chakra.tr>
          </tbody>
        </chakra.table>
      </chakra.div>
    </chakra.div>
  )
}

export default LinkTestPage

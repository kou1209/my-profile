import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Flex,
  Link,
  Stack,
} from '@chakra-ui/react'

export default function HomePage() {
  return (
    <Stack bg="gray.100">
      <Box mx="auto" w={['100%', '80%', '60%']}>
        <Box bg="white" rounded="md" p={4} shadow="lg" m={8} px={8}>
          <Heading as="h3" size="lg">
            経歴
          </Heading>
          <UnorderedList mt={8}>
            <ListItem my={2}>1994/12　熊本県出身</ListItem>
            <ListItem my={2}>
              2012/11　なんでも鑑定団に出演。出演者MVPを獲得
            </ListItem>
            <ListItem my={2}>
              2013/04　専修大学商学部マーケティング学科入学
            </ListItem>
            <ListItem my={2}>
              2014/05　取得単位数0で専修大学を中退。4年ほどフリーター活動に従事
            </ListItem>
            <ListItem my={2}>
              2018/11　SESの会社にて客先常駐社員として従事
            </ListItem>
            <ListItem my={2}>
              2019/07　
              <Link
                href="https://collab-it.net"
                target="_blank"
                rel="noopener noreferrer"
                color={'blue.600'}
              >
                株式会社コラビット
              </Link>
              入社 現在に至る
            </ListItem>
          </UnorderedList>
        </Box>

        <Box bg="white" rounded="md" p={4} shadow="lg" m={8} px={8}>
          <Heading as="h3" size="lg">
            今までやってきたこと
          </Heading>
          <Heading as="h4" size="md" mt={8}>
            本業
          </Heading>

          <Box
            borderWidth="1.5px"
            borderRadius="lg"
            overflow="hidden"
            mt={2}
            p={2}
          >
            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              自社プロダクトの開発運用
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              my={2}
            >
              期間：2019年7月〜2021年11月
            </Box>
            <Box mt={1}>
              Ruby on
              Railsを用いた中〜大規模toC向けwebアプリの新機能開発。保守運用
            </Box>
          </Box>

          <Box
            borderWidth="1.5px"
            borderRadius="lg"
            overflow="hidden"
            mt={2}
            p={2}
          >
            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              toB向け自社プロダクトの新機能開発
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              my={2}
            >
              期間：2019年9月〜2020年1月
            </Box>
            <Box mt={1}>
              Vue.jsを用いた既存のtoB向けSPAの新機能開発。VueRouter、Vuexを使用し、単一ファイルコンポーネントを用いる形での実装を行いました。UIコンポーネントにはVuetifyを利用しました。
            </Box>
          </Box>

          <Box
            borderWidth="1.5px"
            borderRadius="lg"
            overflow="hidden"
            mt={2}
            p={2}
          >
            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              toB向け新プロダクトの開発
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              my="2"
            >
              期間：2020年1月〜2020年5月
            </Box>
            <Box mt={1}>
              サーバーサイドにGraphQL(GraphQL
              Ruby)フロントエンドにNuxt.jsを用いたtoB向けSPAの新プロダクト開発。自分はフロントエンドをメインで担当しました。
            </Box>
          </Box>

          <Box
            borderWidth="1.5px"
            borderRadius="lg"
            overflow="hidden"
            mt={2}
            p={2}
          >
            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              toB向け新プロダクトの開発
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              my="2"
            >
              期間：2020年5月〜現在
            </Box>
            <Box mt={1}>
              サーバーサイドにRails、フロントエンドにNuxt.jsを用いたtoB向けSPAの新プロダクト開発。インフラ以外は全て自分が担当しました。リリースは完了し現在は保守運用を行なっています。
            </Box>
          </Box>

          <Box
            borderWidth="1.5px"
            borderRadius="lg"
            overflow="hidden"
            mt={2}
            p={2}
          >
            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              toB向け自社プロダクトの開発
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              my="2"
            >
              期間：2021年11月〜現在
            </Box>
            <Box mt={1}>
              現在メインで担当しているプロダクト。
              サーバーサイドにGraphQL(GraphQL
              Ruby)フロントエンドにNext.js、TypeScriptとNuxt.jsを用いたtoB向けSPAプロダクト開発。graphql-codegenで型を自動生成しつつ
              GraphQLクライアントとしてApolloClientを使っています。現在はVue&JavaScriptのコードをReact&TypeScriptにリプレイスする業務を行なっています
            </Box>
          </Box>

          <Heading as="h4" size="md" mt={8}>
            副業
          </Heading>

          <Box
            borderWidth="1.5px"
            borderRadius="lg"
            overflow="hidden"
            mt={2}
            p={2}
          >
            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              自社プロダクトの開発運用
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              my="2"
            >
              期間：2020年2月〜2020年6月
            </Box>
            <Box mt={1}>
              Ruby on
              Railsを用いた教育サービス及びその管理画面の新機能開発。保守運用
            </Box>
          </Box>

          <Box
            borderWidth="1.5px"
            borderRadius="lg"
            overflow="hidden"
            mt={2}
            p={2}
          >
            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              自社プロダクトの開発運用
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              my="2"
            >
              2020年6月〜2020年9月
            </Box>
            <Box mt={1}>
              Nuxt.jsを用いたゲーム系webサービスの開発。新機能の開発やVue.jsからNuxt.jsへのリプレイスを行い、firebaseを用いた環境構築全て一人で行いました。
              サービスクローズに伴い契約終了
            </Box>
          </Box>

          <Box
            borderWidth="1.5px"
            borderRadius="lg"
            overflow="hidden"
            mt={2}
            p={2}
          >
            <Box fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              自社プロダクトの開発運用
            </Box>
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              my="2"
            >
              2020年12月〜現在
            </Box>
            <Box mt={1}>
              サーバーサイドにRails、フロントエンドにReact、TypeScriptを用いた地方と人材のマッチングサービスの機能開発、運用
            </Box>
          </Box>
        </Box>

        <Box bg="white" rounded="md" p={4} shadow="lg" m={8} px={8}>
          <Heading as="h3" size="lg">
            得意なこと
          </Heading>
          <Box mt={8}>
            下記の言語、フレームワークに関してはこれまでメインで触ってきており読み書き等問題なくできます。
            <br />
            言語: Ruby,TypeScript <br />
            フレームワーク: React,Vue,Ruby on Rails <br />
          </Box>
        </Box>

        <Box bg="white" rounded="md" p={4} shadow="lg" m={8} px={8}>
          <Heading as="h3" size="lg">
            苦手なこと
          </Heading>
          <Box mt={8}>
            インフラ周りが苦手です。dockerは並程度に使えますが、他インフラ構築の知見経験が少なく苦手です。経験としてはAWSは他人が作った環境で作業することはあったり、Firebaseで個人アプリホスティングしてみたり。くらいです。
            <br />
            自分個人でやるレベルの物は構築できますが、企業のプロダクションレベルのものを構築するのは難しいです。
          </Box>
        </Box>

        <Box bg="white" rounded="md" p={4} shadow="lg" m={8} px={8}>
          <Heading as="h3" size="lg">
            希望条件
          </Heading>
          <Box mt={8}>
            前回参画させていただいた企業では単価4000(税別)で稼働していたため、単価4000~(税別)で稼働したいと考えております。
          </Box>
        </Box>
      </Box>
    </Stack>
  )
}

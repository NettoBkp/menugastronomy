import React, { useEffect, useState } from "react";
import { Anchor, Avatar, Box, Button, Carousel, DropButton, Grommet, Header, Heading, Image, Main, MaskedInput, Page, PageHeader, StarRating, Text, TextInput } from 'grommet'
import { Lock, Login, Mail, Map, PhoneFlip, SearchAdvanced, User } from "grommet-icons";




const latWorld = (39.744301);
const lonWorld = (-8.807240);
const contineteWorldMap = 'Europe'
const nameWorld = 'Portugal';
const unidWorld = 'UE';
const nameCity = 'Leiria';
const contatoPhone = '(+351) 244 856 402'
const contatoMail = 'netto@menugastronomy.com'


const dataImg1 = "https://cafeviagem.com/wp-content/uploads/2022/08/restaurantes-em-Lisboa-Rocco-7.jpg";
const dataImg2 = "https://uploads.metropoles.com/wp-content/uploads/2023/03/03165638/pexels-mister-mister-3434523.jpg?w=1200&h=-1&s=1";
const dataImg3 = "https://h8f7z4t2.stackpathcdn.com/wp-content/uploads/2015/11/Terrazza-Casina-Valadier-Roma.jpg";
const dataImg4 = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/aa/e5/f2/dining-shared-at-bistro.jpg?w=1200&h=-1&s=1";
const avatarImg = "https://lh3.googleusercontent.com/a/ACg8ocLownY7DhaVhYQNpP34u7R1gt3LzXtDyzlwQABD3GXaIRQ=s576-c-no";


const themeRestVip = {
  global: {
    font: {
      family: 'Arial',
      size: '22px',
      height: '20px',
    },
  },

};
const cor1 = '#FFFFFF'; const cor2 = '#007F2D'; const cor3 = '#E30613'; const cor4 = '#BDBCBC';
const defCor1 = '#FFC72C'; const defCor2 = '#DA291C'; const defCor3 = '#27251F'; const defCor4 = '#27251F';

export function App() {
  const [showDrops, setShowDrops] = React.useState(false);
  const [showColor, setShowColor] = React.useState(true);
  const [showMapNameView, setShowMapNameView] = React.useState(false);
  const [colorOne, setColorOne] = React.useState('#F7F1E5');
  const [colorTwo, setColorTwo] = React.useState('#E7B10A');
  const [colorThree, setColorThree] = React.useState('#898121');
  const [colorFour, setColorFour] = React.useState('#4C4B16');
  const [sinalizaColor, setSinalizaColor] = React.useState('#ff1313');
  const [ligthColor, setLigthColor] = React.useState('#FFFFFF');
  const [showPassword, setShowPassword] = useState(false);
  const [showStatusIcon, setShowStatusIcon] = useState(false);

  const [typeKey, setTypeKey] = useState('password');

  useEffect(() => {
    showColor === true ? (
      setColorOne(cor1),
      setColorTwo(cor2),
      setColorThree(cor3),
      setColorFour(cor4)
    ) : (
      setColorOne(defCor1),
      setColorTwo(defCor2),
      setColorThree(defCor3),
      setColorFour(defCor4)
    )
  });
  return (
    <>
      <Grommet theme={themeRestVip}>
        <Page
          background={{ "color": colorOne }}
        >
          <Header align="center" direction="row" flex={false} justify="center" gap="medium">
            <Box  direction="row" pad='medium'>
              <Box
                justify="center"
                align="center"
                pad="xsmall"
                gap="xsmall"
                overflow="auto"
                margin={{ "bottom": "none", "horizontal": "none" }}
                width="xxlarge"
                height="xsmall"
                direction="row"
                border={{ color: colorTwo, size: '1px', side: 'bottom' }}
              >
                <Box direction="row" gap='small' pad='medium'>
                  <Map color={colorFour} /> <Text size="30" color={colorTwo}>  {nameCity}  {nameWorld} - {unidWorld}</Text> </Box>
                <Box direction="row" gap='small' pad='medium'>
                  <PhoneFlip color={colorFour} /> <Text size="30" color={colorTwo}> {contatoPhone}</Text>  </Box>
                <Box direction="row" gap='small' pad='medium'>
                  <Mail color={colorFour} /><Text size="30" color={colorTwo}> {contatoMail}</Text></Box>
                <Box direction="row" align="center" gap="medium" >
                  <DropButton
                  
                    tip={'Entrar'}
                    dropProps={{ align: { left: 'right' } }}
                    color={colorFour} fill='horizontal'
                    label={<User size='medium' color={colorFour} />}
                    dropContent={
                      <Box gap='small' wrap pad="small" background="transparent"  height="xsmall" width="large" >
                        <Box border align="center" height="small" width="large" direction='row' gap='small' pad="medium" background={colorFour} >

                          <MaskedInput
                          
                            color={colorTwo}
                            id="email"
                            name="email"
                            mask={[

                              { regexp: /^[\w\-_.]+$/, placeholder: 'mail' },
                              { fixed: '@' },
                              { regexp: /^[\w]+$/, placeholder: 'restaurantevip' },
                              { fixed: '.' },
                              { regexp: /^[\w]+$/, placeholder: 'com' },
                            ]}
                          />
                          <TextInput textAlign='center' placeholder='senha' color={colorTwo} name="password" id="password" type={typeKey} />
                          <Button
                            pad='xsmall'
                            icon={<Login color={colorTwo} />}
                            size='medium'

                          />

                          {showPassword === true ? (
                            <>
                              <Button
                                color={colorOne}
                                pad='xsmall'
                                icon={<SearchAdvanced color={colorTwo} />}
                                size='medium'
                                onClick={() => setShowPassword(!showPassword)}
                                onMouseDown={() => setTypeKey('null')}
                              />
                            </>

                          ) : (
                            <>
                              <Button
                                color={colorFour}
                                pad='xsmall'
                                icon={<Lock color={colorTwo} />}
                                size='medium'
                                onClick={() => setShowPassword(!showPassword)}
                                onMouseDown={() => setTypeKey('password')}
                              />

                            </>
                          )}

                        </Box>
                      </Box>
                    }
                  >
                  </DropButton>
                </Box>
              </Box>
            </Box>
          </Header>
          <Box
            pad='medium'
            align="center">
          </Box>
          <Box
            direction="row"
            gap="medium"
            justify="center">
            <Box
              elevation="medium" background="light-1" round="small" height="medium" width="medium" overflow="hidden">
              <Carousel fill play={3000} controls="arrows" initialChild={3}>
                <Image fit="cover" src={dataImg1} />
                <Image fit="cover" src={dataImg2} />
                <Image fit="cover" src={dataImg3} />
              </Carousel>
            </Box>
            <Box elevation="medium" background="light-1" round="small" height="medium" width="medium" overflow="hidden">
            <Carousel fill play={2500} controls="arrows" initialChild={2}>
                <Image fit="cover" src={dataImg1} />
                <Image fit="cover" src={dataImg2} />
                <Image fit="cover" src={dataImg3} />
              </Carousel>
            </Box>
            <Box elevation="medium" background="light-1" round="small" height="medium" width="medium" overflow="hidden">
            <Carousel fill play={3000} controls="arrows" initialChild={1}>
                <Image fit="cover" src={dataImg1} />
                <Image fit="cover" src={dataImg2} />
                <Image fit="cover" src={dataImg3} />
              </Carousel>
            </Box>

          </Box>
          <Box
            pad='medium'
          >
          </Box>
          <PageHeader
            background={colorTwo}
            color={colorTwo}
            align="center"
            justify="center"
            content="center"
            title={showColor === true ? (
              <Heading color={colorOne} textAlign='center' >Menu Gastronomy
                <Box color={colorTwo} pad="medium" alignContent='center' align='center'><StarRating onClick={() => setShowColor(!showColor)} /></Box>
              </Heading>
            ) : (
              <Heading

                color={colorOne} textAlign='center' >Menu Gastronomy
                <Box pad="medium" alignContent='center' align='center'><StarRating onClick={() => setShowColor(!showColor)} /></Box>
              </Heading>
            )}
            subtitle={showColor === true ? (
              <Text>Landin parent</Text>
            ) : (
              <Text>"A subtitle for the page."</Text>

            )}
            parent=
            {showColor === true ? (
              <Text>Landin parent</Text>
            ) : (
              <Avatar src={avatarImg} />
            )}
            actions={<Button label="Edit" primary />}
          >
            

          </PageHeader>
          <Main>

          </Main>
        </Page>

      </Grommet>
    </>
  )
}

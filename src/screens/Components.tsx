// Components Screen

import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, useColorScheme, View } from 'react-native';
import { Calendar, Card, ContentBlock, FeaturedEventCard, GameCard, GameCardLive, Hero, IconBlock, LogoCloud, PlayerCard, TeamLeaders, Testimonial } from '../components/Components';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

const Components = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = 'bg-secondary dark:bg-primary';

  return (
    <SafeAreaView className={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior='automatic'
        className={backgroundStyle}>
        {/* Hero Image */}
        <View>
          <Hero
            imageSource={require('../assets/images/hero-img.png')}
            title={'Image Hero Title'}
            subtitle={'This is a Subtitle of a Hero component'}
          />
        </View>

        <View className='flex-1 px-4'>
          {/* Game Card Live */}
          <View className='mt-5'>
            <GameCardLive
              gsScore={84}
              gsName={'Warriors'}
              gsLogo={require('../assets/images/warriors-logo.png')}
              opponentScore={65}
              opponentName={'Nuggets'}
              opponentLogo={require('../assets/images/nuggets-logo.png')}
              quarter={'Q3'}
              timeRemaining={'11:23'}
              broadcast={'NBC Sports'}
            />
          </View>

          {/* Game Card */}
          <View className='mt-5'>
            <GameCard
              gsLogo={require('../assets/images/warriors-logo.png')}
              gsInitial={'GSW'}
              gsRecord={'65-0'}
              opponentLogo={require('../assets/images/nuggets-logo.png')}
              opponentInitial={'DEN'}
              opponentRecord={'45-22'}
              broadcast={'NBC Sports'}
              gameLocation={'vs'}
              gameTime={'Sun, Feb 25 at 7:00 PM'}
            />
          </View>

          {/* Featured Event Card */}
          <View className='mt-5'>
            <FeaturedEventCard
              image={require('../assets/images/janet-jackson-event.png')}
              dateTime={'Wed, Jun 12 at 8:00 PM'}
              title={'Janet Jackson'}
              subtitle={'With Special Guest Nelly'}
              ticketsUrl={'https://www.ticketmaster.com/chase-center-tickets-san-francisco/venue/230012'}
              detailsUrl={'https://www.chasecenter.com/events/janet-jackson-20240612'} />
          </View>

          {/* Player Card */}
          <View className='mt-5'>
            <PlayerCard
              image={require('../assets/images/player-img.png')}
              jerseyNumber={30}
              firstName={'Player'}
              lastName={'Name'}
              position={'Position'}
            />
          </View>
          <View className='mt-5'>
            <PlayerCard
              image={require('../assets/images/w-player-img.png')}
              jerseyNumber={10}
              firstName={'W Player'}
              lastName={'Name'}
              position={'Position'}
            />
          </View>

          {/* Team Leaders */}
          <View className='mt-5'>
            <TeamLeaders
              seasonYear='2023-24'
              assists={'7.2'}
              blocks={'0.9'}
              image={require('../assets/images/player-img.png')}
              points={'28.1'}
              rebounds={'6.7'}
              steals={'1.3'}
              threePercentage={'42.1%'}
              team='warriors'
            />
          </View>
          <View className='mt-5'>
            <TeamLeaders
              seasonYear='2023-24'
              assists={'7.3'}
              blocks={'2.2'}
              image={require('../assets/images/w-player-img.png')}
              points={'22.8'}
              rebounds={'9.5'}
              steals={'1.5'}
              threePercentage={'44.9%'}
              team='valkyries'
            />
          </View>

          {/* Card */}
          <View className='mt-5'>
            <Card
              title={'Card Title'}
              description={'This is a Description of a Card component.'}
            />
          </View>

          {/* Horizontal Scroll of Cards */}
          <ScrollView horizontal={true} className='mt-5'>
            <View className='w-64 mr-5'>
              <Card
                title={'Card Title'}
                description={'This is a Description of a Card component.'}
                titleColor={'text-secondary'}
                descriptionColor={'text-secondary'}
                backgroundColor={'bg-warriors-blue'}
              />
            </View>
            <View className='w-64 mr-5'>
              <Card
                title={'Card Title'}
                description={'This is a Description of a Card component.'}
              />
            </View>
            <View className='w-64 mr-5'>
              <Card
                title={'Card Title'}
                description={'This is a Description of a Card component.'}
              />
            </View>
          </ScrollView>

          {/* Icon Block */}
          <View className='my-5 last:-mb-0'>
            <IconBlock
              icon={solidIcons.faCoffee}
              title={'Icon Block Title'}
              description={'This is the Description of an Icon Block.'}
            />
            <IconBlock
              icon={solidIcons.faBolt}
              title={'Icon Block Title'}
              description={'This is the Description of an Icon Block.'}
            />
          </View>

          {/* Content Block */}
          <View className='mb-5'>
            <ContentBlock
              subtitle={'Subtitle'}
              title={'Content Block Title'}
              body={'This is the Body of a Content Block where body content will be displayed.'}
              backgroundColor={'bg-muted'}
            />
          </View>

          {/* Testimonial */}
          <View className='mb-5'>
            <Testimonial
              imageSource={require('../assets/images/person.png')}
              quote={'This is the Quote of a Testimonial component where the content of the testimonial with be displayed.'}
              byline={'Testimonial Byline'}
            />
          </View>

          {/* Logo Cloud */}
          <View className='mb-5'>
            <LogoCloud
              title={'Our Presenting Partners'}
              imageSources={[{ source: require('../assets/images/adobe.png'), link: 'https://www.adobe.com', }, { source: require('../assets/images/kaiser.png'), link: 'https://www.kaiserpermanente.org', },]}
            />
          </View>
          {/* Calendar */}
          <View className='mb-5'>
            <Calendar
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Components;

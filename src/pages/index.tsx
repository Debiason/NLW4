import {Profile} from '../components/Profile'
import { ExperienceBar } from "../components/ExperienceBar";

import styles from '../styles/pages/Home.module.css'
import React from 'react';
import { CompletedChallenges } from '../components/CompletedChallenges';
import { Countdown } from '../components/Countdown';

import Head from 'next/head'
import { ChallengeBox } from '../components/ChallengeBox';

export default function Home() {
  return (
    <div className={styles.container}>

      <Head>
        <title>Ínicio | move.it</title>
      </Head>
      <ExperienceBar />
      <section>
        <div>
          <Profile />  
          <CompletedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
   </div>
  )
}

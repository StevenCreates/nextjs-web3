import { useWeb3React } from '@web3-react/core'
import Head from 'next/head'
import Image from 'next/image'
import { injected } from '../components/wallet/connectors'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { active, account, library, connector, activate, deactivate} = useWeb3React()

  const connect = async () => {
    try{
      await activate(injected)
    } catch (ex) {
      console.log(ex)
    }
  }

  const disconnect = async () => {
    try {
      deactivate()
    } catch (ex) {
      console.log(ex)
    }
  }

  return (
    <div className={styles.container}>
      <button onClick={connect} className={styles.card}> Connect </button>
     {active ? <span>Connected</span> : <span>Not Connected</span>}
     <button onClick={disconnect} className={styles.card}> Disconnect </button>
    </div>
  )
}

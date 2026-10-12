import type { ReactNode } from 'react'
import { motion, useReducedMotion } from 'motion/react'
import { fadeUp, viewport } from '../lib/motion'

export default function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div className={className} variants={fadeUp} initial={reduceMotion ? false : 'hidden'} whileInView="visible" viewport={viewport}>
      {children}
    </motion.div>
  )
}


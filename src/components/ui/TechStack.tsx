import Image from 'next/image'
import { Tooltip, Flowbite } from 'flowbite-react'
import TooltipTheme from '@/components/themes/flowbite-react/TooltipTheme'
import { TechStackProps } from '@/types/ProjectProps'

const TechStack = ({ logo, title }: TechStackProps) => (
  <div className="relative flex items-center justify-center">
    <Flowbite theme={{ theme: TooltipTheme }}>
      <Tooltip content={title}>
        <Image src={logo} alt={title} width={50} height={50} />
      </Tooltip>
    </Flowbite>
  </div>
)

export default TechStack

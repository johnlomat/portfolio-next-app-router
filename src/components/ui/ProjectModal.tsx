import Link from 'next/link'
import { Open_Sans, Montserrat } from 'next/font/google'
import { Button, Modal } from 'flowbite-react'
import TechStack from '@/components/ui/TechStack'
import { ProjectProps } from '@/types/ProjectProps'
import { cn } from '@/lib/utils'

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
})

const ProjectModal = ({
  title,
  description,
  scope_list_html,
  demo_link,
  screenshot_link,
  type,
  tech_stack,
  isOpen,
  onClose,
}: ProjectProps) => {
  return (
    <Modal show={isOpen} onClose={onClose}>
      <Modal.Header className={open_sans.className}>{title}</Modal.Header>
      <Modal.Body className={open_sans.className}>
        <div className="space-y-6">
          <div className="w-full">
            <div className={cn(montserrat.className, 'uppercase text-cyan-700')}>
              Project Overview
            </div>
            <div>{description}</div>
          </div>
          <div className="w-full">
            <div className={cn(montserrat.className, 'uppercase text-cyan-700')}>Type</div>
            <div>{type}</div>
          </div>
          <div className="w-full">
            <div className={cn(montserrat.className, 'uppercase text-cyan-700')}>Key Features</div>
            <ul
              dangerouslySetInnerHTML={{ __html: scope_list_html }}
              className="list-disc space-y-1 ps-[1.25rem]"
            />
          </div>
          <div className="w-full">
            <div className={cn(montserrat.className, 'mb-1 uppercase text-cyan-700')}>
              Tech Stack
            </div>
            <div className="grid grid-cols-4 flex-wrap gap-6 md:grid-cols-8">
              {tech_stack.map((tech, index) => (
                <TechStack key={index} {...tech} />
              ))}
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer className="justify-end">
        {demo_link && (
          <Button
            as={Link}
            href={demo_link}
            target="_blank"
            rel="noopener noreferrer"
            className={`${montserrat.className} border border-black bg-cyan-700 font-montserrat font-bold uppercase text-white transition ease-in-out hover:bg-cyan-900`}
          >
            Demo
          </Button>
        )}
        {screenshot_link && (
          <Button
            as={Link}
            href={screenshot_link}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              montserrat.className,
              'border border-black bg-cyan-700 font-montserrat font-bold uppercase text-white transition ease-in-out hover:bg-cyan-900',
              {
                'border border-gray-200 bg-white uppercase text-gray-900 hover:border-gray-300 hover:bg-gray-200':
                  demo_link,
              },
            )}
          >
            Screenshot
          </Button>
        )}
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectModal

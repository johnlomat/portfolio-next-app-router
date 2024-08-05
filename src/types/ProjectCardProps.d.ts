interface ProjectCardProps {
  title: string
  description: string
  scope_list_html: string
  demo_link: string
  screenshot_link: string
  type: string
  tech_stack: any[]
  image?: {
    full: string
    alt_text: string
  }
  isOpen?: boolean
  onClose?: () => void
}

export default ProjectCardProps

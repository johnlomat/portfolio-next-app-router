export interface ProjectProps {
  title: string
  description: string
  type: string
  scope_list_html: string
  image?: Image
  screenshot_link: string
  demo_link: string
  tech_stack: TechStack[]
  isOpen?: boolean
  onClose?: () => void
}

export interface Image {
  full: string
  alt_text: string
}

export interface TechStackProps {
  logo: string
  title: string
}

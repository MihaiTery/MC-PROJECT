import {
  Headphones,
  MessageCircle,
  Send,
  FileText,
  Scale,
  ScanLine,
  Cloud,
  Bell,
  LucideProps,
} from 'lucide-react'

const iconMap: Record<string, React.FC<LucideProps>> = {
  headphones: Headphones,
  'message-circle': MessageCircle,
  send: Send,
  'file-text': FileText,
  scale: Scale,
  scan: ScanLine,
  cloud: Cloud,
  bell: Bell,
}

interface ModuleIconProps extends LucideProps {
  name: string
}

export default function ModuleIcon({ name, ...props }: ModuleIconProps) {
  const Icon = iconMap[name] ?? Headphones
  return <Icon {...props} />
}
